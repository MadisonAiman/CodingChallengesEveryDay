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
