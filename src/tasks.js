export class List {
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

export class Task {
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
