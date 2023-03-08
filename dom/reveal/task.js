const revealEl = document.querySelector('.reveal');

document.addEventListener('scroll', isVisible); //так работает

function isVisible() {
    const { top, bottom } = revealEl.getBoundingClientRect();
    bottom < 0 || top > window.innerHeight ? revealEl.classList.remove('reveal_active') : revealEl.classList.add('reveal_active');
    console.log(top, bottom)
}

/* А так не работает
document.addEventListener('scroll', isVisible(revealEl));

function isVisible(elem) {
    const { top, bottom } = elem.getBoundingClientRect();
    bottom < 0 || top > window.innerHeight ? elem.classList.remove('reveal_active') : elem.classList.add('reveal_active');
} */

