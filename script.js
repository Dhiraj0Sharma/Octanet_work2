

document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            addTask(taskValue);
            taskInput.value = '';
        }
    });

    function addTask(taskValue) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskValue}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.edit-btn').addEventListener('click', () => {
            const newTaskValue = prompt('Edit your task:', li.querySelector('.task-text').textContent);
            if (newTaskValue) {
                li.querySelector('.task-text').textContent = newTaskValue;
            }
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
