// Дата + 1 день
function getData() {
    // Нода даты
    let dataNode = document.querySelectorAll('.data');

    // Объект дата
    let today = new Date;
    let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    let dayTomorrow = tomorrow.getDate();
    let monthTomorrow = tomorrow.getMonth() + 1; //в js месяц отсчитывается с нуля
    let yearTomorrow = tomorrow.getFullYear();

    for (let i = 0; i < dataNode.length; i++) {
        // Проверка
        if (monthTomorrow < 10) {
            // Вывод на страницу
            let nextDay = `${dayTomorrow}/0${monthTomorrow}/${yearTomorrow}`;
            dataNode[i].textContent = nextDay;
        } else {
            // Вывод на страницу
            let nextDay = `${dayTomorrow}.${monthTomorrow}.${yearTomorrow}`;
            dataNode[i].textContent = nextDay;
        }
    }
}

getData();


// Скрывает список комментариев с 5 по 12
let commentsNode = document.querySelectorAll('.content__comments-item');

function pageOnLoad() {
    for (let i = 0; i < commentsNode.length; i++) {
        console.log(commentsNode[i]);

        if (commentsNode[i]) {
            if (i >= 4) {
                commentsNode[i].classList.add('visually-hidden');
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", pageOnLoad);


// Показывает список комментариев с 5 по 12
let commentButton = document.querySelector('.content__comments-button');

commentButton.addEventListener('click', () => {
    for (let i = 0; i < commentsNode.length; i++) {
        console.log(commentsNode[i]);

        if (commentsNode[i]) {
            if (i >= 4) {
                commentsNode[i].classList.remove('visually-hidden');
            }
        }
    }

    commentButton.classList.add('visually-hidden');
});

