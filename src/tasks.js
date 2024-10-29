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
    }
}

// TASKS

class Task {
    constructor(title, description, due) {
        // this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.due = due;
        // Not sure if should use boolean or not
        // this.complete = false;
        this.complete = "Incomplete";
    }
    toggleComplete() {
        // Not sure if should use boolean or not
        // this.complete = !this.complete;
        this.complete == "Incomplete"
            ? (this.complete = "Complete")
            : (this.complete = "Incomplete");
        render(lists);
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
            lists.currentList = lists.listArray[lists.listArray.length - 1];
            render(lists);
        }
    },
    changeList: function (listIndex) {
        lists.currentList = lists.listArray[listIndex];
        render(lists);
    },
    removeList: function () {
        let removeIndex = lists.listArray.indexOf(lists.currentList);
        lists.listArray.splice(removeIndex, 1);
        lists.currentList = lists.listArray[0];
        render(lists);
    },
};

// FOR TESTING
lists.addNewList("Shopping");
lists.listArray[0].add(
    new Task("Bins", "Take the bins out", "2024-10-31", false)
);
lists.listArray[0].add(
    new Task("Bupa", "Update Hospital cover", "2024-11-01", false)
);
lists.listArray[0].add(new Task("Rego", "Renew car rego", "2024-11-04", false));
lists.listArray[1].add(new Task("Temu", "Green sunnies", "2024-10-31", false));
lists.listArray[1].add(
    new Task("Bunnings", "Cement/plastic adhesive", "2024-11-02", false)
);

// INIT
lists.currentList = lists.listArray[0];
render(lists);
