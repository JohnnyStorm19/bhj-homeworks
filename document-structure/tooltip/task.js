const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
hasTooltips.forEach(el => el.insertAdjacentHTML('afterend', '<div class="tooltip"></div>'));


document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('has-tooltip')) {
        event.preventDefault();
        const tooltip = target.nextElementSibling;
        tooltipContent(target, tooltip);
        changePositionAttribute(tooltip, 'bottom');
        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
        } else {
            hideTooltips();
            tooltip.classList.add('tooltip_active');
            tooltipPositioning(tooltip, tooltip.dataset.position, target);
        }
    } else {
        hideTooltips();
    }
})

//смена позиций для подсказки
function tooltipPositioning(element, position, event) {
    let { top: linkTop, left: linkLeft, height: linkHeight, width: linkWidth} = event.getBoundingClientRect();
    let { height: tooltipHeight, width: tooltipWidth } = element.getBoundingClientRect();
    element.style.position = 'absolute';
    if (position === 'top') {
        element.style.top = linkTop + window.scrollY - tooltipHeight + 'px';
        element.style.left = linkLeft + 'px';
    } else if (position === 'left') {
        element.style.top = linkTop + window.scrollY + 'px';
        element.style.left = linkLeft - tooltipWidth + 'px';
    } else if (position === 'right') {
        element.style.top = linkTop + window.scrollY + 'px';
        element.style.left = linkLeft + linkWidth + 'px';
    } else if (position === 'bottom') {
        element.style.top = linkTop + window.scrollY + linkHeight + 'px';
        element.style.left = linkLeft + 'px';
    }
}
//скрываем подсказки
function hideTooltips() {
    const currentTips = document.querySelectorAll('.tooltip_active');
    currentTips.forEach(el => {
        el.classList.remove('tooltip_active');
    })
}
//устанавливаем атрибут и наполняем подсказку текстовым контентом
function tooltipContent(event, element) {
    element.setAttribute('data-position', '');
    element.textContent = event.getAttribute('title');
}
//смена позиции
function changePositionAttribute(element, position) {
    element.dataset.position = position
}
