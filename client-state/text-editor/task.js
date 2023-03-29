const editorArea = document.getElementById('editor');
const cleanBtn = document.querySelector('.btn_clear');

editorArea.value = localStorage.getItem('content') || '';

editorArea.addEventListener('keyup', () => {
    localStorage.setItem('content', editorArea.value)
})

editorArea.addEventListener('input', () => {
    if(editorArea.value === ' ') {
        editorArea.value = '';
    }
})

cleanBtn.addEventListener('click', (event) => {
    event.preventDefault();
    editorArea.value = '';
    localStorage.clear();
})

