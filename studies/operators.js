/**
 * OPERATORS
 * 
 * 0. Characters that act on data. Operators are classified by function and number of 
 * arguments required. 
 *
 * 1. There are several different types of operators: assignment, arithmetic, comparison, 
 * logical, unary, and ternary.
 * 
 */

// 1. Assignment Operator //
- '=' // used to assign values to variables
var pet = "dog"; // the equal sign(=) is assigning the string('dog') to the variable(pet)

// 2. Arithmetic Operators //
- '+' // adds strings and numbers together
1 + 1 // would evaluate to 2
'1' + '1'// evaluates to '11'

- '-' // subtracts numbers from each other
1 + 1 // evaluates to 0

- '*' // multiplies numbers together
2 * 2 // evaluates to 4

- '/' // divides numbers from each other
2 / 2 // evaluates to 1

- '%' // returns the remainder of one number divided by another
3 % 2 // evalueates to 1

// 3. Comparison (Binary) Operators //

< // less than
1 < 2 // evaluates to true
2 < 1 // evaluates to false

<= //less than or equal to
1 <= 2 // evaluates to true
2 <= 1 // evaluates to false

> // greater than
1 > 2 // evaluates to false
2 > 1 // evaluates to true

>= //greater than or equal to
1 >= 2 // evaluates to false
2 >= 1 // evaluates to true

!== // not equal to
1 !== 2 // evaluates to true
1 !== '1' // evaluates to true
2 !== 2 // evaluates to false

=== // equal to
1 === 2 // evaluates to false
1 === '1' // evaluates to false
2 === 2 // evaluates to true

// 4. Logical Operators //
'&&' // And Operator - both statements must be true
true && true // evaluates to true
true && false // evaluates to false

'||' // Or Operator - at least one statement must be true
true || false // evaluates to true

'!' // Bang Operator - acts like stating "is not", flips true to false and vice versa
!true // evaluates to false
!false // evaluates to true

// 5. Unary Operators //
- typeof // Type Of Operator give what data type the element is
typeof 1 // evaluates to number

- '+' // Unary Plus Operator - converts non-numbers to numbers
+"5" // evaluates to the number 5

- '-' // Unary Negation Operator - converts non-numbers to negative numbers
-"5" // evaluates to the number -5

let i = 0;
- '++' // Increment Operator
i++ // increases by 1

- '--' // Decrement Operator 
i-- // decreases by 1

- '!' // Bang Operator - acts like stating "is not", flips true to false and vice versa
!true // evaluates to false
!false // evaluates to true

// 6. Ternary Operator //
- '?' //Ternary Operator shortens an if statement to one line
if (true) {
    return true;
} return false;

(true) ? true : false //equivalent to above if statement


