//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.


//Mind the input validation.
//Example

//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6

sumArray = (array) => {
  if (Array.isArray(array) && array.length > 2 && array.every((a) => typeof a === 'number')) {
    array.sort((a, b) => a - b);
    array.shift();
    array.pop();
    return array.reduce((a, b) =>  a + b);
  } else {
    return 0;
  }
}

//This JavaScript code defines a function named sumArray that takes in an array of numbers as its input and returns the sum of all the elements in the array, excluding the smallest and largest elements.

// Let's break down the code step by step:

// javascript
// Copy code
// sumArray = (array) => {
// This line defines an arrow function named sumArray that takes in an array as its input.

// javascript
// Copy code
//   if (Array.isArray(array) && array.length > 2 && array.every((a) => typeof a === 'number')) {
// This line checks if the input is a valid array by using three conditions:

// The Array.isArray() method checks if the input is an array.
// array.length > 2 checks if the array has at least three elements.
// array.every((a) => typeof a === 'number') checks if all elements in the array are numbers.
// If all conditions are true, the code inside the if block will be executed, otherwise the function will return 0.

// css
// Copy code
//     array.sort((a, b) => a - b);
// This line sorts the input array in ascending order using the Array.sort() method.

//     array.shift();
// This line removes the first element in the array, which is now the smallest element since the array was sorted in ascending order.


//     array.pop();
// This line removes the last element in the array, which is now the largest element since the array was sorted in ascending order.


//     return array.reduce((a, b) =>  a + b);
// This line calculates the sum of the remaining elements in the array using the Array.reduce() method and returns the result.

// kotlin
// Copy code
//   } else {
//     return 0;
//   }
// This line returns 0 if the input array is not valid.

// Overall, the sumArray function takes in an array of numbers, checks if it's a valid input, sorts the array in ascending order, removes the smallest and largest elements, and returns the sum of the remaining elements.

//or this is an additional solution

// function sumArray(array) {
//   if (array == null) {
//     return 0;
//   } else if (array.length < 2) {
//     return 0;
//   } else {
//     array = array.sort(function(a,b) {return a - b;});
//     var total = 0;
//     for (var i = 1; i < array.length - 1; i++) {
//       total += array[i];
//     }

//use a loop for this array
//     return total;
//   }
// }

//Your goal is to create a function that removes the first and last characters of a string. 
//You're given one parameter, the original string.
//You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

//or

function removeChar(str){
 //You got this!
  str1 = str.split('');
  str1.shift();
  str1.pop();
  return str1.join('');
    
};

//Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
function cockroachSpeed(s) {
  //multiply km/m by 27.7777777778
  return Math.floor(s*27.7777777778);
}

//Double the integer 

function doubleInt(i){
 i = i* 2
  return i
}

// create a function which returns an RNA sequence from the given DNA sequence

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U"); 
}
  //"GCAT"  =>  "GCAU"//
//You must use the backslashes to stipulate a global replace of T in the string, which is why the g bounds the backslash 


// create a function which returns an RNA sequence from the given DNA sequence

//Complete the solution so that it reverses the string passed into it. 

//'cat' => 'tac'
//'candle' => 'eldnac'

function solution(str){
    return str.split("").reverse().join("");
}

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

function squareSum(numbers){
    return numbers.reduce((acc,curr)=> acc + curr * curr, 0)
} 



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
