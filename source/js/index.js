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
        let nextDay = `${dayTomorrow}.${monthTomorrow}.${yearTomorrow}`;
        dataNode.textContent = nextDay;
    }
}

getData();




// Меню Бургер / Крестик
// let buttonNav = document.querySelector('.main-header__button-nav');
// let navNode = document.querySelector('.main-header__nav');
// let buttonNavIcon = document.querySelector('.main-header__button-nav--icon');

// if (buttonNav) {
//     buttonNav.addEventListener('click', function () {
//         navNode.classList.toggle('main-header__nav--close');
//         navNode.classList.toggle('main-header__nav--open');

//         if (navNode.classList.contains('main-header__nav--open')) {
//             buttonNav.classList.remove('main-header__button-nav');
//             buttonNavIcon.style.display = 'none';
//             buttonNav.classList.add('main-header__button-nav--cross');

//         } else {
//             buttonNav.classList.add('main-header__button-nav');
//             buttonNavIcon.style.display = 'block';
//             buttonNav.classList.remove('main-header__button-nav--cross');
//         }
//     });
// }

// let menuList = document.querySelector('.main-header__list');

// menuList.addEventListener('click', (e) => {
//     if (e.target.id === 'link') {
//         // Закрытие меню
//         navNode.classList.remove('main-header__nav--open');
//         navNode.classList.add('main-header__nav--close');

//         // Кнопка крестик
//         buttonNav.classList.remove('main-header__button-nav--cross');
//         buttonNav.classList.add('main-header__button-nav');
//         buttonNavIcon.style.display = 'block';
//     }
// });



// БОЛЬШОЕ ФОТО
// Объект данных
// let reviewObject = {
//     data: [
//         {
//             link: 'img/comment/comment-1.jpg',
//             surname: 'Lee Ko',
//             text: ' I had problems with being overweight, besides that, I am a diabetic. I`m not a big fan of sports, and I never refuse good food. When I started taking Dietica my weight began to decrease. I can say for sure that these capsules work, even my husband noticed the changes. Now I don`t have any problems, I eat whatever I like, and I`m losing weight! Taking these capsules, I lost 11 kg in a month. After 3 months, the weight did not return.'
//         },
//         {
//             link: 'img/comment/comment-2.jpg',
//             surname: 'Yan Gu',
//             text: 'I`ve tried so many things... Diets, workouts… Nothing helped. I needed a product that would be as safe and effective as possible. Dietica is one of the best fat-burning products. I was very surprised when I saw only natural ingredients in the composition. With the help of these capsules, I weaned myself off junk food and lost 16 kg in 2 months. Thanks!'
//         },
//         {
//             link: 'img/comment/comment-3.jpg',
//             surname: 'Weng Lou',
//             text: 'I saw the first results after 7 days. Firstly, I wanted to eat less, which was unusual for me, I usually ate 2 full portions. Then I started doing yoga and my results immediately improved. After 3 months I lost 20 kg. I am satisfied with my shape now. Capsules work well. I advise everyone.'
//         },
//         {
//             link: 'img/comment/comment-4.png',
//             surname: 'Lin Kwek',
//             text: ' I am 37 years old, I have been drinking the course of Dietica for 1 month. I lost 9 kg! Friends say that I`ve changed so much. I had heart problems due to being overweight, I couldn`t exercise (only exercise in the morning), and couldn`t be on a diet. Now the feelings are completely different, I have regained my health and beauty. I have a pleasant reason to buy new, beautiful clothes. Thank you for a quality product and a very favorable price.'
//         }
//     ]
// }

// // Список
// let mainContainer = document.querySelector('.main-container');
// let listNode = document.querySelector('.review__list');
// let reviewNode = document.querySelector('.review');

// // Функция заполнения шаблона
// function createTemplate(object, num) {
//     // Шаблон
//     let template = document.querySelector('#review__big');
//     let reviewBig = template.content.cloneNode(true);
//     let reviewImg = reviewBig.querySelector('.review__big-img');
//     let reviewSurname = reviewBig.querySelector('.review__big-surname');
//     let reviewText = reviewBig.querySelector('.review__big-text');

//     // Подставлет значения
//     reviewImg.src = object.data[num].link;
//     reviewSurname.textContent = object.data[num].surname;
//     reviewText.textContent = object.data[num].text;

//     reviewNode.append(reviewBig);
//     let commentNode = document.querySelector('.review__big-wrapper');
//     commentNode.classList.remove('review__big-wrapper--close');
//     mainContainer.style.overflow = 'hidden';
// }

// function closeModalWindow() {
//     let commentNode = document.querySelector('.review__big-wrapper');
//     let commentButtonClose = document.querySelector('.review__big-button');

//     commentButtonClose.addEventListener('click', (e) => {
//         commentNode.remove();
//         mainContainer.style.overflow = 'auto';
//     });

//     document.addEventListener('keydown', function (e) {
//         if (e.key == 'Escape') { // код клавиши Escape, но можно использовать e.key
//             commentNode.remove();
//             mainContainer.style.overflow = 'auto';
//         }
//     });

//     reviewNode.addEventListener('click', function (e) {
//         let bigWrapperContent = document.querySelector('.review__big-wrapper-content');
//         const clickIntside = e.composedPath().includes(commentNode);
//         const clickOutside = e.composedPath().includes(bigWrapperContent);

//         if (clickIntside && !clickOutside) {
//             commentNode.remove();
//             mainContainer.style.overflow = 'auto';
//         }
//     });
// }


// // Создает большое фото
// listNode.addEventListener('click', function (e) {
//     let num = e.target.id;
//     createTemplate(reviewObject, num);
//     closeModalWindow();
// });



// Открывает программу
// let buttunOpenModalProgram = document.querySelector('.program__button-js');
// let ModalWindowProgram = document.querySelector('.program__modal-window');

// // Функция открытия модального окна
// function openModalWindowProgram() {
//     ModalWindowProgram.style.display = 'block';
//     mainContainer.style.overflow = 'hidden';
// }

// buttunOpenModalProgram.addEventListener('click', openModalWindowProgram);


// let buttonCloseModalProgram = document.querySelector('.program__modal-window-wrapper__big-button');
// // Функция закрытия модального окна
// function closeModalWindowProgram() {
//     ModalWindowProgram.style.display = 'none';
//     mainContainer.style.overflow = 'auto';
// }

// buttonCloseModalProgram.addEventListener('click', closeModalWindowProgram);



