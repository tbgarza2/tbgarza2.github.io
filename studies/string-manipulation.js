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
console.log("Hello World".split()); // prints => [ 'Hello World' ]
console.log("Hello World".split("")) // prints => [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]
console.log("Hello World".split(" ")) // prints => [ 'Hello', 'World' ]

// 2. Index character in string with bracket notation //
console.log("Hello World"[4]); // prints => o

// 3. String manipulation using toUpperCase() and toLowerCase() //
let greet = 'Hello World';
console.log(greet.toUpperCase()); // prints => HELLO WORLD
console.log(greet.toLowerCase()); // prints => hello world

// 4. Removing elements from a string using slice() //
console.log(greet.slice(2)); // prints => llo World

// 5. Replacing elements from string with replace() //
console.log(greet.replace(/l/g, 'j')); // prints => Hejjo Worjd

// 6. Adding strings or elements to strings using + sign or concat() //
console.log(greet + '!'); // prints => Hello World!
console.log(greet.concat("!")); // prints => Hello World!

function greeting(str) { //function to concat strings using += 
  let newGreet = str += "!";
  return newGreet;
}
console.log(greeting(greet)); // prints => Hello World!
console.log(greeting(greeting(greet))); // prints => Hello World!!
console.log(greeting(greeting(greeting(greet)))); // prints => Hello World!!!

