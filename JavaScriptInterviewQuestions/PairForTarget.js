// Given array of numbers and a target sum
let arr = [1, 2, 3, 5, 6, 4];
let target = 9;

// Function to find pairs of numbers in the array that sum up to the target
function twoSum(ar, target) {
    let hash = {}; // Create an empty hash map to store seen numbers and their indices
    let sum = []; // Create an empty array to store pairs of numbers that sum up to the target

    // Iterate through each number in the array
    ar.forEach(item => {
        let diff = target - item; // Calculate the difference needed to reach the target
        if (hash[diff.toString()] !== undefined) {
            // If the difference is present in the hash map, it means a pair is found
            sum.push([diff, item]); // Add the pair to the 'sum' array
        }
        hash[item.toString()] = item; // Store the current number in the hash map
    });

    return sum; // Return the array containing pairs of numbers that sum up to the target
}

// Call the 'twoSum' function with the given array and target, and display the result
console.log(twoSum(arr, target)); // Should output: [ [ 3, 6 ], [ 4, 5 ] ]
