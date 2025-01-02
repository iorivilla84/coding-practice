// import functions as objects //
// import domFunctions from './module-to-import.js'
// const { changeText, changeToFunkyColor } = domFunctions;

/* secret-messages.js */
import { changeText, changeToFunkyColor } from './module-to-import.js';
import { area as circleArea } from './circle-area.js';
import { area as squareArea } from './square-area.js';

const header = document.getElementById("header");

// call changeText here

setInterval(()=> {
    changeText(header, "I did it!");
  
  // call changeToFunkyColor() here
  changeToFunkyColor(header)

}, 2000);

const theCircleArea = document.querySelector('.circle');
const theSquareArea = document.querySelector('.square');
console.log('The area of a square with sides of length 5 is ' + squareArea(5));
console.log('The area of a circle with radius of length 5 is ' + circleArea(5));
console.log(theCircleArea.length);
if (theCircleArea.parentElement.classList.contains('text')
    && theSquareArea.parentElement.classList.contains('text')) {
    theCircleArea.innerHTML = circleArea(5);
    theSquareArea.innerHTML = squareArea(5);
}


