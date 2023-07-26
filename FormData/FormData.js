
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form elements by their IDs
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const ageInput = document.getElementById("age");

  // Get the values from the form inputs
  const name = nameInput.value;
  const email = emailInput.value;
  const age = parseInt(ageInput.value); // Parse the age as an integer

  // Create a JavaScript object to store the form data
  const formData = {
    name: name,
    email: email,
    age: age
  };
//  var arr=[formData];  use full to store all values
//  console.log(arr);
  // Display the form data on the page
  const outputElement = document.getElementById("output");
  outputElement.textContent = JSON.stringify(formData);

  // You can do further processing or send the data to a server if needed

  // Optional: Clear the form after submission
  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
}

// Add a submit event listener to the form
const form = document.getElementById("dataForm");
form.addEventListener("submit", handleSubmit);
