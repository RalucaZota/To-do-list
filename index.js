const input = document.querySelector('input');
const addButton = document.querySelector('.add-button');
const deleteButton = document.querySelector('.delete-button');
const listBody = document.querySelector('ol');
let counter = 0;
let tasks = [];
let task = { id: counter, value: '', completed: false };

const addTask = () => {
  if (input.value.trim() === '') return;
  let task = { id: counter++, value: input.value, completed: false };
  tasks.push(task);

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

  input.value = '';

checkboxInput.addEventListener('change', () => toggleCheckbox(task.id, checkboxInput, taskText));

  console.log(tasks, 'tasks');
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

    console.log(checkbox.checked, 'checkbox.completed');
    console.log(tasks, 'tasks');
  }
};

const deleteTask = () => {
  tasks.forEach((task) => {
    if (task.completed) {
      document.getElementById(task.id).remove();
    }
  });
  console.log(tasks.filter((task) => !task.completed));

  return (tasks = tasks.filter((task) => !task.completed));
};

addButton.addEventListener('click', addTask);
deleteButton.addEventListener('click', deleteTask);
