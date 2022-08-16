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
const title = 'Best games of 2021';
const author = 'Nintendo';
const gameLikes = 50;

// Example of old and messy version (concatenation way)
let bestGames = 'The blog with name: ' + title + ' by ' + author + ' has ' + gameLikes + ' likes';
console.log(bestGames);

// template string way
let templateBestGames = `Template string way
The blog with name ${title} by ${author} has ${likes} likes`
console.log(templateBestGames);

// HTML template with template string
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes}</span>
`;
console.log(html);

/*--------------- ARRAYS -----------------*/
let velasquezF = ['Jessica', 'Diego', 'Benji'];
velasquezF[1] = 'Fernando' // changing Diego's name for Fernando
console.log(velasquezF[1]);
console.log(velasquezF.length);

let famAges = [28, 38, 2];
console.log(famAges);

let randomAge = ['Diego', 'Jessica', 38, 28];
console.log(randomAge);

// Array methods
// example 1
let famResult = velasquezF.join(', ');
console.log(famResult);
// example 2
let famResult2 = velasquezF.indexOf('Benji');
console.log(famResult2);
// example 3
let famResult3 = velasquezF.concat(['Carlos', 'Alba']); // to alter the original value
console.log(famResult3);
// example 4
let famResult4 = velasquezF.push('Carlos'); // to alter the original value
console.log(famResult4);
// example 5
let famResult5 = velasquezF.pop(); // to reverse the changes and get the original value
console.log(velasquezF);
console.log(famResult5);

/*--------------- NULL & UNDEFINED -----------------*/
let unAge; // we get undefined or null because we haven't defined a actual number to (let unAge)
console.log(unAge, unAge + 3, `The age is ${unAge}`);

let myCurrAge = null; // we give an intentional null to clear or not store any value into the browser
console.log(myCurrAge, myCurrAge + 5, `The current age is ${myCurrAge}`);
// myCurrAge will turn into 0 so if you try to do a math it will be calculate by 0

/*--------------- BOOLEANS AND COMPARISON -----------------*/
// methods can return booleans
let myEmail = 'iorivilla@hotmail.com';
let resultEmail = email.includes('@');
console.log(resultEmail);

let myNames = ['Jessica', 'Diego', 'Benji'];
let resultMyNames = myNames.includes('Jessica');
console.log(resultMyNames);

// comparison operators
let theAge = 38;
console.log(theAge == 38); // true
console.log(theAge == 25); // false
console.log(theAge != 37); // true
console.log(theAge  > 37); // true
console.log(theAge  < 20); // false
console.log(theAge  <= 38); // false
console.log(theAge  >= 38); // false

// comparison string
let dName = 'diego'; // lower case is always greater than
console.log(dName == 'diego'); // true
console.log(dName == 'Diego'); // false
console.log(dName > 'Andres'); // true
console.log(dName > 'Diego'); // true

/*--------------- LOOSE VS STRICT COMPARISON -----------------*/
let diegoAge = 38;
console.log(diegoAge == 38);
console.log(diegoAge != 38);
console.log(diegoAge != '38');

// strict comparison (different types cannot be equal)

console.log(diegoAge === 38);
console.log(diegoAge === '38');
console.log(diegoAge !== 38);
console.log(diegoAge !== '38');

/*--------------- TYPE CONVERSION -----------------*/
let myScore = '100';

myScore = Number(myScore) // This one convert the string into a number
console.log(myScore + 1);

let scoreResults = Number('Hello'); // we will get NaN
console.log(scoreResults);

let myScoreResults = String(50);
console.log(myScoreResults);
console.log(myScoreResults, typeof myScoreResults);

let theScoreResult = Boolean(100);
console.log(theScoreResult, typeof theScoreResult);

let theScoreResult2 = Boolean('0');
console.log(theScoreResult2, typeof theScoreResult2);

let theScoreResult3 = Boolean(0);
console.log(theScoreResult3, typeof theScoreResult3);
