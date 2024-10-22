import { List, Task } from "./tasks.js";
import log from "./logger.js";
import render from "./render.js";

let list1 = new List("Tasks");
let list2 = new List("Shopping");

list1.add(
    new Task(
        "Make todo list",
        "Create vanilla todo list using modules and webpack",
        "Tomorrow",
        false
    )
);
list1.add(new Task("Bins", "Take the bins out", "Friday", false));

list2.add(new Task("Tennis Shoes", "", "Friday", false));

log(list1.tasks);

list1.remove(list1.tasks[1]);

log(list1.tasks);

render(".container", list1);
