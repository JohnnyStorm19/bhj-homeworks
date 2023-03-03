const modalMain = document.querySelector('#modal_main');
const modalSuccess = document.querySelector('#modal_success');
const closeEl = Array.from(document.querySelectorAll('.modal__close_times'));
const btn = document.querySelectorAll('.btn');

modalMain.style.display = 'flex'

btn.forEach(el => el.onclick = changeModal);
closeEl.forEach(el => el. onclick = closeModal);

function changeModal() {
    if(modalMain.style.display === 'flex') {
        modalMain.style.display = 'none';
        modalSuccess.style.display = 'flex';
    } else {
        modalSuccess.style.display = 'none';
        modalMain.style.display = 'flex';
    }
}
function closeModal() {
    if(modalMain.style.display === 'flex') {
        modalMain.style.display = 'none';
    } else {
        modalSuccess.style.display = 'none';
    }
    
}
