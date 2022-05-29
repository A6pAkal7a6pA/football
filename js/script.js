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
	spaceBetween: 0,
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
	allowTouchMove: false,
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

function setUpConfiguration() {
	let firstChildRoadItem = document.querySelector('.road-top .road__item:first-child');
	let marginMidLine = firstChildRoadItem.getBoundingClientRect().width / 2;
	document.querySelector('.road-mid').style.marginLeft = marginMidLine + 'px';
	document.querySelector('.road-bot').style.marginLeft = marginMidLine + 10 + 'px';
	let checkInner = document.querySelector('.check__inner');
	document.querySelector('.road__inner').style.marginLeft = checkInner.getBoundingClientRect().left + 'px';
}

setUpConfiguration();

function getSiblings(elem) {
	var siblings = [];
	var sibling = elem;
	while (sibling.previousSibling) {
		sibling = sibling.previousSibling;
		sibling.nodeType == 1 && siblings.push(sibling);
	}

	sibling = elem;
	while (sibling.nextSibling) {
		sibling = sibling.nextSibling;
		sibling.nodeType == 1 && siblings.push(sibling);
	}

	return siblings;
}


let headSlides = document.querySelectorAll('.head-slider__slide');
let colors = document.querySelectorAll('.custom__color');

headSlides.forEach((slide) => {
	slide.addEventListener('click', () => {
		slide.classList.add('active');
		getSiblings(slide).forEach((slide) => slide.classList.remove('active'));
	});
});

colors.forEach((slide) => {
	slide.addEventListener('click', () => {
		slide.classList.add('active');
		document.querySelector('.custom-human__body').src = skins[slide.classList[2]].body;
		document.querySelector('.custom-human__right-shoulder').src = skins[slide.classList[2]].rightShoulder;
		document.querySelector('.custom-human__left-shoulder').src = skins[slide.classList[2]].leftShoulder;
		document.querySelector('.custom-human__right-hand').src = skins[slide.classList[2]].rightHand;
		document.querySelector('.custom-human__left-hand').src = skins[slide.classList[2]].leftHand;
		document.querySelector('.custom-human__legs').src = skins[slide.classList[2]].legs;

		getSiblings(slide).forEach((slide) => slide.classList.remove('active'));
	});
});

let skins = {
	darkBlack: {
		body: 'img/customization/colors/body_darkBlack.png',
		leftShoulder: 'img/customization/colors/leftHand_darkBlack.png',
		leftHand: 'img/customization/colors/leftFist_darkBlack.png',
		rightShoulder: 'img/customization/colors/rightHand_darkBlack.png',
		rightHand: 'img/customization/colors/rightFist_darkBlack.png',
		legs: 'img/customization/colors/legs_darkBlack.png'
	},
	darkBrown: {
		body: 'img/customization/colors/body_darkBrown.png',
		leftShoulder: 'img/customization/colors/leftHand_darkBrown.png',
		leftHand: 'img/customization/colors/leftFist_darkBrown.png',
		rightShoulder: 'img/customization/colors/rightHand_darkBrown.png',
		rightHand: 'img/customization/colors/rightFist_darkBrown.png',
		legs: 'img/customization/colors/legs_darkBrown.png'
	},
	darkChocolate: {
		body: 'img/customization/colors/body_darkChocolate.png',
		leftShoulder: 'img/customization/colors/leftHand_darkChocolate.png',
		leftHand: 'img/customization/colors/leftFist_darkChocolate.png',
		rightShoulder: 'img/customization/colors/rightHand_darkChocolate.png',
		rightHand: 'img/customization/colors/rightFist_darkChocolate.png',
		legs: 'img/customization/colors/legs_darkChocolate.png'
	},
	lightBrick: {
		body: 'img/customization/colors/body_lightBrick.png',
		leftShoulder: 'img/customization/colors/leftHand_lightBrick.png',
		leftHand: 'img/customization/colors/leftFist_lightBrick.png',
		rightShoulder: 'img/customization/colors/rightHand_lightBrick.png',
		rightHand: 'img/customization/colors/rightFist_lightBrick.png',
		legs: 'img/customization/colors/legs_lightBrick.png'
	},
	lightChiz: {
		body: 'img/customization/colors/body_lightChiz.png',
		leftShoulder: 'img/customization/colors/leftHand_lightChiz.png',
		leftHand: 'img/customization/colors/leftFist_lightChiz.png',
		rightShoulder: 'img/customization/colors/rightHand_lightChiz.png',
		rightHand: 'img/customization/colors/rightFist_lightChiz.png',
		legs: 'img/customization/colors/legs_lightChiz.png'
	},
	lightOrange: {
		body: 'img/customization/colors/body_lightOrange.png',
		leftShoulder: 'img/customization/colors/leftHand_lightOrange.png',
		leftHand: 'img/customization/colors/leftFist_lightOrange.png',
		rightShoulder: 'img/customization/colors/rightHand_lightOrange.png',
		rightHand: 'img/customization/colors/rightFist_lightOrange.png',
		legs: 'img/customization/colors/legs_lightOrange.png'
	},
}