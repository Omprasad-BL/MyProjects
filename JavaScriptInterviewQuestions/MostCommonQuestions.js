// Reverse a String:

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
//   Check for Palindrome:

  function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }

//   Find the Largest Number:
  function findLargest(arr) {
    return Math.max(...arr);
  }
  

//   Factorial of a Number:
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
//   Fibonacci Series:
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  


//   Check Prime Number:

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
//   Count Words in a String:

  function countWords(str) {
    return str.split(/\s+/).filter(word => word !== '').length;
  }
  
//   Remove Duplicates from an Array:
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
//   Check Anagram:
  function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
  }
  

  