var inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("Enter Your Work")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    // Call to save locally
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
            // Call to save locally
        saveData()

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
            // Call to save locally
        saveData()
    }

}, false)


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);

}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList()