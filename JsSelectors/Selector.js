let a=document;
console.log(a);

let title=document.title;
console.log(title);

let head=document.head;
console.log(head);
//  Returns object of head tag which contains all childs inside head tag

// Change title
let change= document.head="hello world";
console.log(change);

let url=document.URL;
console.log(url);
// Returns url of the document

var id=document.getElementById("demo");
id.innerHTML="Modified text of ID tag"
id.style.color="red";
// hello here we are targetting IDs then we have one rule here that is only one content selects from id and that also first tag/ NODE
console.log(id);

// Difference between innerText and innterHTML

id.innerHTML="inner HTML";  // returns text inside TAG
id.innerText="inner Text"    // returns text inside Selector

// CLASS selector

 var class1= document.getElementsByClassName("demo");
 console.log(class1);
//   Class return all same name classes as array
 console.log(typeof(class1));

class1[0].style.color="yellow";
class1[1].innerHTML="changed inner html";
class1[2].style.backgroundColor="green";


// Tag name area


var tname=document.getElementsByTagName("section");
console.log(tname);
console.log(typeof(tname));
// Here we are selecting Tag name and tag stores elements in object form 
//  and we can access all objects [tags] using array index
tname[1].style.color="orange";



// Query Selector
  var qr=document.querySelector(".dem");
  console.log(qr + "   object value");
  console.log(typeof(qr));
  qr.style.color="red";
//   Here it works like id 
//  and only Targets 1st query matched object/Tag


// Query Selector all

var qa=document.querySelectorAll(".demo6");
console.log(qa);
// It returns values as Nodes remember not as Object
// so We can access nodes Through index i js
console.log(typeof(qa));

qa[2].style.color="red";













