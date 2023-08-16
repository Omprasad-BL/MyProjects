// Given array of strings
let arr = ["omi", "omi", "ram", "ram", "ram", "ram", "bhim", "sham"];

// Function to calculate frequency of elements in an array
function frequency(arr) {
    // Initialize an empty object to store the frequency of elements
    const result = arr.reduce((AllElement, element) => {
        // Check if the element is already a property in the AllElement object
        if (element in AllElement) {
            // Increment the count of the element if it already exists
            AllElement[element]++;
        } else {
            // Add the element as a property with count 1 if it doesn't exist
            AllElement[element] = 1;
        }
        // Return the modified AllElement object for the next iteration
        return AllElement;
    }, {});

    // Return the final object containing element frequencies
    return result;
}

// Display the frequency of elements in the array
console.log(frequency(arr));
