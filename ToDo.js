const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const taskCount = document.getElementById("task-count");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  todoList.textContent = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.textContent = task.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);
    li.classList.toggle("done", task.done);
    todoList.appendChild(li);
  });
}

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText) {
    tasks.push({ id: Date.now(), text: taskText, done: false });
    todoInput.value = "";
    saveTasks();
    renderTasks();
  }
}

addBtn.addEventListener("click", addTask);

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

todoList.addEventListener("click", (event) => {
  const id = Number(event.target.dataset.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) return;
  task.done = !task.done;
  saveTasks();
  renderTasks();
});

renderTasks();
