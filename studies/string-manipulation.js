/**
 * STRING MANIPULATION:
 * 
 * Strings are groups of characters inside of quotes('') or double quotes("") that can be 
 * changed usings certain methods. Properties and elements of strings can be accessed using 
 * these manipulations. Elements within the string can be accessed, modified, or removed. 
 * Elements can also be replaced in the string.
 *  
 */

// 1. Changing string to an array using split() //
console.log("Hello World".split()); // prints => [ 'Hello World' ] puts string into an array
console.log("Hello World".split("")); // prints => [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ] breaks down each element of the string into elements of an array
console.log("Hello World".split(" ")); // prints => [ 'Hello', 'World' ] breaks string into two strings inside of an array

// 2. Find index character in string with search() or indexOf() // string method that finds the index of a requested string value within a given string
console.log("Hello World".search("o")); // prints => 4 which is the index number value of "o" in the given string
console.log("Hello World".indexOf("o")); // prints => 4 which is the index number value of "o" in the given string

// 3. String manipulation using toUpperCase() and toLowerCase() //
let greet = 'Hello World';
console.log(greet.toUpperCase()); // prints => HELLO WORLD
console.log(greet.toLowerCase()); // prints => hello world

// 4. Removing elements from a string using slice() //
console.log(greet.slice(2)); // prints => llo World the slice method returns a copy ofthe string and removes the first two elements in the copied string

// 5. Replacing elements from string with replace() //
console.log(greet.replace(/l/g, 'j')); // prints => Hejjo Worjd

// 6. Adding strings or elements (concatenation) to strings using + sign or concat() //
//String concatenation with + operator
console.log(greet + '!'); // prints => Hello World! the plus concatenates the string value in greet with the "!"
console.log("5" + 5); // prints => "55" the plus concatenates the "5" and num 5  to a string of "55" thus changing the numbrer five into a string
function greeting(str) { //function to concat strings using += 
  let newGreet = str += "!";
  return newGreet;
}
console.log(greeting(greet)); // prints => Hello World! the += keeps adding the "!" to the string value in greet
console.log(greeting(greeting(greet))); // prints => Hello World!! the += keeps adding another "!" to the string value in greet
console.log(greeting(greeting(greeting(greet)))); // prints => Hello World!!! the += keeps adding another "!" to the string value in greet

//String concatenation with .concat()
console.log(greet.concat("!")); // prints => Hello World! the concat() concatenates the string value in greet with the "!"




