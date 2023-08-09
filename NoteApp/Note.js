const notesContainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
// function showNotes(){
//     notesContainer.innerHTML=localStorage.getItem("notes");
// }
// function showNotes()

function updateStorage() {
    console.log(notesContainer.innerHTML);
    localStorage.setItem("notes", notesContainer.innerHTML);
    console.log(localStorage.getItem("notes"));
}

createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})


notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove()
        updateStorage()
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt =>
            nt.onkeyup = ()=> {
                updateStorage()
            })
    }
})

document.addEventListener("keydown",event=>{
    if (event.key==="Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault(); 
    }
})

