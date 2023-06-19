// Take a string and convert it to upper case: 

function makeUpperCase(str) {
  //here we have the function and pass in the parameter, which is a string
  let upperCaseStr = str.toUpperCase();
  //We want to convert the string no matter what it is so upper case
  //So, we set the variable upperCaseStr equal to the str and the method of toUpperCase()
  return upperCaseStr;
  //lastly we return the function upperCaseStr
}
//Parameters: only a str will be passed in, and it will only be returned as only upper case
//Return: only upper case of the string
//Examples: pass in "word": WORD
//Pass in "ChIcKEn": CHICKEN
//P code: we know that we need to use a method in order to get the string in all caps
//we know that we need a variable of the string to be equal to the method + string
//We can try to do something like let Rhino = str.toUpperCase();
/**
 * Class SmallestIntegerFinder: Represents a utility class for finding the smallest integer in an array.
 */
class SmallestIntegerFinder {
  /**
   * findSmallestInt(args): Finds the smallest integer in the given array of integers.
   *
   * @param {number[]} args - An array of integers.
   * @returns {number} - The smallest integer in the array.
   */
  findSmallestInt(args) {
    // Initialize the variable 'smallest' with the first element of the array
    let smallest = args[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < args.length; i++) {
      // Check if the current element is smaller than the current smallest value
      if (args[i] < smallest) {
        // Update the 'smallest' value if a smaller element is found
        smallest = args[i];
      }
    }

    // Return the smallest integer found in the array
    return smallest;
  }
}

//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Examples:
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

const solution = (str, ending) => str.endsWith(ending);
const solution = (str, ending) str.endsWith(ending)

//parameters: take in a string, take in an ending 
//return true if the string and ending have overlap
//return false: if the string and ending have no overlap
//example: see above
//code: endWith is a method that will grab what the string ends with
//code: if you treat the string as an array, you can 
//1. chop off or isolate the ending
//2. look at the ending
//3. compare the ending to the str
//4. return true if overlap; return false is there is no overlap

//This treats the solution as an immovable object. It cannot be changed because it is constant.
//when you pass in the string and the ending, using the .endsWith method will compare the ending of the string with what is passed in as the ending.
//or
function solution(str, ending){
  return str.substr(-ending.length) == ending;
}

//You're going to pass in a string and the ending. The function will return the string by subtracting the ending. It will minus the ending from the string
//and compare it to the ending. Two equal signs means it must be loosely equal in type. 

// = equal in value 
// == equal in type 
// === equal in value and type
