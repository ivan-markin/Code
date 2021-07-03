const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const log = require('gulplog');

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })
}

function scripts(){
    const b = browserify({
      entries: './app/js/main.js',
      debug: true
    });
    
    return b.transform("babelify", {
      presets: ["@babel/preset-env"]
      })
      .bundle()
      .pipe(source('./bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
          // Add transformation tasks to the pipeline here.
          .pipe(uglify())
          .on('error', log.error)
      .pipe(sourcemaps.write('./'))
      .pipe(dest('./app/js/'));
  }

function styles() {
    return src('./app/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            grid: true
        }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function images() {
    return src('./app/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest('dist/images'))
}

function watching() {
    watch(['./app/scss/**/*.scss'], styles);
    watch(['./app/js/**/*.js', '!./app/js/bundle.js', '!./app/js/bundle.js.map'], scripts);
    watch(['./app/images/**/*'], images);
    watch(['./app/*.html']).on('change', browserSync.reload);
}

function cleanDist() {
    return del('dist')
}

function buildDist() {
    return src([
        './app/css/style.min.css',
        './app/js/main.min.js',
        './app/fonts/**/*',        
        './app/*.html'
    ], {base: 'app'})
    .pipe(dest('dist'))
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.buildDist = buildDist;

exports.build = series(cleanDist, images, buildDist);
exports.default = parallel(styles, scripts, browsersync, watching)