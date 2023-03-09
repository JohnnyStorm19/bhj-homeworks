const rotator = Array.from(document.querySelectorAll('.rotator__case'));
const clue = document.querySelector('.clue');

let index = 0;

document.addEventListener('click', toStop);
const timeoutId = setTimeout(toRevealRotations, 0);
let timeoutId2 = null;
const intervalId = setInterval(toGrowTheClue, 1500);

function toRevealRotations() {
    let timer = 0;
    rotator.forEach(elem => elem.classList.remove('rotator__case_active'));
    if(index === rotator.length) index = 0;
    rotator[index].classList.add('rotator__case_active');
    rotator[index].style.color = rotator[index].dataset.color;
    timer = +rotator[index].dataset.speed
    index++;
    timeoutId2 = setTimeout(toRevealRotations, timer);
}

function toGrowTheClue() {
    clue.style.fontSize === '40px' ? clue.style.fontSize = '20px' : clue.style.fontSize = '40px';
}

function toStop() {
    clearTimeout(timeoutId);
    clearTimeout(timeoutId2);
    clearInterval(intervalId);
}