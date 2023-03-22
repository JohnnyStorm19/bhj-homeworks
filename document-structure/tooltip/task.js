const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const newTooltip = document.createElement('span');
newTooltip.classList.add('tooltip');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('has-tooltip')) {
        activeTooltip(event);
    } else {
        newTooltip.classList.remove('tooltip_active');
    }
})

function activeTooltip(event) {
    event.preventDefault();
    event.target.style.position = 'relative';
    newTooltip.style.position = 'absolute'
    event.target.appendChild(newTooltip);
    newTooltip.setAttribute('data-position', 'bottom');
    newTooltip.textContent = event.target.getAttribute('title');

    if (newTooltip.dataset.position === 'top') {
        newTooltip.style.bottom = '100%';
        newTooltip.style.left = 0 + 'px';
    } else if (newTooltip.dataset.position === 'left') {
        newTooltip.style.right = '100%';
        newTooltip.style.top = 0 + 'px';

    } else if (newTooltip.dataset.position === 'right') {
        newTooltip.style.left = '100%';
        newTooltip.style.top = 0 + 'px';

    } else if (newTooltip.dataset.position === 'bottom') {
        newTooltip.style.top = '100%';
        newTooltip.style.left = 0 + 'px';
    }

    newTooltip.classList.add('tooltip_active');
}