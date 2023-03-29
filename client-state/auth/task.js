const card = document.querySelector('.card');
const form = document.getElementById('signin__form');
const welcomeEl = document.querySelector('.welcome');
const userIdEl = document.getElementById('user_id');
const signinBlock = document.getElementById('signin');
const logoutBtn = document.getElementById('logout_btn');

let id = localStorage.getItem('id') || '';

let xhr = new XMLHttpRequest();
let requestURL = 'https://students.netoservices.ru/nestjs-backend/auth';
xhr.responseType = 'json';

if (!id) {
    xhr.addEventListener('load', () => {
        if (xhr.response.success) {
            userIdEl.textContent = xhr.response.user_id;
            hideLoginMenu();
            localStorage.setItem('id', xhr.response.user_id);
        }
    })
} else {
    userIdEl.textContent = id;
    hideLoginMenu();
}

card.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('btn_login')) {
        event.preventDefault();
        let formData = new FormData(form);
        xhr.open('POST', requestURL);
        xhr.send(formData);
    }
    if(target.classList.contains('btn_logout')) {
        event.preventDefault();
        localStorage.clear();
        form.reset();
        hideWelcomeBlock();
        userIdEl.textContent = '';
    }
})

function hideLoginMenu() {
    signinBlock.classList.remove('signin_active');
    welcomeEl.classList.add('welcome_active');
    logoutBtn.classList.add('logout_active');
}

function hideWelcomeBlock() {
    logoutBtn.classList.remove('logout_active');
    welcomeEl.classList.remove('welcome_active');
    signinBlock.classList.add('signin_active');
}