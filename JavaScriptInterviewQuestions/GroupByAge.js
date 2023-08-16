// Given array of person objects, each containing name, age, and father properties
let people = [
    { name: "omprasad B L", age: 22, father: "Lokeshappa" },
    { name: "AdarshKumar B L", age: 25, father: "Lokeshappa B" },
    { name: "Lokeshapp B", age: 58, father: "Erappa" },
    { name: "Ram", age: 22, father: "Dasharatha" },
  ];
  
  // Function to group people based on their age
  function group(array) {
    // Initialize an empty object to store groups of people
    let list = {};
    
    // Iterate through each person object in the array
    array.forEach((person) => {
      // Check if the age of the person is not already a key in the 'list' object
      if (!list[person.age]) {
        // If the age is not a key, create a new array with the person and assign it to the age key
        list[person.age] = [person];
      } else {
        // If the age is already a key, push the person into the existing age group array
        list[person.age].push(person);
      }
    });
    
    // Return the object containing age-based groups of people
    return list;
  }
  
  // Display the result of grouping people by age
  console.log(group(people));
  