const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const taskCount = document.getElementById("task-count");

let tasks = ["Task 1", "Task 2", "Task 3"];

function renderTasks() {
  todoList.textContent = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    todoList.appendChild(li);
  });
}
