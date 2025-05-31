const input = document.querySelector('input');
const addButton = document.querySelector('.add-button');
// const deleteButton = document.querySelector('.delete-button');
const listBody = document.querySelector('ol');


const addTask = () => {
    if (input.value.trim() === '') return;
    const taskElement = document.createElement('li')
    const deleteTask = document.createElement('button')
    deleteTask.textContent = 'Delete task'
    taskElement.textContent = input.value
    listBody.appendChild(taskElement)
    taskElement.appendChild(deleteTask)
    input.value = ''
}


addButton.addEventListener('click', addTask)