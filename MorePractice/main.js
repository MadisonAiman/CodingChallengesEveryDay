//Today's codewars is a review
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".


function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}




function areYouPlayingBanjo(name){
    //created a function describing what it will return
    const predicate = name[0].toLowerCase() === 'r' ? 'plays banjo' : 'does not play banjo'
    //we set a const for a variable called predicate
    //when we pass in name, it will grab the first character in the string (name[0])
    //we want to invoke the .toLowerCase() so that the 1st character in the string will always be lower case
    //we set it equal in type and value (===) so that if it is r, it returns 'plays banjo'
    //if not equal in type in value to r, we say to state 'does not play banjo'
    return name + predicate;
    //we return the name + predicate so that it reads "name play banjo/ name does not play banjo".
}

areYouPlayingBanjo(Rob) 
//call the function to pass in the name Rob which will return "Rob plays Banjo"
areYouPlayingBanjo(Sharon)
//call the function to pass in the name Sharon which will return "Sharon does not play Banjo"


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
