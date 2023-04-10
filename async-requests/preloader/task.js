const valutes = document.getElementById('items');
const loader = document.querySelector('.loader');

let valutesInfo = JSON.parse(localStorage.getItem('valutesInfo')) || null;

let xhr = new XMLHttpRequest();
let requestUrl = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

xhr.responseType = 'json';
xhr.open('GET', requestUrl);

xhr.addEventListener('load', () => {
    loader.classList.remove('loader_active');
    let response = xhr.response.response.Valute;
    localStorage.setItem('valutesInfo', JSON.stringify(response))
    valutes.innerHTML = '';
    for (let item in response) {
        valutes.innerHTML += 
        `<div class="item">
            <div class="item__code">
                ${response[item]['CharCode']}
            </div>
            <div class="item__value">
                ${response[item]['Value']}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`
    }
})

if (!valutesInfo) {
    console.log('Запрос отправлен!')
    xhr.send();
} else {
    loader.classList.remove('loader_active');
    for (let item in valutesInfo) {
        valutes.innerHTML += 
        `<div class="item">
            <div class="item__code">
                ${valutesInfo[item]['CharCode']}
            </div>
            <div class="item__value">
                ${valutesInfo[item]['Value']}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`
    }
    console.log('Взяли из локального хранилища!')  
}

//чтобы хоть когда-то информация обновлялась - удаляем localStorage, если не перезагружать страницу хотя бы (допустим) 1 минуту
window.setInterval(() => {
    localStorage.removeItem('valutesInfo');
    console.log('localStorage is cleared!')
}, 60000)
