const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function addTask(title) {
    tasksList.insertAdjacentHTML('beforeend', `
        <div class="task">
            <div class="task__title">${title}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);

    const lastTask = tasksList.lastElementChild;
    const removeBtn = lastTask.querySelector('.task__remove');

    removeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        lastTask.remove();
    });
}

tasksForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = taskInput.value.trim();

    if (title.length > 0) {
        addTask(title);
        taskInput.value = '';
    }
});