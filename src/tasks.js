import "./styles.css";
// import { List, Task, render, newTaskModal } from "./tasks.js";

// LISTS
class List {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
    add(task) {
        this.tasks.push(task);
    }
    remove(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}

// TASKS

class Task {
    constructor(title, description, due) {
        // this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.due = due;
        this.complete = false;
    }
    toggleComplete() {
        this.complete = !this.complete;
    }
}

// RENDER
function render(obj) {
    const container = document.querySelector("body");

    container.replaceChildren();

    // List Heading
    let heading = document.createElement("h1");
    heading.classList.add("list-heading");
    heading.textContent = obj.title;
    container.appendChild(heading);

    // New task button
    let newTaskBtn = document.createElement("button");
    newTaskBtn.textContent = "New Task";
    newTaskBtn.addEventListener("click", () => newTaskModal.showModal());
    container.appendChild(newTaskBtn);

    // New task modal
    let newTaskModal = document.createElement("dialog");
    newTaskModal.classList.add("new-task-modal");
    let newTaskTitleInput = document.createElement("input");
    newTaskTitleInput.placeholder = "Task Title";
    newTaskModal.appendChild(newTaskTitleInput);
    let newTaskDescInput = document.createElement("input");
    newTaskDescInput.placeholder = "Task Desc";
    newTaskModal.appendChild(newTaskDescInput);
    let newTaskDueInput = document.createElement("input");
    newTaskDueInput.placeholder = "Task Due";
    newTaskModal.appendChild(newTaskDueInput);
    let newTaskSubmit = document.createElement("button");
    newTaskSubmit.textContent = "Add";
    newTaskSubmit.addEventListener("click", () => addNewTask());
    newTaskModal.appendChild(newTaskSubmit);
    container.appendChild(newTaskModal);

    // Add new task

    function addNewTask() {
        newTaskModal.close();
        list1.add(
            new Task(
                newTaskTitleInput.value,
                newTaskDescInput.value,
                newTaskDueInput.value
            )
        );
        render(list1);
    }

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

export function openAddTaskModal() {
    let newTaskTitle = prompt("Task Title");
    let newTaskDesc = prompt("Task Description");
    let newTaskDue = prompt("Task Due Date");
    list1.add(new Task(newTaskTitle, newTaskDesc, newTaskDue));
    render(".container", list1);
}

// TESTING

let list1 = new List("Tasks");
let list2 = new List("Shopping");

list1.add(new Task("Make list", "Create vanilla todo list", "Tomorrow"));
list1.add(new Task("Bins", "Take the bins out", "Friday"));
list2.add(new Task("Tennis Shoes", "", "Friday"));
list2.add(new Task("Beer", "Pale Ales", "Saturday"));

// list1.remove(list1.tasks[1]);
// list1.tasks[0].toggleComplete();
// console.log(list1.tasks);

render(list1);
