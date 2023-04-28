const numInput = document.getElementById("numInput");

numInput.addEventListener("keyup", function () {
  let num = parseInt(numInput.value);

  console.log(typeof num);
  console.log(num);
if (isNaN(num)) {
   document.getElementById("next").innerHTML="";
  // if value is NaN means empty after removing digit it will clear last remaining digits next three values
}    //end of if block    isNAN()

  if (num < 0) {
    window.alert("enter positive number");
    numInput.value = "";
    numInput.focus();
  } 
  else if (num > -1) {
    if (num % 2 == 0) {
      // even number block
      console.log("Even Number");
      var nextval = document.getElementById("next");
      nextval.innerHTML = `${Number(num + 2)}  ${num + 4} ${num + 6}`;
    } else {
      //  odd number block
      console.log("Odd Number");
      var nextval = document.getElementById("next");
      nextval.innerHTML = `${Number(num + 2)}  ${num + 4} ${num + 6}`;
    
    } 
  }  // end of else if block

else{
  nextval.value="";
  nextval.innerHTML="";
}
 
}); // end of event listener
