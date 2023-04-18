const old_donate_date = document.querySelector(".old_donate_date").style;
old_donate_date.display ="none";

const a = document.querySelector('input[value="yes"]');
a.addEventListener("click", () => {
    old_donate_date.display="block"
})

const b = document.querySelector('input[value="no"]');
b.addEventListener("click", () => {
    old_donate_date.display="none"

})

