import "./styles.css";
// import { List, Task, render, newTaskModal } from "./tasks.js";

// LISTS
let lists = [];
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
    newTaskDueInput.type = "date";
    newTaskModal.appendChild(newTaskDueInput);
    let newTaskSubmit = document.createElement("button");
    newTaskSubmit.textContent = "Add";
    newTaskSubmit.addEventListener("click", () => addNewTask());
    newTaskModal.appendChild(newTaskSubmit);
    container.appendChild(newTaskModal);

    // Add new task
    function addNewTask() {
        if (
            newTaskTitleInput.value &&
            newTaskDescInput.value &&
            newTaskDueInput.value
        ) {
            newTaskModal.close();
            lists[0].add(
                new Task(
                    newTaskTitleInput.value,
                    newTaskDescInput.value,
                    newTaskDueInput.value
                )
            );
            render(lists[0]);
        }
    }

    // New list button
    let newListBtn = document.createElement("button");
    newListBtn.textContent = "New List";
    newListBtn.addEventListener("click", () => newListModal.showModal());
    container.appendChild(newListBtn);

    // New list modal
    let newListModal = document.createElement("dialog");
    newListModal.classList.add("new-task-modal");
    let newListNameInput = document.createElement("input");
    newListNameInput.placeholder = "List Name";
    newListModal.appendChild(newListNameInput);
    let newListSubmit = document.createElement("button");
    newListSubmit.textContent = "Add";
    newListSubmit.addEventListener("click", () => addNewList());
    newListModal.appendChild(newListSubmit);
    container.appendChild(newListModal);

    // Add new list
    function addNewList() {
        if (newListNameInput.value) {
            newListModal.close();
            lists.push(new List(newListNameInput.value));
            new List();
            render(lists[lists.length - 1]);
        }
    }

    // Change list button
    let changeListBtn = document.createElement("button");
    changeListBtn.textContent = "Change List";
    changeListBtn.addEventListener("click", () => changeListModal.showModal());
    container.appendChild(changeListBtn);

    // Change list modal
    let changeListModal = document.createElement("dialog");
    changeListModal.classList.add("new-task-modal");
    for (let obj of lists) {
        let listButton = document.createElement("button");
        listButton.textContent = obj.title;
        listButton.addEventListener("click", () =>
            changeList(lists.indexOf(obj))
        );
        changeListModal.appendChild(listButton);
    }
    container.appendChild(changeListModal);

    // Change list function
    function changeList(listIndex) {
        changeListModal.close();
        render(lists[listIndex]);
    }

    // Tasks
    if (obj.tasks) {
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
}

export function openAddTaskModal() {
    let newTaskTitle = prompt("Task Title");
    let newTaskDesc = prompt("Task Description");
    let newTaskDue = prompt("Task Due Date");
    lists[0].add(new Task(newTaskTitle, newTaskDesc, newTaskDue));
    render(".container", lists[0]);
}

// TESTING

lists.push(new List("Tasks"));

render(lists[0]);
