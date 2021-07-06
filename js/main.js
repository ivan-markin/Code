import Swiper from 'swiper';

const slides = document.querySelectorAll('.slider-item');
let activeSlide = document.querySelector('.main-screen');
const mosaicToggleElements = document.querySelectorAll('.slider-item__content-bottom');
const playButton = document.querySelector('.main-screen__video-block-button');
const closeVideoButton = document.querySelector('.video-popup__close');
const videoPopup = document.querySelector('.video-popup');
const videoElement = document.querySelector('.video-popup__video');
const mobileMenuPopup = document.querySelector('.mobile-menu-popup');
const closeMenuButton = document.querySelector('.mobile-menu-popup__close');
const openMenuButton = document.querySelector('.mobile-head__menu-icon');

let swiper;

function swiperInit() {
	if (window.matchMedia('(max-width: 768px)').matches) {

		swiper = new Swiper('.swiper-container', {
			loop: false,
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
}

function sliderInit() {
	if (window.matchMedia('(min-width: 769px)').matches) {
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

// Event listeners

mosaicToggleElements.forEach((element) => {
	element.addEventListener('mouseover', (event) => {
		event.target.closest('.slider-item').querySelector('.slider-item__mosaic').style.opacity = '0';
	})
	element.addEventListener('mouseleave', (event) => {
		event.target.closest('.slider-item').querySelector('.slider-item__mosaic').style.opacity = '1';
	})
})

playButton.addEventListener('click', () => {
	videoElement.play();
	openVideoPopup();
})

closeVideoButton.addEventListener('click', () => {
	closeVideoPopup();
	stopVideo();
})

openMenuButton.addEventListener('click', openMobileMenu);

closeMenuButton.addEventListener('click', closeMobileMenu);

swiperInit();
sliderInit();

window.addEventListener('resize', () => {
	sliderInit();
	swiperInit();
});