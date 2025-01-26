const addButton = document.querySelector(".add__btn");
const startButton = document.querySelector(".start__btn");
const taskInput = document.querySelector(".task__input");
const taskList = document.querySelector(".task__list");
const taskAlert = document.querySelector(".task__alert");

function addTask() {
    const task = document.createElement("li");
    task.classList = "list__item";
    taskList.appendChild(task);

    const titleDiv =document.createElement("div");
    task.appendChild(titleDiv);

    const buttonDiv =document.createElement("div");
    task.appendChild(buttonDiv);

    const complateTask = document.createElement("input");
    complateTask.type = "checkbox";
    const complated = new Audio("./audio/afarin.mp3")
    if(complateTask.checked) complated.play();
    titleDiv.appendChild(complateTask);

    const title = document.createElement("p");
    title.innerText = taskInput.value;
    titleDiv.appendChild(title);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "btn del__btn";
    deleteButton.innerText = "پاک کن";
    buttonDiv.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.classList = "btn edt__btn";
    editButton.innerText = "ویرایش";
    buttonDiv.appendChild(editButton);
}

addButton.addEventListener("click", () => {
    if(taskInput.value.length < 3)
        taskAlert.classList = "task__alert-on";
    else{
        taskAlert.classList = "task__alert";
        addTask();
        taskInput.value = "";
    }
});

taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        if(taskInput.value.length < 3)
            taskAlert.classList = "task__alert-on";
        else{
            taskAlert.classList = "task__alert";
            addTask();
            taskInput.value = "";
        }
    }
});