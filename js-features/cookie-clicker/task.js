const counterEl = document.getElementById('clicker__counter');
const clickerSpeedEl = document.getElementById('clicker__speed');
const imageEl = document.getElementById('cookie');
const clickerBlockEl = document.getElementById('clicker__status');

let count = 0;
let avgClick = 0;
let countPerSecond = 0;

function getClicked() {
    count++;
    countPerSecond++;
    counterEl.textContent = count;
    imageEl.width === 200 ? toBiggerSize() : toNormalSize();
    clickerSpeedEl.textContent = avgClick;
}

setInterval(incrementInterval, 1000);
//Функции для работы с картинкой
function toBiggerSize() {
    imageEl.width = 220; 
    imageEl.height = 140;
}
function toNormalSize() {
    imageEl.width = 200;
    imageEl.height = 128;
}

//Функция-колбек для подсчета кликов каждую секунду
function incrementInterval() {
    avgClick = countPerSecond;
    countPerSecond = 0;
}
