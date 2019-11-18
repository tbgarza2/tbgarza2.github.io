/**
 * DATA TYPES:
 * 
 * 0. Data that is store in variables can be primitive or complex. Primitive data types are 
 * simple and immutable in that they do not house or collect other values and they can only  
 * be copied by value not reference. Complex data types are collections of other values, can 
 * be infinitely large and can be copied by reference.
 * 
 */

// 1. Primitive Data Types // 
// Primitive Data Types can be accessed by assigning to a variable or typing data when needed

// a. Number //
// any number value, if number 1 is needed, type 1 wherever 1 is required or assign 1 to a variable
- Number;  1, 3, 500, 7.01; let num = 1;

// b. String //
// any characters typed between single quotes ('') or double quotes("").
 let string = "hi"; let otherString = '73#$'; 

// c. Boolean //
// true or false 
- Boolean; true; false; 

// d. Undefined //
// a value that is not defined, stuff console logged will be undefined
- undefined; var stuff; console.log(stuff); 

// e. Null //
// no value at all, console logged x will be null
- null; let x = null; 

// f. NaN //
// number type that is "not a number", console logged y will be NaN
- NaN; let y = NaN; 

// g. Infinity //
// number value of infinity, stuff console logged will be a value of Infinity
- Infinity; stuff = Infinity; 

// h. Negative Infinity //
// number value of negative infinity, stuff console logged will be a value of -Infinity
- -Infinity; stuff = -Infinity; 

// 2. Complex Data Types // 
/**
 * high level lists of data that can contain primitve and complex data
 * Can be accessed by assigning to a variable or typing data when needed
 */ 

// a. Array //
// A collection of values that have an indexed order
 [1, "2", true, {one: 1}, function hey(){ console.log("hey")}]; 
 
// b. Object //
// a container of key/value(primitive or complex data) pairs of data
 {one: 1} 
 
 // c. Function //
// a sub program that performs a task when invoked
 function so(){ console.log("so")}

// 3. Copy by Value // 
/**
 * Primitive Data Types take up very small amounts of memory.
 * primitive data types are copied to varialbles with = sign
 * Different variables can be assigned the same data type of another variable with = sign
 */ 
 
let greet = "hello"; // primitive data assigned to varialbe
let holla = greet; // "hello" copied to variable holla from greet 
console.log(greet); // prints => 'hello' 
console.log(holla);  // prints => 'hello' copied value into variable holla

// 4. Copy by Reference // 
/**
 * Complex Data Types take up far more memory than primitive.
 * Complex data types are copied by reference with the = sign
 */
 
let arr = [1, "2", true, [3, false], {x:8}]; // complex data assigned to varialbe
let newArr = arr; // the array arr has been copied to newArr
console.log(newArr[3]); // the nested array in arr can be accessed by referencing 4th element
// newArr does not house the array in memory, but has the refencing to access elements in arr


