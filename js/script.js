const storeSlider = new Swiper('.store-slider', {
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false
	// },
	speed: 1000,
	effect: 'coverflow',
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: false,
	grabCursor: true,
	spaceBetween: 40,
	coverflowEffect: {
		rotate: 0,
		stretch: 20,
		depth: 40,
		modifier: 1,
		scale: 0.95,
		slideShadows: false,
	},
	pagination: {
		el: '.store-slider__pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.store-slider__button-next',
		prevEl: '.store-slider__button-prev',
	}
});

const skillsSlider = new Swiper('.skills-slider', {
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false
	// },
	speed: 1000,
	effect: 'coverflow',
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: false,
	grabCursor: true,
	spaceBetween:0,
	coverflowEffect: {
		rotate: 0,
		stretch: 120,
		depth: 80,
		modifier: 1,
		scale: 0.95,
		slideShadows: false,
	},
	pagination: {
		el: '.skills-slider__pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.skills-slider__button-next',
		prevEl: '.skills-slider__button-prev',
	}
});

const uniqueSlider = new Swiper('.unique-slider', {
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false
	// },
	speed: 1000,
	effect: 'coverflow',
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: false,
	grabCursor: true,
	spaceBetween: 20,
	coverflowEffect: {
		rotate: 0,
		stretch: 50,
		depth: 60,
		modifier: 1,
		scale: 0.9,
		slideShadows: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		500: {
			spaceBetween: 50,
		}
	}
});

let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', () => {
	document.querySelector('.header').classList.toggle('active');
});

let headSlider = new Swiper('.head-slider', {
	loop: false,
	// autoplay: {
	// 	delay: 5000,
	// 	disableOnInteraction: false
	// },
	speed: 1000,
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: false,
	slideToClickedSlide: false,
	preventClicks: false,
	autoHeight: false,
	grabCursor: false,
	spaceBetween: 10,
	navigation: {
		nextEl: '.head-slider__button-next',
		prevEl: '.head-slider__button-prev',
	}
	// breakpoints: {
	// 	500: {
	// 		spaceBetween: 50,
	// 	}
	// }
});