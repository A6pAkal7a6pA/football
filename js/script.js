const storeSlider = new Swiper('.store-slider', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
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
storeSlider.init();

const skillsSlider = new Swiper('.skills-slider', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
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

const uniqueSlider = new Swiper('.unique-slider', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
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
uniqueSlider.init();

let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', () => {
	document.querySelector('.header').classList.toggle('active');
	document.body.classList.toggle('disabled');
});


let headSlider = new Swiper('.head-slider', {
	loop: false,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	},
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
	speed: 1000,
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

document.querySelectorAll('.possibilities__item').forEach(item => {
	let index = Array.from(item.parentElement.children).indexOf(item);
	let human = document.querySelectorAll('.possibilities__human')[index]
	item.addEventListener('click', () => {
		item.classList.add('active')
		human.classList.add('active')
		getSiblings(human).forEach(hu => hu.classList.remove('active'))
		getSiblings(item).forEach(i => i.classList.remove('active'))
	});


});



function setUpConfiguration() {
	let firstChildRoadItem = document.querySelector('.road-top .road__item:first-child');
	let marginMidLine = firstChildRoadItem.getBoundingClientRect().width / 2;
	let midLine = document.querySelector('.road-mid');
	midLine.style.marginLeft = marginMidLine + 'px';
	document.querySelector('.road-bot').style.marginLeft = marginMidLine + 10 + 'px';
	let checkInner = document.querySelector('.check__inner');
	document.querySelector('.road__content').style.marginLeft = checkInner.getBoundingClientRect().left + 'px';
	midLine.style.width = document.documentElement.clientWidth - checkInner.getBoundingClientRect().left - marginMidLine + 'px';
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

function activateAnimation() {
	document.querySelector('.main__catridge').classList.toggle('anime')
	document.querySelector('.main__project').classList.toggle('anime')
	document.querySelector('.main__tv').classList.toggle('animate')
	document.querySelector('.main__yazik').classList.toggle('active')
	document.querySelector('.main__dendy').classList.toggle('active')
	document.querySelector('.main__button').classList.toggle('anime')
}



document.body.classList.add('disabled')
let count = 0;
let flag = true;
window.addEventListener('wheel', e => {
	if (flag) {
		flag = false;
		window.scrollTo(0, 0);
		activateAnimation()
		setTimeout(() => {
			document.body.classList.remove('disabled')
			document.querySelector('.header').style.opacity = '1';
		}, 5000)
	}

});

window.addEventListener('touchmove', e => {
	if (flag) {
		flag = false;
		window.scrollTo(0, 0);
		activateAnimation()
		setTimeout(() => {
			document.body.classList.remove('disabled')
			document.querySelector('.header').style.opacity = '1';
		}, 5000)
	}
});

document.querySelectorAll('.road__info').forEach(caret => {
	caret.addEventListener('click', () => {
		caret.parentElement.parentElement.parentElement.classList.toggle('active')
	});
})

document.querySelectorAll('.header__locale').forEach(locale => {
	locale.addEventListener('click', () => {
		if (locale.classList.contains('ru')) {
			document.body.classList.add('ru')
		} else {
			document.body.classList.remove('ru')
		}
		locale.classList.add('active')
		getSiblings(locale).forEach(loc => loc.classList.remove('active'))

	});
});
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		document.body.classList.remove('disabled')
		document.querySelector('.header').classList.remove('active')
		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}



function tokensProgress() {
	let max = 0;
	document.querySelectorAll('.deligate__num').forEach(item => {
		let num = +item.innerText.replace(/%/g, '');
		if (max <= num) {
			max = num;
		}
	});
	max = 100 / max;
	document.querySelectorAll('.deligate__item').forEach(item => {
		let num = item.children[0].innerText.replace(/%/g, '');
		item.children[2].children[0].style.width = num * max + '%';
	});
}
tokensProgress();

let posContainer = document.querySelector('.possibilities__inner');
let ball = document.querySelector('.secret-ball');
function ballPosition() {
	document.documentElement.style.setProperty('--ball-desktop', posContainer.getBoundingClientRect().left - 35 + 'px');
	document.documentElement.style.setProperty('--ball-mob', posContainer.getBoundingClientRect().width / 3 + 'px');
}
window.addEventListener('scroll', () => {
	if (posContainer.getBoundingClientRect().y <= 0 && posContainer.getBoundingClientRect().y >= -(posContainer.getBoundingClientRect().height)) {
		ball.classList.add('anime')
		ball.classList.remove('disabled')
	} else if (posContainer.getBoundingClientRect().y <= -posContainer.getBoundingClientRect().height || posContainer.getBoundingClientRect().y > 0) {
		ball.classList.add('anime')
		ball.classList.add('disabled')
	}

});

ballPosition();

let secretBall = document.querySelector('.secret-ball');
secretBall.addEventListener('click', () => secretBall.classList.toggle('active'))