const addButton = document.querySelector(".add__btn");
const startButton = document.querySelector(".start__btn");
const taskInput = document.querySelector(".task__input");
const taskList = document.querySelector(".task__list");
const taskAlert = document.querySelector(".task__alert");
const continer = document.querySelector(".task");
const searchBox = document.querySelector(".search__input");
let taskArr = [];
let listArr = [];

function CreatTask(title, check, date, editButtonId) {
    this.title = title;
    this.check = check;
    this.date = date;
    this.editButtonId = editButtonId;
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
    const editButtonId = Math.random();
    editButton.id = editButtonId;
    editButton.innerText = "ویرایش";
    buttonDiv.appendChild(editButton);
    editButton.addEventListener("click", () => {
        taskInput.value = title.value;
    });

    let newTask = new CreatTask(taskInput.value, false, 0, editButtonId);
    taskArr.push(newTask);
    listArr.push({ element: task });
}

//input

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
            //console.log(listArr[0].element);
        }
    }
});

// search

searchBox.addEventListener("input", (e) => {
    const searchText = e.target.value;
    console.log(searchBox);
    listArr.forEach((item) => {
        const itemText = item.element.innerText;
        console.log(itemText);
        if (itemText.includes(searchText)) item.element.classList.remove("hidden");
        else item.element.classList.add("hidden");
    });
});