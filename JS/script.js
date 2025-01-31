const addButton = document.querySelector(".add__btn");
const startDateButton = document.querySelector(".start__btn");
const taskInput = document.querySelector(".task__input");
const taskList = document.querySelector(".task__list");
const completedList = document.querySelector(".completed__list");
const taskAlert = document.querySelector(".task__alert");
const continer = document.querySelector(".task");
const searchBox = document.querySelector(".search__input");
const sortByDate = document.querySelector(".sort__date__btn");
const sortByName = document.querySelector(".sort__name__btn");
let listArr = [];

$(document).ready(function() {
    $(".example").pDatepicker({
        format: "DD MMMM YYYY",
        autoClose: true
    });
});

function addTask() {
    const task = document.createElement("li");
    task.classList = "list__item";
    taskList.appendChild(task);

    const titleDiv = document.createElement("div");
    titleDiv.classList = "title__div";
    task.appendChild(titleDiv);

    const buttonDiv = document.createElement("div");
    task.appendChild(buttonDiv);

    let complateTask = document.createElement("input");
    complateTask.type = "checkbox";
    complateTask.classList = "check__task";
    titleDiv.appendChild(complateTask);
    complateTask.addEventListener("click", () => {
        const complated = new Audio('./audio/afarin.mp3')
        if (complateTask.checked) {
            complated.play();
            title.classList.add("compeleted__task");
            startDate.classList.add("hidden");
        }
        else {
            title.classList.remove("compeleted__task");
            startDate.classList.remove("hidden");
        }
    });

    const title = document.createElement("p");
    title.innerText = taskInput.value;
    title.classList = "task__title";
    titleDiv.appendChild(title);

    const startDate = document.createElement("p");
    startDate.innerText = startDateButton.value;
    if(startDateButton.value === "") startDate.innerText = "امروز";
    startDate.classList = "start__date";
    titleDiv.appendChild(startDate);

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

//input

addButton.addEventListener("click", () => {
    if (taskInput.value.length < 3)
        taskAlert.classList.remove("hidden");
    else {
        taskAlert.classList.add("hidden");
        addTask();
        taskInput.value = "";
    }
});

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (taskInput.value.length < 3)
            taskAlert.classList.remove("hidden");
        else {
            taskAlert.classList.add("hidden");
            addTask();
            taskInput.value = "";
        }
    }
});

// search

searchBox.addEventListener("input", (e) => {
    const searchText = e.target.value;
    console.log(searchBox);
    listArr.forEach((item) => {
        //const itemText = item.element.innerText.replace("پاک کن", "").replace("ویرایش", "");
        const itemText = item.element.querySelector(".task__title").innerText;
        console.log(itemText);
        if (itemText.includes(searchText)) item.element.classList.remove("hidden");
        else item.element.classList.add("hidden");
    });
});

//sort

sortByDate.addEventListener("click", () => {
    taskList.innerHTML = "";
    listArr.sort((a, b) => {
        const aDate = a.element.querySelector(".start__date").innerText;
        const bDate = b.element.querySelector(".start__date").innerText;
        return (new persianDate([aDate]) - new persianDate([bDate]));
    });
    listArr.forEach(item => {
        taskList.appendChild(item.element);
    });
});

sortByName.addEventListener("click", () => {
    taskList.innerHTML = "";
    listArr.sort((a, b) => {
        const aText = a.element.querySelector(".task__title").innerText;
        const bText = b.element.querySelector(".task__title").innerText;
        return aText.localeCompare(bText);
    });
    listArr.forEach(item => {
        taskList.appendChild(item.element);
    });
});