//Create a function that will convert boolean value to its string representation 

function booleanToString(b){
  return b.toString();
}

//Write a function that takes an array of numbers and returns the sum of the numbers.
//The numbers can be negative or non-integer. 
//If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//Transform a number (integer) into a string.

function numberToString(num) {
  return num.toString();
}

//Your task is to make a function that can take any non-negative
//integer as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
