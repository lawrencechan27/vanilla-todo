import "./styles.css";
// import { List, Task, render, newTaskModal } from "./tasks.js";
import render from "./render.js";

// LIST

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

// LISTS
let lists = {
    listArray: [new List("Tasks")],
    currentList: null,
    addNewTask: function (title, desc, due) {
        if (title && desc && due) {
            lists.currentList.add(new Task(title, desc, due));
            render(lists);
        }
    },
    addNewList: function (title) {
        if (title) {
            lists.listArray.push(new List(title));
            console.log(lists.currentList);

            lists.currentList = lists.listArray[lists.listArray.length - 1];
            console.log(lists.currentList);
            render(lists);
        }
    },
    changeList: function (listIndex) {
        lists.currentList = lists.listArray[listIndex];
        render(lists);
    },
};

// Init
// lists.listArray[0].add(new Task("Test", "Desc", "2024-10-29", false));
lists.currentList = lists.listArray[0];
render(lists);
