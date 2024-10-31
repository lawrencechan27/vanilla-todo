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
        render(lists);
        save(lists);
    }
}
let listMethods = {
    add: function (task) {
        this.tasks.push(task);
    },
    remove: function (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        render(lists);
        save(lists);
    },
};

// TASKS
class Task {
    constructor(title, description, due) {
        this.title = title;
        this.description = description;
        this.due = due;
        this.complete = "Incomplete";
    }
    toggleComplete() {
        this.complete == "Incomplete"
            ? (this.complete = "Complete")
            : (this.complete = "Incomplete");
        render(lists);

        save(lists);
    }
}
let taskMethods = {
    toggleComplete() {
        this.complete == "Incomplete"
            ? (this.complete = "Complete")
            : (this.complete = "Incomplete");
        render(lists);

        save(lists);
    },
};
// LISTS
let lists = {
    listArray: [new List("Tasks")],
    currentList: null,
};

let listsMethods = {
    addNewTask: function (title, desc, due) {
        if (title && desc && due) {
            lists.currentList.add(new Task(title, desc, due));
            render(lists);
            save(lists);
        }
    },
    addNewList: function (title) {
        if (title) {
            lists.listArray.push(new List(title));
            lists.currentList = lists.listArray[lists.listArray.length - 1];
            render(lists);
            save(lists);
        }
    },
    changeList: function (listIndex) {
        lists.currentList = lists.listArray[listIndex];
        render(lists);
        save(lists);
    },
    removeList: function () {
        let removeIndex = lists.listArray.indexOf(lists.currentList);
        lists.listArray.splice(removeIndex, 1);
        lists.currentList = lists.listArray[0];
        render(lists);
        save(lists);
    },
};

// INIT

function save(obj) {
    localStorage.setItem("lists", JSON.stringify(obj));
}
function load() {
    lists = JSON.parse(localStorage.getItem("lists"));

    // Assign methods to lists
    Object.assign(lists, listsMethods);

    // Assign methods to List object
    for (let obj of lists.listArray) {
        Object.assign(obj, listMethods);
        for (let task of obj.tasks) {
            Object.assign(task, taskMethods);
        }
    }
    lists.currentList = lists.listArray[0];
}

load(lists);

render(lists);
