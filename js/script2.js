const header = document.querySelector(".header");
const headerBurger = document.querySelector(".header__burger");
const body = document.body;
const posContainer = document.querySelector(".possibilities__inner");
const ball = document.querySelector(".secret-ball");

// Оптимизация работы с DOM и добавление обработчиков событий
headerBurger.addEventListener("click", () => {
    header.style.opacity = "1";
    header.classList.toggle("active");
    body.classList.toggle("disabled");
});

// Обработка кликов на элементах .possibilities__item
document.querySelectorAll(".possibilities__item").forEach((item, index) => {
    const human = document.querySelectorAll(".possibilities__human")[index];
    item.addEventListener("click", () => {
        item.classList.add("active");
        human.classList.add("active");
        getSiblings(human).forEach((hu) => hu.classList.remove("active"));
        getSiblings(item).forEach((i) => i.classList.remove("active"));
    });
});

// Функция для настройки конфигурации
function setUpConfiguration() {
    const firstChildRoadItem = document.querySelector(".road-top .road__item:first-child");
    const marginMidLine = firstChildRoadItem.getBoundingClientRect().width / 2;
    const midLine = document.querySelector(".road-mid");
    const checkInner = document.querySelector(".check__inner");

    midLine.style.marginLeft = `${marginMidLine}px`;
    document.querySelector(".road-bot").style.marginLeft = `${marginMidLine + 10}px`;
    document.querySelector(".road__content").style.marginLeft = `${checkInner.getBoundingClientRect().left}px`;

    midLine.style.width = `${document.documentElement.clientWidth - checkInner.getBoundingClientRect().left - marginMidLine}px`;
}
setUpConfiguration();

// Функция для получения соседних элементов
function getSiblings(elem) {
    return Array.from(elem.parentElement.children).filter((sibling) => sibling !== elem);
}

// Обработка кликов на .road__item
document.querySelectorAll(".road__item").forEach((caret) => {
    caret.addEventListener("click", () => caret.classList.toggle("active"));
});

// Плавный скроллинг
document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        body.classList.remove("disabled");
        header.classList.remove("active");
        document.getElementById(anchor.getAttribute("href").substring(1)).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});

// Функция для расчета прогресса токенов
function tokensProgress() {
    let max = Math.max(...Array.from(document.querySelectorAll(".deligate__num"), item => +item.innerText.replace(/%/g, "")));
    max = 100 / max;
    document.querySelectorAll(".deligate__item").forEach((item) => {
        item.children[2].children[0].style.width = `${item.children[0].innerText.replace(/%/g, "") * max}%`;
    });
}
tokensProgress();

// Функция для позиции мяча
function ballPosition() {
    const posLeft = posContainer.getBoundingClientRect().left - 35;
    const posWidth = posContainer.getBoundingClientRect().width / 3;

    document.documentElement.style.setProperty("--ball-desktop", `${posLeft}px`);
    document.documentElement.style.setProperty("--ball-mob", `${posWidth}px`);
}
ballPosition();

// Анимация при скроллинге
window.addEventListener("scroll", () => {
    const posRect = posContainer.getBoundingClientRect();
    const inView = posRect.y <= 0 && posRect.y >= -posRect.height;

    ball.classList.toggle("anime", inView);
    ball.classList.toggle("disabled", !inView);

    if (!inView) {
        document.querySelector(".secret-ball__text").parentElement.classList.remove("active");
    }
});

// Обработчик кликов на секретный мяч
secretBall.addEventListener("click", () => secretBall.classList.toggle("active"));

// Обработчики событий для .collections-road__info-image на десктопе
if (window.innerWidth > 769) {
    document.querySelectorAll(".collections-road__info-image").forEach((item) => {
        const popup = item.parentElement.children[0];
        item.addEventListener("mouseover", () => popup.classList.add("active"));
        item.addEventListener("mouseout", () => popup.classList.remove("active"));
    });
} else {
    let currentItem = null;

    document.querySelectorAll(".collections-road__info-image").forEach((item) => {
        item.addEventListener("click", () => {
            const popup = item.parentElement.children[0];
            if (popup.classList.contains("active")) {
                popup.classList.remove("active");
            } else {
                document.querySelectorAll(".collections-road__info-popup.active").forEach((e) => e.classList.remove("active"));
                popup.classList.add("active");
            }
            currentItem = item.parentElement;
        });
    });

    window.addEventListener("click", (e) => {
        if (currentItem !== null && !currentItem.contains(e.target.closest(".collections-road__info-popup"))) {
            document.querySelectorAll(".collections-road__info-popup.active").forEach((e) => e.classList.remove("active"));
        }
    });
}

// Обработчики для .main-road__info-image
document.querySelectorAll(".main-road__info-image").forEach((item) => {
    const firstChild = item.parentElement.children[0];
    item.addEventListener("mouseover", () => firstChild.classList.add("active"));
    item.addEventListener("mouseout", () => firstChild.classList.remove("active"));
});

// Закрытие блока .main-presale
document.querySelector(".main-presale__exit").addEventListener("click", () => {
    document.querySelector(".main-presale").remove();
});