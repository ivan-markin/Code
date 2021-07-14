import gulp from 'gulp';
import scss from 'gulp-sass';
import browserSync from 'browser-sync';
import uglify from 'gulp-uglify-es';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import del from 'del';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import log from 'gulplog';

export const browsersync = () => {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })
}

export const scripts = () => {
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
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify.default())
        .on('error', log.error)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.stream());
}

export const styles = () => {
    return gulp.src(['./app/scss/style.scss'])
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            grid: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
}

export const images = () => {
    return gulp.src('./app/images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/images'))
}

export const watching = () => {
    gulp.watch(['./app/scss/**/*.scss'], styles);
    gulp.watch(['./app/js/**/*.js'], scripts);
    gulp.watch(['./app/images/**/*'], images);
    gulp.watch(['./app/*.html']).on('change', browserSync.reload);
}

export const cleanDist = () => {
    return del('dist')
}

export const buildDist = () => {
    return gulp.src([
        './app/css/style.css',
        './app/js/bundle.js',
        './app/fonts/**/*',
        './app/*.html'
    ], { base: 'app' })
        .pipe(gulp.dest('dist'))
}

export const build = () => gulp.series(cleanDist, images, buildDist);
export default gulp.parallel(styles, scripts, browsersync, watching);