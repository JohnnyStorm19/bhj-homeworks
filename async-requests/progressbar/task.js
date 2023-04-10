const progress = document.getElementById('progress');
const sendBtn = document.getElementById('send');
const form = document.getElementById('form');

let xhr = new XMLHttpRequest();
let requestUrl = 'https://students.netoservices.ru/nestjs-backend/upload';

xhr.upload.onprogress = (event) => {
    progress.value = event.loaded / event.total;
}

xhr.addEventListener('load', () => {
    alert('Loading has completed');
    progress.value = 0;
})

sendRequest('POST', requestUrl);


function sendRequest(method, url) {
    if (method === 'POST') {
        sendBtn.addEventListener('click', (event) => {
            event.preventDefault();
            let formData = new FormData(form);
            xhr.open(method, url);
            xhr.send(formData);
        })
    }
    //если 'GET'-запрос, тогда что-то другое
}
