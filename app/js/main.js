const slides = document.querySelectorAll('.slider-item');
let activeSlide = document.querySelector('.main-screen');

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

slides.forEach(slide => {
	slide.addEventListener('click', changeSlide)
})