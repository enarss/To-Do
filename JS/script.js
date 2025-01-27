const addButton = document.querySelector(".add__btn");
const startButton = document.querySelector(".start__btn");
const taskInput = document.querySelector(".task__input");
const taskList = document.querySelector(".task__list");
const taskAlert = document.querySelector(".task__alert");
const continer = document.querySelector(".task");
let taskArr = [];

function CreatTask(title, check, date) {
    this.title = title;
    this.check = check;
    this.date = date;
}

function addTask() {
    const task = document.createElement("li");
    task.classList = "list__item";
    taskList.appendChild(task);

    const titleDiv = document.createElement("div");
    task.appendChild(titleDiv);

    const buttonDiv = document.createElement("div");
    task.appendChild(buttonDiv);

    let complateTask = document.createElement("input");
    complateTask.type = "checkbox";
    complateTask.classList = "check__task";
    titleDiv.appendChild(complateTask);
    complateTask.addEventListener("click", () => {
        const complated = new Audio('./audio/afarin.mp3')
        if (complateTask.checked) complated.play();
    });

    const title = document.createElement("p");
    title.innerText = taskInput.value;
    titleDiv.appendChild(title);

    const deleteButton = document.createElement("button");
    deleteButton.classList = "btn del__btn";
    deleteButton.innerText = "پاک کن";
    buttonDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        task.remove();
    });

    const editButton = document.createElement("button");
    editButton.classList = "btn edt__btn";
    editButton.innerText = "ویرایش";
    buttonDiv.appendChild(editButton);
    editButton.addEventListener("click", () => {
        taskInput.value = title;
    });
    
    let newTask = new CreatTask(taskInput.value, false, 0);
    taskArr.push(newTask);

    const newList = document.createElement("h2");
    newList.innerText = "انجام شده";
    continer.appendChild(newList);
}

addButton.addEventListener("click", () => {
    if (taskInput.value.length < 3)
        taskAlert.classList = "task__alert-on";
    else {
        taskAlert.classList = "task__alert";
        addTask();
        taskInput.value = "";
    }
});

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (taskInput.value.length < 3)
            taskAlert.classList = "task__alert-on";
        else {
            taskAlert.classList = "task__alert";
            addTask();
            taskInput.value = "";
            console.log(taskArr);
        }
    }
});