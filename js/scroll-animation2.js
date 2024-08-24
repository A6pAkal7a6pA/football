let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

let sizes = [
    {
        width: 1650,
        height: 1050,
        catBottom: "-30px",
        cubeBottom: "-30px",
        bootsRight: "-7.1355%",
        mainInnerWidth: "1650px"
    },
    {
        width: 1600,
        height: 900,
        tvTop: "14.7038%",
        leftMapTop: "11%",
        leftMapLeft: "10.7085%",
        rightMapRight: "10.7085%"
    },
    {width: 1536, height: 864, leftMapTop: "11%", leftMapLeft: "12%", rightMapRight: "12%", statTop: "7.1112%"},
    {width: 1440, height: 900, catBottom: "-30px", catLeft: "-6.6459%", cubeBottom: "-30px", cubeRight: "-6.6459%"},
    {
        width: 1366,
        height: 768,
        leftMapTop: "11%",
        leftMapLeft: "15%",
        rightMapRight: "15%",
        catridgeTop: "58.4%",
        catridgeScale: 0.55
    },
    {
        width: 1280,
        height: 720,
        leftMapLeft: "17%",
        rightMapRight: "17%",
        flowerSide: "115px",
        catridgeTop: "58.4%",
        catridgeScale: 0.55
    },
    {width: 1024, height: 768, leftMapLeft: "18%", rightMapRight: "18%"},
    {
        width: 768,
        height: 1024,
        tvTop: "26%",
        leftMapLeft: "21%",
        rightMapRight: "21%",
        catLeft: "-10.6459%",
        flowerBottom: "23.8334%"
    },
    {
        width: 500,
        height: 1024,
        tvTop: "34%",
        dendyBottom: "-3.2593%",
        leftMapLeft: "36%",
        rightMapRight: "36%",
        flowerBottom: "35.8334%"
    },
    {width: 414, height: 896, tvTop: "32%", statTop: "26%", booksCassetsSide: "31%", flowerSide: "465px"},
    {width: 384, height: 854, tvTop: "29%", statTop: "23%", booksCassetsSide: "33%"},
    {width: 360, height: 800, catridgeTop: "60.5%", catridgeScale: 0.5, tvTop: "25%", statTop: "19%"},
    {width: 375, height: 680, tvTop: "20%", booksCassetsSide: "33%", catridgeTop: "52.8%"},
    {width: 415, height: 750, flowerBottom: "28.8334%", booksCassetsBottom: "25.6112%"}
];

let defaultSettings = {
    catridgeScale: 0.6723,
    catridgeTop: "51.42%",
    tvTop: "8.7038%",
    dendyBottom: "-9.2593%",
    dendyLeft: "50%",
    catBottom: "0",
    catLeft: "-8.6459%",
    leftMapTop: "4.2596%",
    leftMapLeft: "7.7085%",
    rightMapRight: "8.4378%",
    cubeBottom: "0",
    cubeRight: "-8.6459%",
    flowerBottom: "10.8334%",
    flowerSide: "-4.1667%",
    booksCassetsBottom: "8.6112%",
    booksCassetsSide: "13.0209%",
    bootsBottom: "26.2963%",
    bootsRight: "-7.1355%",
    joystickBottom: "0",
    joystickLeft: "50%",
    statTop: "1.1112%",
    statLeft: "50%",
    mainInnerWidth: window.innerWidth + "px"
};

sizes.forEach((size) => {
    if (window.innerWidth <= size.width && window.innerHeight <= size.height) {
        defaultSettings = {...defaultSettings, ...size};
    }
});

const {
    catridgeScale, catridgeTop, tvTop, dendyBottom, dendyLeft, catBottom, catLeft,
    leftMapTop, leftMapLeft, rightMapRight, cubeBottom, cubeRight, flowerBottom, flowerSide,
    booksCassetsBottom, booksCassetsSide, bootsBottom, bootsRight, joystickBottom,
    joystickLeft, statTop, statLeft, mainInnerWidth
} = defaultSettings;

