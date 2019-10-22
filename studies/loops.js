/**
 * 
 * LOOPS
 * 
 * 0. Loops are blocks of code that repeat through a set number of times(iterations).
 * 
 * 1. There are a few types of loops: for loops, for in loops, for of loops, and while loops.
 * 
 */

// 1. For loops //
for (let i = 0; i < 5; i++) { // condition statement includes start, stop, and incrementer.
    console.log(i);   // code block keeps repeating until stop statement is reached.
};

for (let i = 5; i > -1; i--) { // condition statement includes start, stop, and incrementer.
    console.log(i);   // code block keeps repeating until stop statement is reached.
};
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) { // condition statement includes start, stop, and incrementer.
    console.log(arr[i]);   // prints => all elements of arr in order
};

for (let i = arr.length-1; i > -1; i--) { // condition statement includes start, stop, and incrementer.
    console.log(arr[i]);   // prints => all elements of arr in reverse order
};


// 2. For-in loops //
let object = {x:1, y:2, z:3};
for (let key in object) { // the statement of key/value pairs of an object to loop through.
    console.log(object[key])  // prints value elements of obje}ct
};

// 3. For-of loops //
for (let key of arr) { // the statement of elements of an array to loop through.
    console.log(key);  // prints value elements of arr
};

// 4. While loops //
let num = 0;  // starting condition
while (num < 4) { // ending condition in ()
    console.log(num); // code block to run
    num++;  // incrementer
};

