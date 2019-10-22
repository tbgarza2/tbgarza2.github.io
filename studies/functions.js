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
 
// 1. Declaration of a Function //
//In order to declare a named function, the function key word needs to be followed by functon name and parameters.
function add(a, b) { 
    return a + b;   // Code block of the function
};
 
// 2. Invocation of a Function //
// In order to invoke or call the function type the name of function with added arguments.
add(2, 3) // returns 5
console.log(add(2,3)); // prints => 5
 
// 3. Assigning a Function //
// Functions can be assigned using var, let, or const
 let adder = function (a, b) { 
    return a + b;   // Code block of the function
};
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



