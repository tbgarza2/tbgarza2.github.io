/**
 * STRING MANIPULATION:
 * 
 * Strings are groups of characters inside of quotes('') or double quotes("") that can be 
 * changed usings certain methods. Properties and elements of strings can be accessed using 
 * these manipulations. Elements within the string can be accessed, modified, or removed. 
 * Elements can also be replaced in the string.
 *  
 */

// 1. Determine length of string //
console.log("Hello World".length); // prints => 11

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

// 5. Adding strings or elements to strings //
console.log(greet + '!'); // prints => Hello World!
console.log(greet.concat("!")); // prints => Hello World!


