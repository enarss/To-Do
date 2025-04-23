// import deleteTask from "./deleteTask.js";
// import editTask from "./editTask.js";
import checkTask from "./checkTask.js";

export default function addTask(taskList, taskInput, startDateButton, listArr) {
    const task = document.createElement("li");
    task.classList = "list__item";
    taskList.appendChild(task);

    const titleDiv = document.createElement("div");
    titleDiv.classList = "title__div";
    task.appendChild(titleDiv);

    const buttonDiv = document.createElement("div");
    task.appendChild(buttonDiv);

    const title = document.createElement("p");
    title.innerText = taskInput.value;
    title.classList = "task__title";

    const startDate = document.createElement("p");
    startDate.innerText = startDateButton.value;
    if(startDateButton.value === "") startDate.innerText = "امروز";
    startDate.classList = "start__date";
    
    checkTask(titleDiv, title, startDate);

    titleDiv.appendChild(title);
    titleDiv.appendChild(startDate);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "btn del__btn";
    deleteButton.innerText = "پاک کن";
    buttonDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        task.remove();
        listArr.pop({ element: task });
    });

    const editButton = document.createElement("button");
    editButton.classList = "btn edt__btn";
    editButton.innerText = "ویرایش";
    buttonDiv.appendChild(editButton);
    editButton.addEventListener("click", () => {
        title.toggleAttribute('contenteditable');
        if(title.hasAttribute('contenteditable')){
            editButton.innerText = "نهادن";
            title.classList.add("edit__task");
        }
        else {
            editButton.innerText = "ویرایش";
            title.classList.remove("edit__task");
        }
    });
    listArr.push({ element: task });
}