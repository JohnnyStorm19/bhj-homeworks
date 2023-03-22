const tasksMain = document.getElementById('tasks');
const tasksForm = document.querySelector('.tasks__control')
const btn = tasksMain.querySelector('button');
const taskInput = tasksMain.querySelector('.tasks__input');
const tasksList = tasksMain.querySelector('.tasks__list');
let tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
let removerIndex = null;


tasksForm.addEventListener('click', (event) => {
    if (event.target === btn) addTask();
    return;
});
taskInput.addEventListener('input', () => {
    if(taskInput.value === ' ') {
        taskInput.value = '';
    }
})

if (tasksList) {
    tasksList.addEventListener('click', (event) => {
        let removers = tasksList.querySelectorAll('.task__remove');
        for (let i = 0; i < removers.length; i++) {
            if (event.target === removers[i]) {
                removerIndex = i;
                removeTask(event.target);
            }
        }
    })
}

//добавить таску
function addTask() {
    if(taskInput.value) {
        let text = taskInput.value;
        const task = {
            task: text,
        };
        tasksArray.push(task); 
        taskInput.value = '';
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
        displayTasks(tasksArray, tasksList);
        console.log(tasksArray);
    } else {
        return
    }
}

//отобразить таску
function displayTasks(obj, list) {
    list.innerHTML = obj.map((item) => {
        return `<div class="task">
            <div class="task__title">
                ${item.task}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    }).join('')
}

//удалить таску
function removeTask(el) {
    let task = el.closest('.task');
    tasksArray.splice(removerIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasksArray))
    task.remove();
    console.log(tasksArray)
}

displayTasks(tasksArray, tasksList)
