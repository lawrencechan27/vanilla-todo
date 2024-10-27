import "./styles.css";
// import { List, Task, render, newTaskModal } from "./tasks.js";

// LISTS
// Init
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

// TESTING
lists.push(new List("Tasks"));
let currentList = lists[0];
render(lists[0]);
