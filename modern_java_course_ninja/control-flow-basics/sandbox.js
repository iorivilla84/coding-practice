/*----------- FOR LOOPS -----------------*/
// let i = it is an initialization variable (it is a counter to tell what position starts through the loop)
// i < 5 = it is a condition (this will evaluate if condition is true or false)
// Final expression (it will execute at the end of the code every time it cycle)
for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
};

console.log('loop finished');


const names = ['Jessica', 'Diego', 'Benji'];

for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
    let html = `
        <div>
            <h1>${names[i]}</h1>
        </div>
    `
    console.log(html);
};

/*----------- WHILE LOOP -----------------*/
// let i = 0;

// while (i < 5) {
//     console.log('in loop: ', i);
//     i++;
// }

const allNames = ['Diego', 'Jessica', 'Benji'];
let i = 0; // we need this as an initialization variable
while (i < allNames.length) {
    console.log(allNames[i]);
    i++;
};

/*----------- Do WHILE LOOP -----------------*/
/* we run the (do while) when the condition regardless is true or false but we want it to run
 at least once */
let v = 5; // we add value to the variable

do { // we run (do while to check the condition and run it only once)
    console.log('de valor de "v" es ', v);
    v++;
} while (v < 5);

/*----------- IF AND ELSE STATEMENTS -----------------*/
let overalAge = 38;

if (overalAge < 30) {
    console.log("you are too old");
} else {
    console.log("you are almost there");
};

const theVFamily = ['Diego', 'Jessica', 'Benji'];

if (theVFamily.length < 3) {
    console.log("perfect number");
} else {
    console.log("not enough");
};

const persPass = 'VFamJSBen2022';
let minLetters = 12;

if (persPass.length >= 12) {
    console.log('congrats your password is strong');
} else if (persPass.length >= 8) {
    console.log('that password is long enough');
} else {
    console.log(`please use at least ${minLetters} letters`);
};

/*----------- LOGICAL OPERATORS -----------------*/
const userPass = 'VF@mJS_Alba2022';
let cantLetras = 8;

if (userPass.length >= 12 && userPass.includes('@') && userPass.includes('_')) {
    console.log('congrats your password is strong');
} else if (userPass.length >= 8 && userPass.includes('@') && userPass.includes('_')) {
    console.log('that password is long enough');
} else if (userPass.length >= 8) {
    console.log('pelease use special characters');
} else {
    console.log(`please use at least ${cantLetras} letters and special characters`);
};

// LOGICAL NOT (!)
let pssUser = false;

if (!pssUser) {
    console.log('You must be logged in to continue');
};

/*----------- BREAK AND CONTINUE -----------------*/
let allScores = [50, 25, 0, 30, 100, 20, 10];

for (i = 0; i < allScores.length; i++) {

    if (allScores[i] === 0) { // the continue method is to skip the number you don't want to log on the console
        continue;
    }

    console.log('Your score is: ', allScores[i]);
    
    if (allScores[i] === 100) {
        console.log('congrats you have got the top score!');
        break;
    }
}

/*----------- SWITCH STATEMENTS -----------------*/
/* Note:
 * The switch statement use strict equality to check (===)
 * so either we use all numbers or all strings but we can't mix them up
*/
const myGrades = 'A';

switch (myGrades) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('You Suck!');
}

// previous example would look if I use if statement
// if (myGrades === 'A') {

// } else if (myGrades === 'B') {

// } else if (myGrades === 'C') {

// } else if (myGrades === 'D') {

// } else if (myGrades === 'E') {

// } else {0

// }


/*----------- VARIABLES & BLOCK SCOPE -----------------*/
let myCurrentAge = 38; // let it is a global scope because we can have access to it from anywhere in the code

if (true) {
    // myCurrentAge = 50; // changing the value of the variable
    let myCurrentAge = 40; // this will change the value of the variable only inside the if statement
    let ageName = 'Diego'
    console.log('inside 1st code block: ', myCurrentAge, ageName);

    if (true) {
        let myCurrentAge = 50; // overriding original variable
        console.log('Inside 2nd code Block is:', myCurrentAge, 'number');
    }
}

console.log('inside 1st code block: ', myCurrentAge); // it output twice in the log because the variable (let) is global
