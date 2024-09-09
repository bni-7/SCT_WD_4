# SCT_WD_4
# Basic To-Do App

## Overview

This **Basic To-Do App** allows users to add, organize, and manage their tasks. Users can enter tasks, set due dates, mark tasks as completed, edit task descriptions, and delete tasks. The app is built with HTML, CSS, and JavaScript to provide a smooth and responsive user experience.

## Features

- **Add Tasks**: Users can add tasks with optional deadlines (date and time).
- **Task Management**: Tasks can be marked as completed, edited, or deleted.
- **Interactive UI**: Real-time task updates as users add, edit, or remove tasks.
- **Date and Time for Tasks**: Users can assign a due date and time for each task, and it will be displayed with the task name.

## Technologies Used

- **HTML5**: Provides the structure and layout of the web application.
- **CSS3**: Used for styling the app, making it responsive and visually appealing.
- **JavaScript (ES6)**: Handles the functionality, including adding tasks, marking them as complete, editing, and deleting.

## Project Structure

```bash
.
├── list.html        # The main HTML file containing the structure of the app
├── style.css         # The CSS file for styling the app
└── script.js         # The JavaScript file for task management functionality
```

## How to Use

### Adding a Task
1. Enter a task in the input field.
2. (Optional) Set the deadline for the task using the date and time picker.
3. Click **"Add Task"** to add the task to the list.

### Marking Tasks as Completed
- Click the **"Complete"** button next to any task to mark it as completed. The task will be visually struck through, indicating its completion.

### Editing Tasks
- Click the **"Edit"** button next to a task to edit its description. A prompt will appear allowing you to modify the task.

### Deleting Tasks
- To delete a task, click the **"Delete"** button next to the task you wish to remove.

### Resetting the App
- After completing or removing tasks, you can continue adding new ones. The app will reset automatically after each interaction, allowing for continuous task management.



## App Workflow

1. Users input a task description and optionally set a due date and time.
2. Clicking **"Add Task"** displays the task in the list.
3. Users can mark tasks as completed, edit, or delete them.
4. The list dynamically updates as the user interacts with the tasks.

## Future Enhancements

Here are a few potential improvements that can be added in the future:

- **Task Categories**: Allow users to organize tasks into categories (e.g., Work, Personal, etc.).
- **Task Prioritization**: Enable prioritization for tasks, such as high, medium, and low priority.
- **Local Storage**: Save tasks in local storage so that tasks persist even after the page is refreshed.
- **Task Filters**: Provide filters to view only completed or pending tasks.
- **Notifications**: Add notifications or reminders for upcoming deadlines.

