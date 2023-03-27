const form = document.getElementById('form');
const progressBar = document.getElementById('progress');
const sendBtn = document.getElementById('send');

let xhr = new XMLHttpRequest();
let requestURL = 'https://students.netoservices.ru/nestjs-backend/upload';

xhr.upload.onprogress = (event) => { 
    progressBar.value = event.loaded / event.total;
}

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let formData = new FormData(form);
    console.log('Данные загружаются: ' + formData)
    xhr.open('POST', requestURL);
    xhr.send(formData);
})

xhr.onloadend = function () {
    if (xhr.status >= 200) {
        alert("Данные успешно загружены");
        progressBar.value = 0;
    } else {
        alert("Ошибка " + xhr.status);
    }
}

