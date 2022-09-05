let uniqueSlider = new Swiper('.unique-slider', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	speed: 500,
	effect: 'coverflow',
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: false,
	grabCursor: true,
	spaceBetween: 50,
	loopedSlides: 10,
	preloadImages: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 40,
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


window.addEventListener('load', () => {
	const skillsSlider = new Swiper('.skills-slider', {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		speed: 500,
		effect: 'coverflow',
		slidesPerView: 'auto',
		initialSlide: 0,
		centeredSlides: true,
		slideToClickedSlide: true,
		autoHeight: false,
		grabCursor: true,
		spaceBetween: 0,
		coverflowEffect: {
			rotate: 0,
			stretch: 135,
			depth: 100,
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
	skillsSlider.init();

	const storeSlider = new Swiper('.store-slider', {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		speed: 500,
		effect: 'coverflow',
		slidesPerView: 'auto',
		initialSlide: 0,
		centeredSlides: true,
		slideToClickedSlide: true,
		autoHeight: false,
		grabCursor: true,
		spaceBetween: 55,
		coverflowEffect: {
			rotate: 0,
			stretch: 20,
			depth: 20,
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
	storeSlider.init();

	const mainSlider = new Swiper('.main__slider', {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		speed: 500,
		slidesPerView: 1,
		initialSlide: 0,
		centeredSlides: true,
		slideToClickedSlide: true,
		autoHeight: false,
		grabCursor: true,
	});
	mainSlider.init();
	uniqueSlider = null;
	uniqueSlider = new Swiper('.unique-slider', {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		speed: 500,
		effect: 'coverflow',
		slidesPerView: 'auto',
		initialSlide: 0,
		centeredSlides: true,
		slideToClickedSlide: true,
		autoHeight: false,
		grabCursor: true,
		spaceBetween: 50,
		loopedSlides: 10,
		preloadImages: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 40,
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
	uniqueSlider.init();
});

let headSlider = new Swiper('.head-slider', {
	loop: false,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
	speed: 500,
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: false,
	slideToClickedSlide: false,

	preventClicks: false,
	autoHeight: false,
	grabCursor: false,
	spaceBetween: 10,
	allowTouchMove: true,
	simulateTouch: true,
	navigation: {
		nextEl: '.head-slider__button-next',
		prevEl: '.head-slider__button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	}
});

let posSlider = new Swiper('.possibilities__slider', {
	loop: false,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	speed: 500,
	slidesPerView: 'auto',
	initialSlide: 0,
	centeredSlides: false,
	slideToClickedSlide: false,
	preventClicks: false,
	autoHeight: false,
	grabCursor: false,
	spaceBetween: 20,
	allowTouchMove: true,
	simulateTouch: false,
	navigation: {
		nextEl: '.possibilities__button-next',
		prevEl: '.possibilities__button-prev',
	},
	pagination: {
		el: '.possibilities__pagination',
		type: 'bullets',
		clickable: true
	}
});


posSlider.on('snapIndexChange', function (slider) {
	let item = document.querySelectorAll('.possibilities__item')[slider.snapIndex];
	let human = document.querySelectorAll('.possibilities__human')[slider.snapIndex];
	item.classList.add('active')
	human.classList.add('active')
	getSiblings(human).forEach(hu => hu.classList.remove('active'))
	getSiblings(item).forEach(i => i.classList.remove('active'))

})