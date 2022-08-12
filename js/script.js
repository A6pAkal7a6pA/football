setTimeout(() => document.getElementById('preloader')?.remove(), 10000);



document.addEventListener('DOMContentLoaded', () => {
	const preloader = document.getElementById('preloader');
  const mediaFiles = document.querySelectorAll('img, scripts, json, svg, video, gif');
  const preloaderPercent = document.querySelector('.preloader__percent');
	const preloaderProgressbarLine = document.querySelector('.preloader__progressbar_line');
  let i = 1;

  function calcLoader() {
		let percent = ((i * 100) / mediaFiles.length).toFixed() + '%';
    preloaderPercent.innerText = percent;
		preloaderProgressbarLine.style.width = percent;
    if (i === mediaFiles.length) {
      preloaderPercent.innerText = 100 + '%';
			preloaderProgressbarLine.style.width = 100 + '%';
			preloader.remove();
    }
  }

  Array.from(mediaFiles).forEach((file, index) => {
    if (file.complete) {
      i++
      calcLoader()
    } else {
      file.onload = () => {
        i++
        calcLoader()
      }
    }
  });
})


let slideIndex = 0;

setTimeout(() => {

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

});
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
	wrapperClass: 'unique-slider__wrapper',
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
	uniqueSlider = new Swiper('.unique-slider', {
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
		wrapperClass: 'unique-slider__wrapper',
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
	storeSlider = new Swiper('.store-slider', {
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
});

const mainSlider = new Swiper('.main__slider', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	speed: 1000,
	slidesPerView: 1,
	initialSlide: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: false,
	grabCursor: true,
});

let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', () => {
	document.querySelector('.header').style.opacity = '1';

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
	document.querySelectorAll('.custom__color').forEach(сol => {
		if (сol.classList.contains(color)) {
			сol.classList.add('active');
		} else {
			сol.classList.remove('active');
		}
	});
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
		if (index != 0) {
			index = Math.floor(index / 2);
		}
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

function enableAnimationFirstScreen() {
	document.body.classList.add('disabled')
	let flag = true;
	window.addEventListener('wheel', e => {
		if (flag) {
			flag = false;
			window.scrollTo(0, 0);
			activateAnimation()

			setTimeout(() => {
				document.body.classList.remove('disabled')
				document.querySelector('.header').style.opacity = '1';
				document.querySelectorAll('.main__tv.animate img').forEach(img => {
					setTimeout(() => {
						console.log(img);
					}, 2000)

				});
			}, 3000)
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
			}, 3000)
		}
	});
}
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let catridgeScale = 0.6723;
let catridgeTop = "51.42%";
let tvTop = '8.7038%';
let dendyBottom = '-9.2593%';
let dendyLeft = '50%';
let catBottom = '0';
let catLeft = '-8.6459%';
let leftMapTop = '4.2596%';
let leftMapLeft = '7.7085%';
let rightMapRight = '8.4378%';
let cubeBottom = '0';
let cubeRight = '-8.6459%';
let flowerBottom = '10.8334%';
let flowerSide = '-4.1667%';
let booksCassetsBottom = '8.6112%';
let booksCassetsSide = '13.0209%';
let bootsBottom = '26.2963%';
let bootsRight = '-7.1355%';
let joystickBottom = '0';
let joystickLeft = '50%';
let statTop = '1.1112%';
let statLeft = '50%';
let mainInnerWidth = window.innerWidth + 'px';


if (window.innerWidth <= 1650 && window.innerHeight <= 1050) {
	catBottom = '-30px';
	catLeft = '-8.6459%';
	cubeBottom = '-30px';
	cubeRight = '-8.6459%';
	bootsBottom = '26.2963%';
	bootsRight = '-7.1355%';
	mainInnerWidth = '1650px';
}

if (window.innerWidth <= 1600 && window.innerHeight <= 900) {
	tvTop = '14.7038%';
	leftMapTop = '11%';
	leftMapLeft = '10.7085%';
	rightMapRight = '10.7085%';
	booksCassetsBottom = '8.6112%';
	booksCassetsSide = '15%';
}
if (window.innerWidth <= 1536 && window.innerHeight <= 864) {
	leftMapTop = '11%';
	leftMapLeft = '12%';
	rightMapRight = '12%';
	flowerBottom = '10.8334%';
	flowerBottom = '0%';
	statTop = '7.1112%';
}
if (window.innerWidth <= 1440 && window.innerHeight <= 900) {
	catBottom = '-30px';
	catLeft = '-6.6459%';
	cubeBottom = '-30px';
	cubeRight = '-6.6459%';
	bootsBottom = '26.2963%';
	bootsRight = '-5.1355%';
}

