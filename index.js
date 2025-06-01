const input = document.querySelector('input');
const addButton = document.querySelector('.add-button');
const listBody = document.querySelector('ol');
let counter = 0;
let tasks = [];
let task = { id: counter, value: '' };

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

  taskElement.appendChild(taskText);
  taskElement.appendChild(checkboxInput);
  listBody.appendChild(taskElement);

  input.value = '';
  // console.log(task, 'task');

  checkboxInput.addEventListener('change', () => toggleCheckbox(task.id, checkboxInput));
};

const toggleCheckbox = ( id, checkbox) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].completed = checkbox.checked;
  
  // const li = event.target.parentElement;
  // const idToDelete = parseInt(li.id);
  // li.remove();

  console.log(checkbox.checked, 'checkbox.completed');
  
  tasks = tasks.filter((task) => task.id !== id);
  console.log(tasks, 'tasks');
  
  return tasks;
};
}


addButton.addEventListener('click', addTask);
