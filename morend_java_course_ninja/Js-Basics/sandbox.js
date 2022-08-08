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
