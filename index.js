const input = document.querySelector('input');
const addButton = document.querySelector('.add-button');
const deleteButton = document.querySelector('.delete-button');
const listBody = document.querySelector('ol');

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

let task = { id: counter, value: '', completed: false };

const addTask = () => {
  if (input.value.trim() === '') return;

  let task = { id: counter++, value: input.value, completed: false };
  tasks.push(task);
  input.value = '';
  createTask(task)
  localStorage.setItem('counter', counter);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const createTask = (task) => {
  const taskElement = document.createElement('li');
  taskElement.setAttribute('id', task.id);

  const taskText = document.createElement('span');
  taskText.textContent = task.value;

  const checkboxInput = document.createElement('input');
  checkboxInput.setAttribute('type', 'checkbox');
  checkboxInput.checked = task.completed;

  if (task.completed) {
    taskText.classList.add('completed');
  }

  taskElement.appendChild(taskText);
  taskElement.appendChild(checkboxInput);
  listBody.appendChild(taskElement);

  checkboxInput.addEventListener('change', () => toggleCheckbox(task.id, checkboxInput, taskText));
}

const getTaskFromLocalStorage = () => {
  console.log(tasks, 'getTaskFromLocalStorage');
  tasks.forEach((task) => createTask(task));
};

const toggleCheckbox = (id, checkbox, taskText) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = checkbox.checked;
    
    if (checkbox.checked) {
      taskText.classList.add('completed');
    } else {
      taskText.classList.remove('completed');
    }
  }
};

const deleteTask = () => {
  tasks.forEach((task) => {
    if (task.completed) {
      document.getElementById(task.id).remove()     
    }
  });
   
  tasks = tasks.filter((task) => !task.completed);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks, 'tasks delte task');
};

addButton.addEventListener('click', addTask);
deleteButton.addEventListener('click', deleteTask);

getTaskFromLocalStorage()