if (window.innerWidth <= 1366 && window.innerHeight <= 768) {
	leftMapTop = '11%'
	leftMapLeft = '15%';
	rightMapRight = '15%';
	catLeft = '-1.6459%';
	flowerSide = '86px';
	flowerBottom = '10.8334%';
	cubeBottom = '-30px';
	cubeRight = '-1.6459%';
	booksCassetsBottom = '8.6112%';
	booksCassetsSide = '18%';
	bootsBottom = '26.2963%';
	bootsRight = '-0.1355%';
	catridgeTop = "58.4%";
	catridgeScale = 0.55;
}
if (window.innerWidth <= 1280 && window.innerHeight <= 720) {
	leftMapLeft = '17%';
	rightMapRight = '17%';
	catLeft = '1.3541%';
	flowerSide = '115px';
	flowerBottom = '10.8334%';
	cubeBottom = '-30px';
	cubeRight = '1.3541%';
	booksCassetsBottom = '8.6112%';
	booksCassetsSide = '21%';
	bootsBottom = '26.2963%';
	bootsRight = '2.8645%';
	catridgeTop = "58.4%";

	catridgeScale = 0.55;
}

if (window.innerWidth <= 1024 && window.innerHeight <= 768) {
	leftMapLeft = '18%';
	rightMapRight = '18%';
}

if (window.innerWidth <= 768 && window.innerHeight <= 1024) {
	tvTop = '26%';
	leftMapLeft = '21%';
	rightMapRight = '21%';
	catLeft = '-10.6459%';
	flowerBottom = '23.8334%';
	flowerSide = '240px';
	booksCassetsBottom = '8.6112%';
	booksCassetsSide = '14%';
	statTop = '18.8%';
	catridgeTop = "60%";
}

if (window.innerWidth <= 500 && window.innerHeight <= 1024) {
	tvTop = '34%';
	dendyBottom = '-3.2593%';
	leftMapTop = '11%';
	leftMapLeft = '36%';
	rightMapRight = '36%';
	flowerBottom = '35.8334%';
	flowerSide = '487px';
	booksCassetsBottom = '26.6112%';
	booksCassetsSide = '29%';
	statTop = '26.5%';
	catridgeScale = 0.55;
}

if (window.innerWidth <= 425 && window.innerHeight <= 1024) {
	// dendyLeft = '51.5%';
}

if (window.innerWidth <= 414 && window.innerHeight <= 896) {
	tvTop = '32%';
	statTop = '26%';
	booksCassetsSide =  '31%';
}

if (window.innerWidth <= 414 && window.innerHeight <= 736) {
	tvTop = '26%';
	booksCassetsSide = '32%';
	booksCassetsBottom = '27.6112%';
	// dendyLeft = '54%';
}

if (window.innerWidth <= 412 && window.innerHeight <= 869) {
	// dendyLeft = '52.2%';
}

if (window.innerWidth <= 390 && window.innerHeight <= 844) {
	// dendyLeft = '52.5%';
	tvTop = '29%';
	statTop = '23%';
	booksCassetsSide =  '33%';
	booksCassetsBottom = '28.6112%';
}

if (window.innerWidth <= 384 && window.innerHeight <= 854) {
	tvTop = '29%';
	statTop = '23%'
	booksCassetsSide =  '33%';
	booksCassetsBottom = '28.6112%';
}

if (window.innerWidth <= 360 && window.innerHeight <= 800) {
	// dendyLeft = '53.2%';
	catridgeTop = "60.5%";
	catridgeScale = 0.5;
	// dendyLeft = '53%';
	tvTop = '25%';
	statTop = '19%';
}


