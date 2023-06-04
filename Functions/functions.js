function Fisrt() {
    console.log("iam first function")
}
Fisrt(); //Calling back first function we should call function to get value
// it is normal function / Named Functions



var second = function () {
    console.log("Iam Second ");
}
second();
// Anonymous functions Used to evaluate the values and store in variables

var third = function (a, b) {
    console.log(a, b);
}
third(3, 5);
// Function with expression
// Its is similar to anonymous but contains parameters

function performOperation(operation, a, b) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

var result = performOperation(add, 3, 4);
console.log(result); // Higher order Functions



//   Arrow functions

var arrow = () => {
    console.log("Hello its Arrow function");
}
arrow();



//  IMEF functions
// Used to avoid name collisions using this we can have scope control
// local variables are not accessible outside function

var imef = (function () {
    console.log("Helli iam IMFE ");
})();


// Nested Function

function parent() {
    let a = 10;
    function child() {
        // let a=20000;
        let b = "Hello";
        console.log(a);
        function grand() {
            console.log(b);

        } return grand();

    } return child();
} return parent();




