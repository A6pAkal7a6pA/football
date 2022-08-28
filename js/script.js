let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', () => {
	document.querySelector('.header').style.opacity = '1';
	document.querySelector('.header').classList.toggle('active');
	document.body.classList.toggle('disabled');
});

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

document.querySelectorAll('.road__item').forEach(caret => {
	caret.addEventListener('click', () => {
		caret.classList.toggle('active')
	});
})

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
ballPosition();

window.addEventListener('scroll', () => {
	if (posContainer.getBoundingClientRect().y <= 0 && posContainer.getBoundingClientRect().y >= -(posContainer.getBoundingClientRect().height)) {
		ball.classList.add('anime')
		ball.classList.remove('disabled')
	} else if (posContainer.getBoundingClientRect().y <= -posContainer.getBoundingClientRect().height || posContainer.getBoundingClientRect().y > 0) {
		ball.classList.add('disabled')
		document.querySelector('.secret-ball__text').parentElement.classList.remove('active');
	}
});

let secretBall = document.querySelector('.secret-ball');
secretBall.addEventListener('click', () => secretBall.classList.toggle('active'));


if (window.innerWidth > 769) {
	document.querySelectorAll('.collections-road__info-image')
		.forEach(item => item.addEventListener('mouseover', () => {
			item.parentElement.children[0].classList.add('active');
		}));
	document.querySelectorAll('.collections-road__info-image')
		.forEach(item => item.addEventListener('mouseout', () => {
			item.parentElement.children[0].classList.remove('active');
		}));
}

let currentItem = null;
if (window.innerWidth <= 769) {
	document.querySelectorAll('.collections-road__info-image')
		.forEach(item => item.addEventListener('click', () => {
			let popup = item.parentElement.children[0];
			if (popup.classList.contains('active')) {
				popup.classList.remove('active');
			} else {
				Array.from(document.querySelectorAll('.collections-road__info-popup'))
					.forEach(e => e.classList.remove('active'));
				popup.classList.add('active');
			}
			currentItem = item.parentElement;
		}
		));
	window.addEventListener('click', e => {
		if (currentItem !== null && !currentItem.contains(e.target.parentElement)) {
			Array.from(document.querySelectorAll('.collections-road__info-popup'))
				.forEach(e => e.classList.remove('active'));
		}
	});
}

document.querySelectorAll('.main-road__info-image')
	.forEach(item => item.addEventListener('mouseover', () => {
		console.log(item);
		item.parentElement.children[0].classList.add('active');
	}));
document.querySelectorAll('.main-road__info-image')
	.forEach(item => item.addEventListener('mouseout', () => {
		item.parentElement.children[0].classList.remove('active');
	}));

document.querySelector('.main-presale__exit')
	.addEventListener('click', () => document.querySelector('.main-presale').remove())
