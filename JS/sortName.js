export default function sortName(sortByName, taskList, listArr) {
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
}