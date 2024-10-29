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
    let newTaskModalContainer = document.createElement("div");
    newTaskModal.appendChild(newTaskModalContainer);
    let newTaskTitleInput = document.createElement("input");
    newTaskTitleInput.placeholder = "Task Title";
    newTaskModalContainer.appendChild(newTaskTitleInput);
    let newTaskDescInput = document.createElement("input");
    newTaskDescInput.placeholder = "Task Desc";
    newTaskModalContainer.appendChild(newTaskDescInput);
    let newTaskDueInput = document.createElement("input");
    newTaskDueInput.type = "date";
    newTaskModalContainer.appendChild(newTaskDueInput);
    let newTaskSubmit = document.createElement("button");
    newTaskSubmit.textContent = "Add";
    newTaskSubmit.addEventListener("click", () =>
        obj.addNewTask(
            newTaskTitleInput.value,
            newTaskDescInput.value,
            newTaskDueInput.value
        )
    );
    newTaskModalContainer.appendChild(newTaskSubmit);
    container.appendChild(newTaskModal);

    // New list button
    let newListBtn = document.createElement("button");
    newListBtn.textContent = "New List";
    newListBtn.addEventListener("click", () => newListModal.showModal());
    container.appendChild(newListBtn);

    // New list modal
    let newListModal = document.createElement("dialog");
    newListModal.classList.add("new-task-modal");
    let newListModalContainer = document.createElement("div");
    newListModal.appendChild(newListModalContainer);
    let newListNameInput = document.createElement("input");
    newListNameInput.placeholder = "List Name";
    newListModalContainer.appendChild(newListNameInput);
    let newListSubmit = document.createElement("button");
    newListSubmit.textContent = "Add";
    newListSubmit.addEventListener("click", () =>
        obj.addNewList(newListNameInput.value)
    );
    newListModalContainer.appendChild(newListSubmit);
    container.appendChild(newListModal);

    // Change list button
    let changeListBtn = document.createElement("button");
    changeListBtn.textContent = "Change List";
    changeListBtn.addEventListener("click", () => changeListModal.showModal());
    container.appendChild(changeListBtn);

    // Change list modal
    let changeListModal = document.createElement("dialog");
    changeListModal.classList.add("new-task-modal");

    let changeListModalContainer = document.createElement("div");
    changeListModal.appendChild(changeListModalContainer);

    for (let obj of listArray) {
        let listButton = document.createElement("button");
        listButton.textContent = obj.title;
        listButton.addEventListener("click", () =>
            changeListPasser(listArray.indexOf(obj))
        );
        changeListModalContainer.appendChild(listButton);
    }
    container.appendChild(changeListModal);

    function changeListPasser(listIndex) {
        obj.changeList(listIndex);
    }

    // Remove list button
    let removeListBtn = document.createElement("button");
    removeListBtn.textContent = "Remove List";
    removeListBtn.addEventListener("click", () => obj.removeList());
    container.appendChild(removeListBtn);

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
            let complete = document.createElement("button");
            complete.classList.add("task-complete");
            complete.textContent = task.complete;
            complete.addEventListener("click", () => task.toggleComplete());
            taskDiv.appendChild(complete);
            // Remove
            let remove = document.createElement("button");
            remove.classList.add("task-remove");
            remove.textContent = "Remove";
            remove.addEventListener("click", () => currentList.remove(task));
            taskDiv.appendChild(remove);

            // Append
            container.appendChild(taskDiv);
        }
    }
}
