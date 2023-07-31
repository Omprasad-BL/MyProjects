let ball=document.querySelector("#ball");

window.addEventListener("mousemove",function(event) {
    let x= event.clientX;
    let y=event.clientY;
    ball.style.left=x-10+'px';
    ball.style.top=y -10+'px';
})

let cursor = document.querySelector('.ball');

window.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});