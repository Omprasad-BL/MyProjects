// Function to check if a given string contains balanced brackets
const isValid = (str) => {
    // Remove all whitespace characters from the input string
    let s = str.replace(/\s+/g, ''); // Note: Corrected the assignment operator from '=' to '=='.
    
    // If the length of the string is odd, it cannot have balanced brackets
    if (s.length % 2 !== 0) {
        return false;
    }
    
    // Initialize an empty stack to track opening brackets
    const stack = [];
    
    // Define a map of opening and closing brackets
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'] // Added support for square brackets
    ]);
    
    // Iterate through each character in the string
    for (let i = 0; i < s.length; i += 1) {
        if (map.has(s[i])) {
            // If the character is an opening bracket, push its corresponding closing bracket to the stack
            stack.push(map.get(s[i]));
        } else if (s[i] !== stack.pop()) {
            // If the character is not an opening bracket or it doesn't match the expected closing bracket, return false
            return false;
        }
    }

    // If the stack is empty at the end, all brackets are balanced
    return stack.length === 0;
}

// Test cases
let str1 = "{(){}}{}";
let str2 = "{";

// Check if the strings contain balanced brackets and display the results
console.log(isValid(str1)); // Should output: true
console.log(isValid(str2)); // Should output: false
