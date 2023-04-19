const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    //converting from normal integer to hexacode using to string method
    // and 000000 is black and 16777216 is heighest value from dark to white it equal to 0xFFFFF

    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    //to diplay hexa value we are concatinating # with random number
  }
  
  genNew.addEventListener("click", setBg);
  setBg(); // callback of function