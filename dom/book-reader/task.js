const bookControlFont = document.querySelector('.book__control_font-size');
const bookControlColor = document.querySelector('.book__control_color');
const bookControlBack = document.querySelector('.book__control_background');
const bookContent = document.querySelector('.book__content');
const bookFontLinks = Array.from(bookControlFont.children);
const bookColor = Array.from(bookControlColor.querySelectorAll('.color'));
const contentZone = Array.from(document.querySelectorAll('p'));
const bookBackgroundSwitch = Array.from(bookControlBack.querySelectorAll('a'));

console.log(bookContent)


//работаем со шрифтом
bookFontLinks.forEach(link => link.addEventListener('click', clickOnLink))
function removeActiveLink() {
    bookFontLinks.forEach(link => link.classList.remove('font-size_active'));
}
function removeActiveFont() {
    bookContent.classList.contains('font-size_small') ? bookContent.classList.remove('font-size_small') :
        bookContent.classList.remove('font-size_big')
}
function clickOnLink(event) {
    event.preventDefault();
    removeActiveLink();
    event.target.classList.add('font-size_active');
    if (event.target.dataset.size === 'small') {
        removeActiveFont();
        bookContent.classList.add('font-size_small')
    } else if (event.target.dataset.size === 'big') {
        removeActiveFont();
        bookContent.classList.add('font-size_big')
    } else removeActiveFont();
}

//работаем с цветом текста
bookColor.forEach(link => link.addEventListener('click', colorClick))
function colorClick(event) {
    event.preventDefault();
    removeActiveColorLink();
    removeActiveColor();
    event.target.classList.add('color_active');
    if (event.target.getAttribute('data-text-color') === 'black') {
        contentZone.forEach(elem => elem.classList.add('book_color-black'))
    } else if (event.target.getAttribute('data-text-color') === 'gray') {
        contentZone.forEach(elem => elem.classList.add('book_color-gray'))
    } else contentZone.forEach(elem => elem.classList.add('book_color-whitesmoke'))
}
function removeActiveColorLink() {
    bookColor.forEach(link => link.classList.remove('color_active'));
}
function removeActiveColor() {
    contentZone.forEach(elem => {
        if (elem.classList.contains('book_color-black')) {
            elem.classList.remove('book_color-black');
        } else if (elem.classList.contains('book_color-gray')) {
            elem.classList.remove('book_color-gray');
        } else elem.classList.remove('book_color-whitesmoke');
    })
}

//работаем с фоном 
bookBackgroundSwitch.forEach(link => link.addEventListener('click', changeBack));
function changeBack(event) {
    event.preventDefault();
    removeActiveBackSwitch();
    removeActiveBack();
    event.target.classList.add('color_active');
    if (event.target.getAttribute('data-bg-color') === 'black') {
        bookContent.classList.add('book_bg-black');
    } else if (event.target.getAttribute('data-bg-color') === 'gray') {
        bookContent.classList.add('book_bg-gray');
    } else bookContent.classList.add('book_bg-white');
}
function removeActiveBackSwitch() {
    bookBackgroundSwitch.forEach(elem => elem.classList.remove('color_active'))
}
function removeActiveBack() {
    if (bookContent.classList.contains('book_bg-black')) {
        bookContent.classList.remove('book_bg-black')
    } else if (book.classList.contains('book_bg-gray')) {
        bookContent.classList.remove('book_bg-gray');
    } else bookContent.classList.remove('book_bg-white')
}
