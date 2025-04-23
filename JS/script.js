import addTask from "./addTask.js";
import search from "./search.js";
import sortDate from "./sortDate.js";
import sortName from "./sortName.js";

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

//inputAdd
addButton.addEventListener("click", () => {
    if (taskInput.value.length < 3)
        taskAlert.classList.remove("hidden");
    else {
        taskAlert.classList.add("hidden");
        addTask(taskList, taskInput, startDateButton, listArr);
        taskInput.value = "";
    }
});
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (taskInput.value.length < 3)
            taskAlert.classList.remove("hidden");
        else {
            taskAlert.classList.add("hidden");
            addTask(taskList, taskInput, startDateButton, listArr);
            taskInput.value = "";
        }
    }
});

//search
search(searchBox, listArr);

//sort
sortDate(sortByDate, taskList, listArr);
sortName(sortByName, taskList, listArr);