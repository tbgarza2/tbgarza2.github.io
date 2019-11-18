/**
 * 
 * CONTROL-FLOW
 * 
 * 0. Control Flow statements are ordered statements that the computer follows in a script. 
 * 
 * 1. Examples of control flow statements are if statements, else statements, if-else statements,
 * and switch statements.
 * 
 */

// 1. If Statement // The if statement tests if a condition evaluates truthy.
// If the condition evaluates to truthy, then the associated code block will run.

if (true) { // condition statement in ()
    console.log(true); // code block that will run if condition statement is met
}

// 2. Else Statement // 
/**
 * The else statement runs a code block if all other previous conditional stateemtn are not truthy.
 * If none of the above conditional statements evaluate truthy, the else code block will run.
 * If statements are best used when an expression gives a truthy value.
 */ 

if (true) { // condition statement in ()
    console.log(true); // code block that will run if condition statement is met
} else {
    console.log(false); // code block that runs if condition statement is not met
}

// 3. Else-If Statement //
/**
 * The else-if statement tests if another condtion evaluates truthy.
 * If the first condition evaluates falsy but the else-if evaluates truty, the else-if code block will run.
 */ 

let x = 1;
if ( x === 1) { // condition statement 1 in ()
    console.log(true); // code block that will run if condition statement 1 is met
} else if (x === 2) { // condition statement 2 in ()
    console.log(1); // code block that will run if condition statement 2 is met
} else {
    console.log(false); // code block that runs if both condition statements are not met
}

// 4. Switch Statement //
/**The swithch statement tests to see if an expression meets any of the cases within the switch statement.
 * Cases are similar to if statements. They are compared to the given expression. 
 * If the expression meet one of the cases, that case's code block will run.
 * In switch statements, break follows a code block of a case and makes the code stop a specified case matches the expression.
 * Break prevents the code from continuing, similar to code blocks in if statements.
 * If the expression meets none of the cases, the defalult code block will run (similar to else statement).
 * It is better to use a swithch statement if you are comparing multiple cases for a given expression. 
 * Example: var x could be a value between 0 and 9, so switch can have nine or more cases.
 */

switch (x) {
    case 1: // expression being compared to case 1
        console.log('Good'); // code block run if case 1 met
    break;
    case 2: // expression being compared to case 2
        console.log('Bad'); // code block run if case 2 met
    break;
    default: // default case if other cases are not met
        console.log('Unknown'); // code block run if none of the cases have been met
    break;
}



