let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskForm = document.getElementById('addTask');
const taskList = document.getElementById('list');
const taskCount = document.getElementById('taskCount');
const status = document.getElementById('status');

function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const task1 = {
    name1: "",
    status1: ["today", "tomorrow", "onTheWeek"]
}

function renderTask() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <button onclick="deleteTask(${index})"><input class="radio" type="radio" id="radio-input"></button>
        <p>${task.task}</p>
    `;
    taskList.appendChild(li);
    });
    taskCount.textContent = tasks.length;
}


function addTask(e) {
    e.preventDefault();
    const newTask = {
        task: document.getElementById('task').value
    };
    tasks.push(newTask);
    saveTask();
    renderTask();
    taskForm.reset();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTask();
    renderTask();
}

taskForm.addEventListener('submit', addTask);

renderTask();