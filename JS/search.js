export default function search(searchBox, listArr) {
    searchBox.addEventListener("input", (e) => {
        const searchText = e.target.value;
        console.log(searchBox);
        listArr.forEach((item) => {
            const itemText = item.element.querySelector(".task__title").innerText;
            console.log(itemText);
            if (itemText.includes(searchText)) item.element.classList.remove("hidden");
            else item.element.classList.add("hidden");
        });
    });
}