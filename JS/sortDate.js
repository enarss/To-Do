export default function sortDate(sortByDate, taskList, listArr) {
    sortByDate.addEventListener("click", () => {
        taskList.innerHTML = "";
        listArr.sort((a, b) => {
            const aDate = a.element.querySelector(".start__date").innerText;
            const bDate = b.element.querySelector(".start__date").innerText;
            return (new persianDate(aDate) - new persianDate(bDate));
        });
        listArr.forEach(item => {
            taskList.appendChild(item.element);
        });
    });
}