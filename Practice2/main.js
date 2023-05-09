//This JavaScript code defines a function named sumArray that takes in an array of numbers as its input and returns the sum of all the elements in the array,
//excluding the smallest and largest elements.
//Let's break down the code step by step:

// sumArray = (array) => {
// This line defines an arrow function named sumArray that takes in an array as its input.
//   if (Array.isArray(array) && array.length > 2 && array.every((a) => typeof a === 'number')) {
// This line checks if the input is a valid array by using three conditions:

// The Array.isArray() method checks if the input is an array.
// array.length > 2 checks if the array has at least three elements.
// array.every((a) => typeof a === 'number') checks if all elements in the array are numbers.
// If all conditions are true, the code inside the if block will be executed, otherwise the function will return 0.

//     array.sort((a, b) => a - b);
// This line sorts the input array in ascending order using the Array.sort() method.

//     array.shift();
// This line removes the first element in the array, which is now the smallest element since the array was sorted in ascending order.


//     array.pop();
// This line removes the last element in the array, which is now the largest element since the array was sorted in ascending order.


//     return array.reduce((a, b) =>  a + b);
// This line calculates the sum of the remaining elements in the array using the Array.reduce() method and returns the result.

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
