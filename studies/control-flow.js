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

// 1. If Statement //

if (true) { // condition statement in ()
    return true // code block that will run if condition statement is met
};

// 2. Else Statement //
if (true) { // condition statement in ()
    return true // code block that will run if condition statement is met
} else {
    return false // code block that runs if condition statement is not met
};

// 3. Else-If Statement //
let x = 1;
if ( x === 1) { // condition statement 1 in ()
    return true // code block that will run if condition statement 1 is met
} else if (x === 2) { // condition statement 2 in ()
    return 1 // code block that will run if condition statement 2 is met
} else {
    return false // code block that runs if both condition statements are not met
};

// 4. Switch Statement //
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
};
