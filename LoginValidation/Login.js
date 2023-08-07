var myinput = document.getElementById("pswd");
var letter = document.getElementById("letter");
var  upper = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var toggle=document.getElementById("passcheck")

myinput.onfocus = (function () {
    document.getElementById("message").style.display = "block";
})

myinput.onblur = (function () {
    document.getElementById("message").style.display = "none";
})

myinput.onkeyup = (function () {
    var lowerCaseLetters = /[a-z]/g;
    if (myinput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    var upperCaseLetters = /[A-Z]/g;
    if (myinput.value.match(upperCaseLetters)) {
        upper.classList.remove("invalid");
        upper.classList.add("valid");
    }
    else {
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    var numbersPat = /[0-9]/g;
    if (myinput.value.match(numbersPat)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (myinput.value.length>=8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
})

toggle.addEventListener("click",function(){
    if (myinput.type==="password") {
        myinput.type="text";
    } else {
        myinput.type="password"
    }
})