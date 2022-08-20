
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
		// if (index != 0) {
		// 	index = Math.floor(index / 2);
		// }
		document.querySelectorAll('.custom__content-part').forEach(part => {
			if (Array.from(part.parentElement.children).indexOf(part) === index) {
				part.classList.add('visible');
				getSiblings(part).forEach(part => part.classList.remove('visible'));
			}
		});
		getSiblings(variant).forEach(variant => variant.classList.remove('active'));
	});
});