
 document.getElementById("one").addEventListener("click",
function(event){
    console.log("original data");
    console.log("target" , event.target.tagName);
    console.log("current target", event.currentTarget.id);
    alert("child")

}
 )

 document.getElementById("two").addEventListener("click",
 function(event){
     console.log("original data");
     console.log("target" , event.target.tagName);
     console.log("current target", event.currentTarget.id);
     alert("child")
 
 }
  )

 document.getElementById("root").addEventListener("click",
 function(event){
     console.log("original data");
     console.log("target" , event.target.tagName);
     console.log("current target", event.currentTarget.className);
    alert("parent")
 }
  )