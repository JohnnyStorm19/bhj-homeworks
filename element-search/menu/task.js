const subMenu = Array.from(document.querySelectorAll('.menu_sub'));
const links = Array.from(document.querySelectorAll('.menu__link'));

for (let i = 0; i < links.length; i++) {
    if (links[i].nextElementSibling != null) {
        links[i].onclick = function () {
            if (links[i].nextElementSibling.classList.contains('menu_active')) {
                links[i].nextElementSibling.classList.remove('menu_active');
            } else {
                closeSubMenu()
                links[i].nextElementSibling.classList.add('menu_active');
            }
            return false;
        }
    }
}

function closeSubMenu() {
    subMenu.forEach(elem => elem.classList.remove('menu_active'));
}