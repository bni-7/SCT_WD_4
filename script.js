// Select elements
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = taskDate.value;

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span class="task-text">${taskText} ${dueDate ? '- Due: ' + new Date(dueDate).toLocaleString() : ''}</span>
        <div class="task-actions">
            <button class="complete-btn">Complete</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Event listeners for task actions
    taskItem.querySelector('.complete-btn').addEventListener('click', () => completeTask(taskItem));
    taskItem.querySelector('.edit-btn').addEventListener('click', () => editTask(taskItem));
    taskItem.querySelector('.delete-btn').addEventListener('click', () => deleteTask(taskItem));

    taskList.appendChild(taskItem);

    // Clear inputs
    taskInput.value = '';
    taskDate.value = '';
}

// Function to mark task as complete
function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
}

// Function to edit task
function editTask(taskItem) {
    const taskTextSpan = taskItem.querySelector('.task-text');
    const newText = prompt('Edit your task:', taskTextSpan.textContent.split('- Due:')[0].trim());

    if (newText !== null && newText.trim() !== '') {
        taskTextSpan.innerHTML = newText;
    }
}

// Function to delete task
function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}

// Add event listener to Add Task button
addTaskBtn.addEventListener('click', addTask);

// Optional: Add functionality to use the "Enter" key to add tasks
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
