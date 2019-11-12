/**
 * 
 * FUNCTIONS
 * 
 * 0. Functions are subcodes in a program that when invoked return a value and can 
 * take values as inputs or from parent scope.
 * 
 * 1. Functions must be declared like variables and invoked or called upon in order to run.
 *
 * 2. Parameters are elements that a function requests in order to run.
 * 
 * 3. Arguments are elements that are passed to a function when it is invoked.
 * 
 * 4. Also, like variables, functions can be assigned and hoisted. Functions can be invoked 
 * before being declared and will work. 
 * 
 */
 
// 1. Declaration of a Function // Can be Hoisted
//In order to declare a named function, the function key word needs to be followed by functon name and parameters.
console.log(add(1, 2)); // prints => 3 declared function can be Hoisted
function add(a, b) { 
    return a + b;   // Code block of the function
}
console.log(add(1, 2)); //prints => 3
 
// 2. Invocation of a Function //
// In order to invoke or call the function type the name of function with added arguments.
add(2, 3); // returns 5
console.log(add(2,3)); // prints => 5
 
// 3. Function Expression - Assigning a Function to Variable // Cannot be Hoisted
// Functions can be assigned using var, let, or const
//console.log(adder(1, 2)); // will throw a Reference Error => not Hoisted
 let adder = function (a, b) { 
    return a + b;   // Code block of the function
};
console.log(adder(1, 2)); // prints => 3
// Or a called function can be stored as a variable
let plus = add(2, 3);

// 4. Function Scope //
let greet = "Hello"; // Global scope variable greet

function greetings(name) {
    let friendly = "It's good to make new fiends." // function scope variable friendly
    greet = "Yo" //reassigning global variable greet
    return greet + ", " + name + "! " + friendly; // using global and function scope variables
};

console.log(greet); // prints=> Hello  (function not invoked)
console.log(greetings("Jimmy")); // prints => Yo, Jimmy! It's good to make new fiends.
console.log(greet); // prints=> Yo (function invoked)
 
// 5. Closures //
function addSum(num) { // function to invoke
    let sum = 3;
   return function adding(val) { // nested function that is returned
       return num + sum + val;
    } ;
};

let addTwo = addSum(2); // Closure - variable that is created and kept in function
console.log(addTwo(4)); // prints => 9  
console.log(addTwo(3)); // prints => 8 
 
let addFive = addSum(5); // Closure - variable that is created and kept in function
console.log(addFive(4)); // prints => 12 
console.log(addFive(3)); // prints => 11 


// 6. Taking arguments and returning values // Functions can take in arguments outlined as paramerter when declared or expressed
// Function can alos return values either based on arguments taken or not.

function sayYo(){ // no parameters are requested
    console.log("Yo"); // side effect of console logging
} // since no return statement with return value, function call returns undefined
console.log(sayYo()); // prints => Yo and returns undefined
console.log(sayYo(10)); // prints => Yo and returns undefined, the argument in parentheses is ignored since no parameters are requested

function concatWords(word1, word2){ // two parameters requested
    return word1 + " " + word2; // function will return a concatenated string of two strings combined
}
console.log(concatWords("Hi", "there!")); // prints => Hi there! The two argument strings are concatenated
console.log(concatWords("Hi", "there!", "Johnny")); // prints => Hi there! The two argument strings are concatenated
// The third argument is ignored since the function only requests two parameters.
