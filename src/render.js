export default function (divClass, obj) {
    const div = document.querySelector(divClass);

    div.textContent = obj.title;

    div.textContent = obj.tasks;
}
