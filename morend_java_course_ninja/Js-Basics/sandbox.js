/*----------- VARIABLES -----------------*/
// let is a reusable variable
let age = 25;
let year = 2022;

console.log(age, year);

age = 38;
console.log(age);

/* const is a non reusable variable 
we use constant if we don't want the variable to be override */

const members = 3;
console.log(members);

var score = 75;
console.log(score);


/*----------- STRINGS -----------------*/
// Strings (we can use it store numbers or all type of characters)
console.log('Hello, World');

let email = 'iorivilla@hotmail.com';
console.log(email);

// Strings concatenation (we use it to joint multiple variables)
let firstName = 'Diego';
let lastName = 'Velasquez';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Strings characters (to extract a single character by using square bracket notation)
console.log(fullName[6]);

// Strings length (use to find the length of the characters)
console.log(fullName.length);

// Strings methods (perform some function that do something)
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);


/*----------- COMMON STRING METHODS -----------------*/

// Strings Methods (to get the how many letters are in the address until it reaches 'n')
let address = 'u16 / 919 Botany Road';
let addResult = address.indexOf('n');
console.log(addResult);

// String Slice (to cut the sentence or word when it reaches the limit we set)
// we pass two arguments 0 = where we go from - 10 = where we go to
let sliceResult = address.slice(0,10);
console.log(sliceResult);

// String Subtract
let subAddress = address.substr(4,14);
console.log(subAddress);

// String Replace (replace a character for another)
// first argument is the one to replace, second argument is to replace it for
let replaceAddress = address.replace('B', 'P');
console.log(replaceAddress);

/*--------------- NUMBERS -----------------*/
let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators = +, - , *, /, **, %
// ** = means to the power of

console.log(10 / 2);

let mathResult = radius % 3;
console.log(mathResult);

let theMathResult = pi * radius**2;
console.log(theMathResult);

//order of operation - B I D M A S
/**
 * 1. B = Brackets, (we perform first the brackets calculation (10-3 = 7))
 * 2. I = Indices Calculation **, elevate to the square
 * 3. D = Division which don't have it yet
 * 4. M = Multiplication 5 *
 * 5. A = Addition
 * 6. S = Subtraction
 */
let orderCalc = 5 * (10-3)**2;
console.log(orderCalc);

let likes = 10;
// likes = likes + 1; //------- first option
// likes++; //-------- popular option
// likes--; //-------- subtraction
// likes += 10; //------ adds 10 to the equation
// likes -= 5; //------- subtract 5 to the likes value
// likes *= 2; //-------- multiply the value times 2
// likes /= 2; //-------- divide the value by 2
console.log(likes);

// Nan - Not a Number
// console.log(5 / 'hello');
// console.log(5 * 'Hello');

// example of concatenate string
let myConca = 'The house has ' + likes + ' likes'
console.log(myConca);

/*--------------- TEMPLATE STRINGS -----------------*/
