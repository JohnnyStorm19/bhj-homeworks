const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const items = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));

//получаю текущий индекс активного слайда.  
//создаю новую переменную, в которую сохраняю текущий индекс. Переменную буду передавать в функции и ее же переприсваивать.
let index = items.findIndex(item => item.classList.contains('slider__item_active'));
let i = index;
//первый запуск: запускаю функцию, чтобы точки изначально отображались и были связаны с активным слайдом
initialLaunch(i);
//событие по клику вправо
arrowNext.onclick = function () {
    i = items.findIndex(item => item.classList.contains('slider__item_active'));
    removeIndex(i);
    i < items.length - 1 ? i++ : i = 0; //изменяю индекс, обрабатываю пограничные значения
    addingActive(i);
}
//событие по клику влево
arrowPrev.onclick = function () {
    i = items.findIndex(item => item.classList.contains('slider__item_active'));
    removeIndex(i);
    i >= 1 ? i-- : i = items.length - 1;//изменяю индекс, обрабатываю пограничные значения
    addingActive(i);
};
//событие по клику на точки
sliderDots.forEach((elem, count) => {
    elem.onclick = function () {
        i = items.findIndex(item => item.classList.contains('slider__item_active'));
        removeIndex(i);
        addingActive(count);
    }
})

//функция первого запуска для точек
function initialLaunch(index) {
    sliderDots[index].classList.add('slider__dot_active');
}
//функция добавления активных классов слайда и точки
function addingActive(index) {
    items[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
}
//функция удаления активных классов слайда и точки
function removeIndex(index) {
    items[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active');
}




















// arrowNext.onclick = toSwitchNext;
// arrowPrev.onclick = toSwitchPrev;

// sliderDots.forEach(e => isDotted(e))

// //сделаем точку видимой сразу, а не по клику
// let index = items.findIndex(item => item.classList.contains('slider__item_active'));
// items[index].classList.add('slider__item_active');
// sliderDots[index].classList.add('slider__dot_active');

// //отдельная функция на свич вперед
// function toSwitchNext() {
//     index = items.findIndex(item => item.classList.contains('slider__item_active'));
//     items[index].classList.remove('slider__item_active');
//     sliderDots[index].classList.remove('slider__dot_active')
//     index < items.length - 1 ? index++ : index = 0;
//     items[index].classList.add('slider__item_active');
//     sliderDots[index].classList.add('slider__dot_active');
// }

// //отдельная функция на свич назад
// function toSwitchPrev() {
//     index = items.findIndex(item => item.classList.contains('slider__item_active'));
//     items[index].classList.remove('slider__item_active');
//     sliderDots[index].classList.remove('slider__dot_active')
//     index >= 1 ? index-- : index = items.length - 1;
//     items[index].classList.add('slider__item_active');
//     sliderDots[index].classList.add('slider__dot_active');
// }

// //клик на точки
// function isDotted() {
//     sliderDots.forEach((e, i) => e.onclick = function () {
//         closeDots();
//         e.classList.add('slider__dot_active');
//         let index = items.findIndex(item => item.classList.contains('slider__item_active'));
//         items[index].classList.remove('slider__item_active');
//         items[i].classList.add('slider__item_active');
//     });
// }

//функция удаления активных стилей на точках
// function closeDots() {
//     sliderDots.forEach(elem => elem.classList.remove('slider__dot_active'))
// }
