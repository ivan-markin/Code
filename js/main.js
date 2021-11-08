import Swiper from 'swiper';

const slides = document.querySelectorAll('.slider-item');
const mosaicToggleElements = document.querySelectorAll('.slider-item__content-bottom');
const playButton = document.querySelector('.main-screen__video-block-button');
const closeVideoButton = document.querySelector('.video-popup__close');
const videoPopup = document.querySelector('.video-popup');
const videoElement = document.querySelector('.video-popup__video');
const mobileMenuPopup = document.querySelector('.mobile-menu-popup');
const closeMenuButton = document.querySelector('.mobile-menu-popup__close');
const openMenuButton = document.querySelector('.mobile-head__menu-icon');

let activeSlide = document.querySelector('.main-screen');
let swiper;

function swiperInit() {
	if (window.matchMedia('(max-width: 1015px)').matches) {

		swiper = new Swiper('.swiper-container', {
			loop: true,
			grabCursor: true,
			spaceBetween: 0,
		});

	} else {
		if (typeof swiper === 'object') swiper.destroy()
	}
}

function changeSlide(event) {
	if (!event.target.classList.contains('active') && (event.target.classList.contains('slider-item'))) {
		event.target.classList.add('active');
		activeSlide.classList.remove('active');
		activeSlide = event.target;
	}
	else if (!event.target.closest('.slider-item').classList.contains('active') && !event.target.classList.contains('slider-item') && event.target.closest('.slider-item')) {
		event.target.closest('.slider-item').classList.add('active');
		activeSlide.classList.remove('active');
		activeSlide = event.target.closest('.slider-item');
	}
	setTimeout(() => window.addEventListener('wheel', mouseWheelHandler, { once: true }), 1000)
}

function sliderInit() {
	if (window.matchMedia('(min-width: 1016px)').matches) {
		slides.forEach(slide => {
			slide.addEventListener('click', changeSlide)
		})
	}
}

function openVideoPopup() {
	videoPopup.classList.add('active');

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			videoPopup.classList.remove('active');
			stopVideo();
		}
	})

	document.addEventListener('click', (event) => {
		if (event.target === videoPopup) {
			videoPopup.classList.remove('active');
			stopVideo();
		}
	})
}

function closeVideoPopup() {
	videoPopup.classList.remove('active');

	document.removeEventListener('keydown', (event) => {
		if (event.code === 'Escape') {
			videoPopup.classList.remove('active');
			stopVideo();
		}
	})

	document.removeEventListener('click', (event) => {
		if (event.target === videoPopup) {
			videoPopup.classList.remove('active');
			stopVideo();
		}
	})
}

function stopVideo() {
	videoElement.pause();
	videoElement.currentTime = 0;
}

function openMobileMenu() {
	mobileMenuPopup.classList.add('active');
}

function closeMobileMenu() {
	mobileMenuPopup.classList.remove('active');
}

function setCustomCSSProperty() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function toggleSlideHandler(condition) {
	if (swiper) {
		swiper[condition ? 'slideNext' : 'slidePrev'](300)
	}
	let activeSlideIndex = [...slides].findIndex(slide => slide.classList.contains('active'));
	const isActiveFirst = () => activeSlideIndex === 0;
	const isActiveLast = () => activeSlideIndex === slides.length - 1;
	[...slides]
		.find((slide, index) =>
			index === (condition ?
				(isActiveFirst() ? slides.length - 1 : activeSlideIndex - 1) :
				(isActiveLast() ? 0 : activeSlideIndex + 1)))
		.click();
}

function mouseWheelHandler(evt) {
	let delta = Math.max(-1, Math.min(1, (evt.wheelDelta || -evt.detail)));
	toggleSlideHandler(delta === 1);
}

//swipe event handler
let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
	const firstTouch = evt.touches[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return;
	}
	const xUp = evt.touches[0].clientX;
	const yUp = evt.touches[0].clientY;
	const xDiff = xDown - xUp;
	const yDiff = yDown - yUp;
	toggleSlideHandler(Math.abs(xDiff) < Math.abs(yDiff) && yDiff > 0);
	xDown = null;
	yDown = null;
}

// Event listeners
mosaicToggleElements.forEach((element) => {
	element.addEventListener('mouseover', (event) => {
		event.target.closest('.slider-item').querySelector('.slider-item__mosaic').style.opacity = '0';
	})
	element.addEventListener('mouseleave', (event) => {
		event.target.closest('.slider-item').querySelector('.slider-item__mosaic').style.opacity = '1';
	})
})

if (playButton) {
	playButton.addEventListener('click', () => {
		videoElement.play();
		openVideoPopup();
	})
}

if (closeVideoButton) {
	closeVideoButton.addEventListener('click', () => {
		closeVideoPopup();
		stopVideo();
	})
}

openMenuButton.addEventListener('click', openMobileMenu);

closeMenuButton.addEventListener('click', closeMobileMenu);

swiperInit();
sliderInit();
setCustomCSSProperty();

window.addEventListener('resize', () => {
	setCustomCSSProperty()
	sliderInit();
	swiperInit();
});
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
window.addEventListener('wheel', mouseWheelHandler, { once: true });