if (window.innerWidth <= 360 && window.innerHeight <= 760) {
	// dendyLeft = '53.7%';
	statTop = '19%';
}
if (window.innerWidth <= 375 && window.innerHeight <= 680) {
	tvTop = '20%';
	// dendyLeft = '54.5%';
	booksCassetsSide = '33%';
	catridgeTop = "52.8%";
}

if (window.innerWidth <= 415 && window.innerHeight <= 750) {
	flowerBottom = '28.8334%';
	booksCassetsBottom = '25.6112%';

}


let catridge = TweenMax.to(".main__catridge", 1, { scale: catridgeScale, top: catridgeTop, ease: Linear.easeNone, background: "url(img/epmty-cas.svg) bottom / contain no-repeat" });
let project = TweenMax.to(".main__project", 1, { opacity: 0, top: "100%", ease: Linear.easeNone });
let tv = TweenMax.to('.main__tv', 1, { top: tvTop, ease: Linear.easeNone });
let dendy = TweenMax.to('.main__dendy', 1, { bottom: dendyBottom, left: dendyLeft, ease: Linear.easeNone });
let yazik = TweenMax.to('.main__yazik', 1, { bottom: dendyBottom, ease: Linear.easeNone });
let header = TweenMax.to('.header', 1, { opacity: 1, ease: Linear.easeNone });
let scrollDown = TweenMax.to('.main__button', 1, { opacity: 0, ease: Linear.easeNone });
let leftMap = TweenMax.to('.main__left-map', 1, { top: leftMapTop, left: leftMapLeft, ease: Linear.easeNone });
let rightMap = TweenMax.to('.main__right-map', 1, { top: leftMapTop, right: rightMapRight, ease: Linear.easeNone });
let cat = TweenMax.to('.main__cat', 1, { bottom: catBottom, left: catLeft, ease: Linear.easeNone });
let cube = TweenMax.to('.main__cube', 1, { bottom: cubeBottom, right: cubeRight, ease: Linear.easeNone });
let leftFlower = TweenMax.to('.main__left-flower', 1, { bottom: flowerBottom, left: flowerSide, ease: Linear.easeNone });
let rightFlower = TweenMax.to('.main__right-flower', 1, { bottom: flowerBottom, right: flowerSide, ease: Linear.easeNone });
let books = TweenMax.to('.main__books', 1, { bottom: booksCassetsBottom, right: booksCassetsSide, ease: Linear.easeNone });
let cassets = TweenMax.to('.main__cassets', 1, { bottom: booksCassetsBottom, left: booksCassetsSide, ease: Linear.easeNone });
let boots = TweenMax.to('.main__boots', 1, { bottom: bootsBottom, right: bootsRight, ease: Linear.easeNone });
let joystick = TweenMax.to('.main__joystick', 1, { bottom: joystickBottom, left: joystickLeft, ease: Linear.easeNone });
let stat = TweenMax.to('.main__stat', 1, { top: statTop, left: statLeft, ease: Linear.easeNone });
let mainInner = TweenMax.to('.main__inner', 0.5, { background: 'transparent', width: mainInnerWidth, ease: Linear.easeNone });

timeline
	.add(project, 'first')
	.add(catridge, 'first')
	.add(tv, 'first')
	.add(dendy, 'first')
	.add(yazik, 'first')
	.add(scrollDown, 'first')
	.add(leftMap, 'first')
	.add(rightMap, 'first')
	.add(cat, 'first')
	.add(cube, 'first')
	.add(books, 'first')
	.add(cassets, 'first')
	.add(leftFlower, 'first')
	.add(rightFlower, 'first')
	.add(boots, 'first')
	.add(joystick, 'first')
	.add(stat, 'first')
	.add(mainInner, 'first')
	.add(header);

let scene = new ScrollMagic.Scene({ triggerElement: ".main", duration: "100%", offset: 0 })
	.setTween(timeline)
	.triggerElement(0)
	.setPin(".main")
	.addTo(controller);

document.querySelectorAll('.road__item').forEach(caret => {
	caret.addEventListener('click', () => {
		caret.classList.toggle('active')
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
		ball.classList.add('disabled')
		document.querySelector('.secret-ball__text').parentElement.classList.remove('active');
	}

});

ballPosition();

let secretBall = document.querySelector('.secret-ball');
secretBall.addEventListener('click', () => secretBall.classList.toggle('active'))


