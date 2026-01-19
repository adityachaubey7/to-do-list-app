let Input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// show tasks on page load
showTasks();

addBtn.addEventListener("click", function () {
  let task = Input.value;

  if (task === "") return;

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  Input.value = "";
  showTasks();
});

function showTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    li.innerText = task;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.onclick = function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTasks();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
