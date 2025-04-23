export default function checkTask(titleDiv, title, startDate) {
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
}