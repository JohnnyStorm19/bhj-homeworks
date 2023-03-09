const revealEl = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', isVisible);

function isVisible() {
    revealEl.forEach(elem => {
        const{ innerHeight } = window;
        const { top } = elem.getBoundingClientRect();
        if (top < innerHeight && top > 0) {
            elem.classList.add("reveal_active");
          } else {
            elem.classList.remove("reveal_active");
          }
    })
}
