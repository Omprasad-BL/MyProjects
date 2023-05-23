

var inputval= document.getElementById('myinput');
var place=document.getElementById('demo');

inputval.addEventListener("keypress",(event)=>{
   let val=0;
   val++;
 console.log(val);

})
var inputval1=document.getElementById('myinput1');
inputval1.addEventListener("keydown",(event)=>{
    if (event.code=='Enter') {
        console.log("enter key pressed");
       document.body.style.background= inputval1.value;
    }
    
  
  })
var inputval2=document.getElementById('myinput2');
  inputval2.addEventListener("keyup",()=>{
    let val=0;
    val++;
  console.log(val);
  
  })