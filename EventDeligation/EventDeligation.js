

var buttons=document.querySelectorAll("button");
buttons.forEach((button)=>{
   button.addEventListener("click",(event)=>{
   console.log(event.target.innerText);
   })
})