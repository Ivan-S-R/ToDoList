const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const taskCount = document.getElementById("task-count");

let tasks = [
  { id: 0, text: "Task 1", done: false },
  { id: 1, text: "Task 2", done: false },
  { id: 2, text: "Task 3", done: false },
];

function renderTasks() {
  todoList.textContent = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    todoList.appendChild(li);
  });
}

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText) {
    tasks.push({ id: Date.now(), text: taskText, done: false });
    todoInput.value = "";
    renderTasks();
  }
}

addBtn.addEventListener("click", addTask);

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

renderTasks();
