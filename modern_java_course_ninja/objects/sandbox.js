console.log('<-------- Creating first Object ---------->');
let user = {
    name: 'Diego',
    age: 38,
    email: 'iorivilla@hotmail.com',
    location: 'Sydney',
    movies: ['The Hobbit', 'Sherlock Holmes'], // this is an object with array
    myPersonalMovies: [ // this is an object inside an array to get access later on
        {title: 'The Hobbit', likes: 120},
        {title: 'Star Wars', likes: 330}
    ],
    //NORMAL FUNCTIONS BELOW
    /* login: function() {
        console.log('The user logged in');
    },
    logout: function() {
        console.log('The user logged out');
    },
    logMovies: function() { //NOTE: arrow functions doesn't work inside objects
        console.log('This user has watched the following movies');

        this.movies.forEach((movie, time) => {
            console.log(time, movie);
        })
    } */
    // SECOND AND BEST OPTION OF REGULAR FUNCTIONS BELOW
    login() {// Short HAND VERSION OF NORMAL FUNCTION WITHIN AN OBJECT
        console.log('The user logged in');
    },
    logout() {
        console.log('The user logged out');
    },
    logMovies() { //NOTE: arrow functions doesn't work inside objects
        console.log('This user has watched the following movies');

        this.movies.forEach((movie, number) => {
            console.log(number, movie);
        })
    },
    logPersonalMovies() {
        console.log('this is an object inside an array which is created inside the main object');

        // this => makes reference to the data inside an object
        // in this case (this = let user) (.myPersonalMovies = data inside the object)
        this.myPersonalMovies.forEach((mytitle) => {
            console.log(`Title: ${mytitle.title}, with ${mytitle.likes} likes`);
        })
    }
};

user.name = 'Fernando';

console.log(user);
console.log(user.name);

console.log(user['name']);
user['location'] = 'Rosebery';
console.log(user['location']);

console.log(typeof user);

console.log('<-------- Adding Methods ---------->');
/**
 * we add the login function to the object
 * so we can log it to the console
 */
user.login();
user.logout();

console.log('<-------- This Keyword ---------->');
//NOTE: arrow functions doesn't work inside objects
// so we have to use a normal function
user.logMovies();

console.log('<-------- This Keyword with object inside an array ---------->');
user.logPersonalMovies();

console.log('<-------- For Each Loop Inserte as HTML in the DOM---------->');
const myNames = ['Jessica', 'Diego', 'Benji', 'Victor'];
const ulNames = document.querySelector('.mynames');

html = ``;
myNames.forEach((elname) => {
    html += `
        <li style="color: red; background: orange;">${elname}</li>
    `
});

ulNames.innerHTML = html

console.log('<-------- Math Objects---------->');
console.log(Math.PI);
console.log(Math.E);

const myArea = 7.7;

console.log(Math.round(myArea)); //round up or down the decimal to a round number
console.log(Math.floor(myArea)); // this method no matter if it has decimal it floor it down the its parent number (7)
console.log(Math.ceil(myArea)); // this is the opposite of math floor it ceil it up to the next number Eg 7.7 it goes up to 8
console.log(Math.trunc(myArea)); // this one take away the decimal and leave the parent number = integer (rounded number)

const randomNumb = Math.random();
console.log(randomNumb);
console.log(Math.round(randomNumb * 100)); // this a way to get a random number between 1 and 100

console.log('<-------- Primitive Values Vs Reference Types---------->');
// Primitive values
// with primitive values by setting the variable with let means that it has global scope
// and if we change the value later on the original value doesn't get affected
let scoreOne = 50;
console.log('below is primitive values');
let scoreTwo = scoreOne;

console.log(`ScoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`ScoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference types values
// opposite to primitive values and if we change the value later on,
// the original value will be affected, that means that for the example below userOne / Two
// the value will change on both of them
const userOne = {name: 'Diego', age: 38}
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'Jessica';
console.log(userOne, userTwo);
