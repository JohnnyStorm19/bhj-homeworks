const modal = document.querySelector('.modal');

if (!getCookie('modal_closed')) {
    modal.classList.add('modal_active');
}

modal.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('modal__close_times')) {
        setCookie('modal_closed', 'true');
        modal.classList.remove('modal_active');
    }
})


function setCookie(key, value) {
    document.cookie = key + '=' + encodeURIComponent(value);
}
function getCookie(key) {
    let pairs = document.cookie.split(';');
    let cookie = pairs.find(el => el.startsWith(key + '=')) || '';
    return cookie.substring(key.length + 1) || '';
}
