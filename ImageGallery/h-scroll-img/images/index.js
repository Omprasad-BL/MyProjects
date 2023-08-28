let scrollContainer=document.querySelector(".gallery")
let backbtn=document.getElementById('back-btn')
let nextbtn=document.getElementById('next-btn')

scrollContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY
    scrollContainer.style.scrollBehavior='auto'

})

nextbtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior='smooth'
    scrollContainer.scrollLeft+= 300;
})

backbtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior='smooth'
    scrollContainer.scrollLeft-= 300;
})