/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
<<<<<<< HEAD
myVariable = "someString";

/** With the additons of ES6, const and let were introduced to be able to declare variables with 
 * block scope.
 */

// 4. initialization using let keyword //
let yourName = 'sam';
console.log(yourName); // prints => sam

// 5. re-assignment of let declared variable //
yourName = 'jim'; // yourName variable has been re-assigned to 'jim'.
console.log(yourName); // prints => jim

// 6. initialization using const keword //
const newVariable = true;
console.log(newVariable); // prints => true

// 7. re-assignment of const declared variable //
//newVariable = false;
console.log(newVariable); // this is not allowed and will throw a TypeError

/**
 * Hoisting is where variables or functions declared in your code are lifted to the top of
 * your code. Var variables will print undefined if console logged before initilization or 
 * assignment. Let and const variables will throw ReferenceError if console logged before 
 * initilization or assignment.
 */

// 8. Hoisting of variable set with var, let, and const //
console.log(x); // prints => undefined
var x = 1; 
console.log(x); // prints => 1

//console.log(y); // this will throw an ReferenceError and will not be hoisted
let y = 2;
console.log(y); // prints => 2

//console.log(z); // this will throw an ReferenceError and will not be hoisted
const z = 3;
console.log(z); // prints => 3
myVariable = "someString";
