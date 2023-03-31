//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
function makeNegative(num){
 return num > 0 ? num * -1 : num;
  }

//makeNegative(1);    // return -1
//makeNegative(-5);   // return -5
//makeNegative(0);    // return 0
//makeNegative(0.12); // return -0.12




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
