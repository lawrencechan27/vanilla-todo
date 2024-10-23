export default function (divClass, obj) {
  const container = document.querySelector(divClass);

  // List Heading
  let heading = document.createElement("h1");
  heading.classList.add("list-heading");
  heading.textContent = obj.title;
  container.appendChild(heading);

  // New task button
  let newTaskBtn = document.createElement("button");
  newTaskBtn.textContent = "New Task";
  newTaskBtn.addEventListener("click", newTaskModal);
  container.appendChild(newTaskBtn);

  // Tasks
  for (let task of obj.tasks) {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Title
    let title = document.createElement("h2");
    title.classList.add("task-title");
    title.textContent = task.title;
    taskDiv.appendChild(title);

    // Description
    let desc = document.createElement("p");
    desc.classList.add("task-desc");
    desc.textContent = task.description;
    taskDiv.appendChild(desc);

    // Due
    let due = document.createElement("p");
    due.classList.add("task-due");
    due.textContent = `Due: ${task.due}`;
    taskDiv.appendChild(due);

    // Complete
    let complete = document.createElement("p");
    complete.classList.add("task-complete");
    complete.textContent = task.complete;
    taskDiv.appendChild(complete);

    container.appendChild(taskDiv);
  }
}

function newTaskModal() {
  let newTaskTitle = prompt("Task Title");
  let newTaskDesc = prompt("Task Description");
  let newTaskDue = prompt("Task Due Date");
  list2.add(new Task("Tennis Shoes", "", "Friday"));
}
