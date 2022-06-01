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
	spaceBetween: 50,
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

let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', () => {
	document.querySelector('.header').classList.toggle('active');
	document.body.classList.toggle('disabled');
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
	allowTouchMove: true,
	simulateTouch: false,
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
	document.querySelector('.road__content').style.marginLeft = checkInner.getBoundingClientRect().left + 'px';
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

function customElementHandler(slide) {
	let classPart = slide.parentElement.parentElement.parentElement.classList[0];
	let index = Array.from(slide.parentElement.children).indexOf(slide) + 1;
	let imgSrc = slide.childNodes[0].src;
	let fileName = imgSrc.substring(imgSrc.lastIndexOf('/') + 1, imgSrc.length)
	if (classPart === 'custom__content-tshirt') {
		let customTShirt = document.querySelector('.custom-human__tshirt');
		customTShirt.style.display = 'block';
		customTShirt.src = 'img/customization/tShirts/tShirt' + index + '.png';
	} else if (classPart === 'custom__content-short') {
		document.querySelector('.custom-human__underpants').src = 'img/customization/shorts/shorts' + index + '.png';
	} else if (classPart === 'custom__content-boots') {
		let customBoots = document.querySelector('.custom-human__boots');
		customBoots.style.display = 'block';
		customBoots.src = 'img/customization/boots/boots' + index + '.png';
	} else if (classPart === 'custom__content-head') {
		let color = fileName.substring(fileName.indexOf('_') + 1, fileName.lastIndexOf('_'));
		document.querySelector('.custom-human__head').src = 'img/customization/otherHeads/' + fileName;
		changeHumanColor(color)
	}
	getSiblings(slide).forEach((slide) => slide.classList.remove('active'));
}

function getFirstMini() {

}

document.querySelectorAll('.head-slider__slide').forEach((slide) => {
	slide.addEventListener('click', () => {
		slide.classList.add('active');
		customElementHandler(slide)
	});
});

function changeHumanColor(color) {
	document.querySelector('.custom-human__body').src = skins[color].body;
	document.querySelector('.custom-human__right-shoulder').src = skins[color].rightShoulder;
	document.querySelector('.custom-human__left-shoulder').src = skins[color].leftShoulder;
	document.querySelector('.custom-human__right-hand').src = skins[color].rightHand;
	document.querySelector('.custom-human__left-hand').src = skins[color].leftHand;
	document.querySelector('.custom-human__legs').src = skins[color].legs;
}

document.querySelectorAll('.custom__color').forEach((slide) => {
	slide.addEventListener('click', () => {
		slide.classList.add('active');
		let color = slide.classList[2];
		let firstElement = document.querySelector('.' + color);
		let index = Array.from(firstElement.parentElement.children).indexOf(firstElement) + 1;
		headSlider[0].slideTo(index - 1, 1000, true);
		firstElement.classList.add('active');
		changeHumanColor(color);
		customElementHandler(firstElement)
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
	darkBrick: {
		body: 'img/customization/colors/body_darkBrick.png',
		leftShoulder: 'img/customization/colors/leftHand_darkBrick.png',
		leftHand: 'img/customization/colors/leftFist_darkBrick.png',
		rightShoulder: 'img/customization/colors/rightHand_darkBrick.png',
		rightHand: 'img/customization/colors/rightFist_darkBrick.png',
		legs: 'img/customization/colors/legs_darkBrick.png'
	},
	darkBrown: {
		body: 'img/customization/colors/body_darkBrown.png',
		leftShoulder: 'img/customization/colors/leftHand_darkBrown.png',
		leftHand: 'img/customization/colors/leftFist_darkBrown.png',
		rightShoulder: 'img/customization/colors/rightHand_darkBrown.png',
		rightHand: 'img/customization/colors/rightFist_darkBrown.png',
		legs: 'img/customization/colors/legs_darkBrown.png'
	},
	light: {
		body: 'img/customization/colors/body_light.png',
		leftShoulder: 'img/customization/colors/leftHand_light.png',
		leftHand: 'img/customization/colors/leftFist_light.png',
		rightShoulder: 'img/customization/colors/rightHand_light.png',
		rightHand: 'img/customization/colors/rightFist_light.png',
		legs: 'img/customization/colors/legs_light.png'
	},
	lightCheese: {
		body: 'img/customization/colors/body_lightCheese.png',
		leftShoulder: 'img/customization/colors/leftHand_lightCheese.png',
		leftHand: 'img/customization/colors/leftFist_lightCheese.png',
		rightShoulder: 'img/customization/colors/rightHand_lightCheese.png',
		rightHand: 'img/customization/colors/rightFist_lightCheese.png',
		legs: 'img/customization/colors/legs_lightCheese.png'
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
	lightPink: {
		body: 'img/customization/colors/body_lightPink.png',
		leftShoulder: 'img/customization/colors/leftHand_lightPink.png',
		leftHand: 'img/customization/colors/leftFist_lightPink.png',
		rightShoulder: 'img/customization/colors/rightHand_lightPink.png',
		rightHand: 'img/customization/colors/rightFist_lightPink.png',
		legs: 'img/customization/colors/legs_lightPink.png'
	},

	lightYellow: {
		body: 'img/customization/colors/body_lightYellow.png',
		leftShoulder: 'img/customization/colors/leftHand_lightYellow.png',
		leftHand: 'img/customization/colors/leftFist_lightYellow.png',
		rightShoulder: 'img/customization/colors/rightHand_lightYellow.png',
		rightHand: 'img/customization/colors/rightFist_lightYellow.png',
		legs: 'img/customization/colors/legs_lightYellow.png'
	},
}

document.querySelectorAll('.custom__variant').forEach(variant => {
	variant.addEventListener('click', () => {
		variant.classList.add('active');
		let index = Array.from(variant.parentElement.children).indexOf(variant);
		document.querySelectorAll('.custom__content-part').forEach(part => {
			if (Array.from(part.parentElement.children).indexOf(part) === index) {
				part.classList.add('visible');
				getSiblings(part).forEach(part => part.classList.remove('visible'));
			}
		});
		getSiblings(variant).forEach(variant => variant.classList.remove('active'));
	});
});

// let roadPopups = document.querySelectorAll('.road__info');

// roadPopups.forEach(popup => {
// 	popup.addEventListener('mouseover', () => {
// 		popup.classList.remove('active')
// 	});
// 	// popup.addEventListener('mouseout', () => {
// 	// 	popup.classList.add('active')
// 	// });
// });
document.querySelector('.main__catridge').addEventListener('click', (e) => {
	e.target.classList.toggle('anime')
	document.querySelector('.main__project').classList.toggle('anime')
	document.querySelector('.main__tv').classList.toggle('animate')
	document.querySelector('.main__yazik').classList.toggle('active')
	document.querySelector('.main__dendy').classList.toggle('active')
	document.querySelector('.main__button').classList.toggle('anime')
});

window.addEventListener('scroll', e => {
	//проверить высоту и разделить на три скролла 3 анимации

	console.log(window.scrollY);
});