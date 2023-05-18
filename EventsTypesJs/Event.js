
// Inline Function it calls function using html callback

// Inline Event Handlers: You can directly define an event handler function inline within an HTML element's attribute.
function one() {
    var one=document.getElementById('one').style.background="yellow";
}
    

// DOM Level 0 Event Handlers: You can assign a function to an event handler property of a DOM element. 
var two=document.getElementById('two');
    two.onclick=function(){
        document.body.style.backgroundColor="red";
    }
 // addEventListener Method: You can use the addEventListener method to attach an event listener to an element. This method allows you to add multiple event handlers to the same element
 var three=document.getElementById('three');
 three.addEventListener('click',function() {
    console.log("clicked third button ");
 })

//  Event Attribute: You can define an event handler using the on[event] attribute on an HTML element.
var four=document.getElementById('four').ondblclick=function(){
    alert("four");
}

// Event Delegation: Rather than attaching event handlers to individual elements, you can use event delegation to handle events on parent elements and capture events from their child elements. This can be useful when dynamically adding or removing elements

var five=document.getElementById('five');
five.addEventListener('click',function(event){
    if(event.target.matches('button')){
        alert("click");
    }
})