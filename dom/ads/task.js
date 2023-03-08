const rotator = Array.from(document.querySelectorAll('.rotator__case'));
const clue = document.querySelector('.clue');

let index = 0;
let speed = 0;

document.addEventListener('click', toStop);
const intervalId = setInterval(toRevealRotations, speed);
const intervalId2 = setInterval(toGrowTheClue, 1500);

function toRevealRotations() {
    rotator.forEach(elem => elem.classList.remove('rotator__case_active'));
    if(index === rotator.length) index = 0;
    rotator[index].classList.add('rotator__case_active');
    rotator[index].style.color = rotator[index].dataset.color;
    speed = +rotator[index].dataset.speed;
    index++;
}

function toGrowTheClue() {
    clue.style.fontSize === '40px' ? clue.style.fontSize = '20px' : clue.style.fontSize = '40px';
}

function toStop() {
    clearInterval(intervalId);
    clearInterval(intervalId2);
}
