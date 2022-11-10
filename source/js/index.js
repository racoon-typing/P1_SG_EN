let buttonNav = document.querySelector('.main-header__button-nav');
let navNode = document.querySelector('.main-header__nav');

if (buttonNav) {
    buttonNav.addEventListener('click', function () {
        navNode.classList.toggle('main-header__nav--close');
        navNode.classList.toggle('main-header__nav--open');

        if (navNode.classList.contains('main-header__nav--open')) {
            buttonNav.classList.remove('main-header__button-nav');
            buttonNav.classList.add('main-header__button-nav--cross');
        } else {
            buttonNav.classList.add('main-header__button-nav');
            buttonNav.classList.remove('main-header__button-nav--cross');
        }
    });
}

// Дата + 1 день
function getData() {
    // Нода даты
    let dataNode = document.querySelector('.data');

    // Объект дата
    let today = new Date;
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    let dayTomorrow = tomorrow.getDate();
    let monthTomorrow = tomorrow.getMonth() + 1; //в js месяц отсчитывается с нуля
    let yearTomorrow = tomorrow.getFullYear();

    // Проверка
    if (monthTomorrow < 10) {
        // Вывод на страницу
        let nextDay = `${dayTomorrow}/0${monthTomorrow}/${yearTomorrow}`;
        dataNode.textContent = nextDay;
    } else {
        // Вывод на страницу
        let nextDay = `${dayTomorrow}/${monthTomorrow}/${yearTomorrow}`;
        dataNode.textContent = nextDay;
    }
}

getData();

// БОЛЬШОЕ ФОТО
let listNode = document.querySelector('.review__list');

let num;
listNode.addEventListener('click', function (e) {
    let num = e.target.id;

    console.log(num);
    return num;
});


// Объект данных
let reviewObject = {
    data: [
        {
            link: 'img/comment/comment-1.jpg',
            text: 'Рыбный текст – это текст, выполняющий исключительно утилитарную функцию. Он не вписывается в контекст сайта, на котором используется, и нужен только для заполнения пространства.'
        },
        {
            link: 'img/comment/comment-2.jpg',
            text: 'Рыбный текст – это текст, выполняющий исключительно утилитарную функцию. Он не вписывается в контекст сайта, на котором используется, и нужен только для заполнения пространства.'
        },
        {
            link: 'img/comment/comment-3.jpg',
            text: 'Рыбный текст – это текст, выполняющий исключительно утилитарную функцию. Он не вписывается в контекст сайта, на котором используется, и нужен только для заполнения пространства.'
        },
        {
            link: 'img/comment/comment-4.png',
            text: 'Рыбный текст – это текст, выполняющий исключительно утилитарную функцию. Он не вписывается в контекст сайта, на котором используется, и нужен только для заполнения пространства.'
        }
    ]
}


// Шаблон
let template = document.querySelector('.review__big');



// Равным образом консультация с широким активом способствует подготовки и реализации систем
// массового
// участия.Равным образом консультация с широким активом способствует подготовки и реализации
// систем
// массового

// Инициализируем слайдер 
// new Swiper('.image-slider', {
//     // Стрелки
//     navigation: {
//         prevEl: '.swiper-button-prev',
//         nextEl: '.swiper-button-next'
//     },
//     // Навигация
//     // Булеты, текущее положение
//     pagination: {
//         el: '.swiper-pagination',
//         // Буллеты
//         clickable: true,
//         // Динамические булеты
//         dynamicBullets: true,
//     },
//     // Отступ между слайдами
//     spaceBetween: 30,
// });
