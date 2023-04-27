const numInput = document.getElementById("numInput");

numInput.addEventListener("keyup", function () {
  let num = parseInt(numInput.value);
  console.log(typeof num);
  console.log(num);

  if (num < 0) {
    window.alert("enter positive number");
    numInput.value = "";
    numInput.focus();
  } 
  else if (num > 0) {
    if (num % 2 == 0) {
      console.log("Positive");
      //   if (num%2!=0) {
      // var count=3;
      // while (count!=0) {

      var nextval = document.getElementById("next");
      nextval.innerHTML = `${Number(num + 2)}  ${num + 4} ${num + 6}`;
      //     }
      //   }
    } else {
      console.log("Negetive");
      var nextval = document.getElementById("next");
      nextval.innerHTML = `${Number(num + 2)}  ${num + 4} ${num + 6}`;
    }
  }
  else if(num==NaN){
  nextval.innerHTML="";
  }
});
