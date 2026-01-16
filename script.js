const taskField = document.getElementById("taskField");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(div);
  });
}

function addTask() {
  const text = taskField.value.trim();
  if (text === "") return;

  tasks.push(text);
  saveTasks();
  renderTasks();
  taskField.value = "";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addBtn.addEventListener("click", addTask);
renderTasks();
