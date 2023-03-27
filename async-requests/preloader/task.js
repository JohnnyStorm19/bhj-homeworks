const loader = document.getElementById('loader');
const items = document.getElementById('items');
let obj = JSON.parse(localStorage.getItem('items')) || null; 

let xhr = new XMLHttpRequest();
let requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
xhr.open('GET', requestURL);
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
    if (xhr.status >= 400) {
        console.error('Произошла ошибка')
    }
    loader.classList.remove('loader_active');
    let responseObj = xhr.response;
    obj = responseObj.response.Valute;
    let objArray = [];
    for (let key in obj) {
        let itemObj = {
            charCode: obj[key]['CharCode'],
            value: obj[key]['Value'],
        }
        objArray.push(itemObj);
        items.innerHTML +=
            `<div class="item">
                <div class="item__code">
                    ${obj[key]['CharCode']}
                </div>
                <div class="item__value">
                    ${obj[key]['Value']}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`
    }
    localStorage.setItem('items', JSON.stringify(objArray))
})

if (!obj) {
    xhr.send()
} else {
    loader.classList.remove('loader_active');
    for (let key in obj) {
        items.innerHTML +=
            `<div class="item">
                <div class="item__code">
                    ${obj[key]['charCode']}
                </div>
                <div class="item__value">
                    ${obj[key]['value']}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`
    }
}

//чтобы хоть когда-то информация обновлялась - удаляем localStorage, если не перезагружать страницу хотя бы (допустим) 1 минуту
window.setInterval(() => {
    localStorage.clear();
    console.log('localStorage is cleared!')
}, 60000)


