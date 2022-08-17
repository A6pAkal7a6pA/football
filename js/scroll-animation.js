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

if (window.innerWidth <= 414 && window.innerHeight <= 896) {
	tvTop = '32%';
	statTop = '26%';
	booksCassetsSide =  '31%';
}

if (window.innerWidth <= 414 && window.innerHeight <= 736) {
	tvTop = '26%';
	booksCassetsSide = '32%';
	booksCassetsBottom = '27.6112%';
}

if (window.innerWidth <= 390 && window.innerHeight <= 844) {
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
	catridgeTop = "60.5%";
	catridgeScale = 0.5;
	tvTop = '25%';
	statTop = '19%';
}


if (window.innerWidth <= 360 && window.innerHeight <= 760) {
	statTop = '19%';
}
if (window.innerWidth <= 375 && window.innerHeight <= 680) {
	tvTop = '20%';
	booksCassetsSide = '33%';
	catridgeTop = "52.8%";
}

if (window.innerWidth <= 415 && window.innerHeight <= 750) {
	flowerBottom = '28.8334%';
	booksCassetsBottom = '25.6112%';

}

let nft = TweenMax.to(".main__nft", 1, { opacity: 1, ease: Linear.easeNone })
let catridge = TweenMax.to(".main__catridge", 1, { scale: catridgeScale, top: catridgeTop, ease: Linear.easeNone, background: "url(img/epmty-cas.svg) bottom / contain no-repeat" });
let project = TweenMax.to(".main__project", 1, { opacity: 0, top: "100%", ease: Linear.easeNone });
let mainRoad = TweenMax.to(".main-road", 1, { opacity: 0, top: "150%", ease: Linear.easeNone });
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
	.add(mainRoad, 'first')
	.add(nft, 'first')
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