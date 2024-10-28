// RENDER
export default function (obj) {
    let listArray = obj.listArray;
    let currentList = obj.currentList;

    const container = document.querySelector("body");

    // Clear container
    container.replaceChildren();

    // List Heading
    let heading = document.createElement("h1");
    heading.classList.add("list-heading");
    heading.textContent = currentList.title;
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
    newTaskSubmit.addEventListener("click", () =>
        obj.addNewTask(
            newTaskTitleInput.value,
            newTaskDescInput.value,
            newTaskDueInput.value
        )
    );
    newTaskModal.appendChild(newTaskSubmit);
    container.appendChild(newTaskModal);

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
    newListSubmit.addEventListener("click", () =>
        obj.addNewList(newListNameInput.value)
    );
    newListModal.appendChild(newListSubmit);
    container.appendChild(newListModal);

    // Change list button
    let changeListBtn = document.createElement("button");
    changeListBtn.textContent = "Change List";
    changeListBtn.addEventListener("click", () => changeListModal.showModal());
    container.appendChild(changeListBtn);

    // Change list modal
    let changeListModal = document.createElement("dialog");
    changeListModal.classList.add("new-task-modal");
    for (let obj of listArray) {
        let listButton = document.createElement("button");
        listButton.textContent = obj.title;
        listButton.addEventListener("click", () =>
            changeListPasser(listArray.indexOf(obj))
        );
        changeListModal.appendChild(listButton);
    }
    container.appendChild(changeListModal);

    function changeListPasser(listIndex) {
        obj.changeList(listIndex);
    }

    // Tasks
    if (currentList.tasks) {
        for (let task of currentList.tasks) {
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
            // Append
            container.appendChild(taskDiv);
        }
    }
}
