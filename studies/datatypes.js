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
- Number;  1, 3, 500, 7.01; // any number value
- String; "hi"; '73#$'; // any characters typed between single quotes ('') or double quotes("").
- Boolean; true; false;// true or false 
- undefined; // a value that is not defined
- null; // no value at all 
- NaN; // number type that is "not a number"
- Infinity; // number value of infinity
- -Infinity; // number value of negative infinity

// 2. Complex Data Types //
- Array; [1, "2", true, {one: 1}, function so(){ console.log("so")}];// high level lists of data that can contain primitve and complex data
- Object; {one: 1}// a container of key/value(primitive or complex data) pairs of data
- Function; function so(){ console.log("so")}// a sub program that performs a task when invoked

// 3. Copy by Value // primitive data types are copied to varialbles with = sign
// Different variables can be assigned the same data type of another variable with = sign
let greet = "hello"; // primitive data assigned to varialbe
let holla = greet; // "hello" copied to variable holla from greet 
console.log(greet); // prints => 'hello' 
console.log(holla);  // prints => 'hello' copied value into variable holla

// 4. Copy by Reference // complex data types are copied by reference with the = sign
let arr = [1, "2", true, [3, false], {x:8}]; // complex data assigned to varialbe
let newArr = arr; // the array arr has been copied to newArr
console.log(newArr[3]); // the nested array in arr can be accessed by referencing 4th element
// newArr does not house the array in memory, but has the refencing to access elements in arr


