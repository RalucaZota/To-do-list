const input = document.querySelector('input');
const addButton = document.querySelector('.add-button');
const listBody = document.querySelector('ol');
let counter = 0;
let tasks = [];
let task = { id: counter, value: '' };

const addTask = () => {
  if (input.value.trim() === '') return;
  let task = { id: counter++, value: input.value };
  tasks.push(task);

  const taskElement = document.createElement('li');
  taskElement.setAttribute('id', task.id);

  const taskText = document.createElement('span');
  taskText.textContent = task.value;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete task';
  console.log(task, 'task');

  taskElement.appendChild(taskText);
  listBody.appendChild(taskElement);
  taskElement.appendChild(deleteButton);

  input.value = '';

  deleteButton.addEventListener('click', deleteTask);
};

const deleteTask = (event) => {
  const li = event.target.parentElement;
  const idToDelete = parseInt(li.id);
  li.remove();

  const filteredTasks = tasks.filter((task) => task.id !== idToDelete);
  tasks = filteredTasks;
  return tasks;
};

addButton.addEventListener('click', addTask);
