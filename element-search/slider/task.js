const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const items = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

arrowNext.onclick = toSwitchNext;
arrowPrev.onclick = toSwitchPrev;

sliderDots.forEach(e => isDotted(e))

//сделаем точку видимой сразу, а не по клику
let index = items.findIndex(item => item.classList.contains('slider__item_active'));
items[index].classList.add('slider__item_active');
sliderDots[index].classList.add('slider__dot_active');

//отдельная функция на свич вперед
function toSwitchNext() {
    index = items.findIndex(item => item.classList.contains('slider__item_active'));
    items[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active')
    index < items.length - 1 ? index++ : index = 0;
    items[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
}

//отдельная функция на свич назад
function toSwitchPrev() {
    index = items.findIndex(item => item.classList.contains('slider__item_active'));
    items[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active')
    index >= 1 ? index-- : index = items.length - 1;
    items[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
}

//клик на точки
function isDotted() {
    sliderDots.forEach((e, i) => e.onclick = function () {
        closeDots();
        e.classList.add('slider__dot_active');
        let index = items.findIndex(item => item.classList.contains('slider__item_active'));
        items[index].classList.remove('slider__item_active');
        items[i].classList.add('slider__item_active');
    });
}

//убираю активные стили на точках
function closeDots() {
    sliderDots.forEach(elem => elem.classList.remove('slider__dot_active'))
}