// Создание анимаций
let animations = [
    {selector: ".main__nft", props: {opacity: 1}},
    {
        selector: ".main__catridge",
        props: {scale: catridgeScale, top: catridgeTop, background: "url(img/epmty-cas.svg) bottom / contain no-repeat"}
    },
    {selector: ".main__project", props: {opacity: 0, top: "100%"}},
    {selector: ".main-road", props: {opacity: 0, top: "150%"}},
    {selector: ".main__tv", props: {top: tvTop}},
    {selector: ".main__dendy", props: {bottom: dendyBottom, left: dendyLeft}},
    {selector: ".main__yazik", props: {bottom: dendyBottom}},
    {selector: ".header", props: {opacity: 1}, duration: 0.01},
    {selector: ".main__button", props: {opacity: 0}},
    {selector: ".main__left-map", props: {top: leftMapTop, left: leftMapLeft}},
    {selector: ".main__right-map", props: {top: leftMapTop, right: rightMapRight}},
    {selector: ".main__cat", props: {bottom: catBottom, left: catLeft}},
    {selector: ".main__cube", props: {bottom: cubeBottom, right: cubeRight}},
    {selector: ".main__left-flower", props: {bottom: flowerBottom, left: flowerSide}},
    {selector: ".main__right-flower", props: {bottom: flowerBottom, right: flowerSide}},
    {selector: ".main__books", props: {bottom: booksCassetsBottom, right: booksCassetsSide}},
    {selector: ".main__cassets", props: {bottom: booksCassetsBottom, left: booksCassetsSide}},
    {selector: ".main__boots", props: {bottom: bootsBottom, right: bootsRight}},
    {selector: ".main__joystick", props: {bottom: joystickBottom, left: joystickLeft}},
    {selector: ".main__stat", props: {top: statTop, left: statLeft}},
    {selector: ".main__inner", props: {background: "transparent", width: mainInnerWidth}, duration: 0.5}
];

animations.forEach(({selector, props, duration = 1}) => {
    timeline.add(TweenMax.to(selector, duration, {...props, ease: Linear.easeNone}), "first");
});

let scene = new ScrollMagic.Scene({
    triggerElement: ".main",
    duration: window.screen.height,
    offset: 0,
    triggerHook: 0
})
    .setTween(timeline)
    .triggerElement(0)
    .setPin(".main")
    .addTo(controller);

let isAuto = true;
const mainVideo = document.getElementById("main-video");
const mainVideoWrapper = document.querySelector(".main__tv-video");
mainVideoWrapper.style.width = mainVideo.offsetWidth + 'px'
const mainPresale = document.querySelector('.main-presale')
const collectionsRoad = document.querySelector('.collections-road')

controller.scrollTo(function (newScrollPos) {
    const start = window.scrollY || window.pageYOffset;
    const distance = newScrollPos - start;
    const duration = 2000; // Длительность анимации в миллисекундах
    const startTime = performance.now();

    function animateScroll(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Нормализуем прогресс от 0 до 1

        // Используем функцию для плавной анимации (например, easeInOutQuad)
        const easeProgress = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, start + distance * easeProgress);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
});

scene.on("progress", (e) => {
    if (isAuto && e.progress > 0) {
        isAuto = false;
        controller.scrollTo(scene.scrollOffset() + scene.duration());
    }
    if (e.progress === 0) isAuto = true;
});

let isHidden = true;
window.addEventListener('scroll', (e) => {
    if (isHidden && (collectionsRoad.offsetTop) > window.scrollY) {
        mainPresale.classList.remove('active')
        isHidden = false
    } else if (!isHidden && (collectionsRoad.offsetTop) < window.scrollY) {
        mainPresale.classList.add('active')
        isHidden = true;
    }
})

scene.on("enter", (e) => {
    if (e.scrollDirection === "REVERSE" && !isAuto) {
        mainPresale.classList.remove('active')
        controller.scrollTo(scene.scrollOffset());
    }
})

document.querySelectorAll(".main__volume img").forEach((volume) => {
    volume.addEventListener("click", () => {
        volume.classList.remove("active");
        getSiblings(volume).forEach((v) => v.classList.add("active"));
        let volumeClass = volume.classList[0];

        if (volumeClass.substring(volumeClass.lastIndexOf("_") + 1) === "off") {
            mainVideo.muted = true;
        } else {
            mainVideo.muted = false;
        }
    });
});