// Function declaration
function greet() {
    console.log('Hello there');
}

// function expression (we have to use semi colon at the end };)
const speak = function() {
    console.log("Good day!");
};

speak();
greet();

/*------------ Arguments and parameters -------------*/
const talk = function(name, time) {
    console.log(`god day ${time} ${name}`);
}
// The order of the parameters matters (name = Diego, Time = Morning) we can't do it in backwards
talk('Diego', 'Morning');

// or we can do this option to pass the parameters
const greetings = function(name = 'Diego', time = 'Night') {
    console.log(`Good ${time} ${name}`);
}
greetings();
greetings('Jessica', 'Evening'); // we can anyway override the value of the parameters by passing int when we call the function;

const calcArea = function(radius) {
    let area = 3.14 * radius**2 // area = pi times radius elevated to the square
    console.log(area);
}
calcArea(5);

/*------------ Returning Values -------------*/
// example 1
const calcMyArea = function(radius) {
    let area = 3.14 * radius**2 // area = pi times radius elevated to the square
    return area;
}

const myArea = calcMyArea(5);
console.log(myArea);

// example 2
const myAreaCalc = function(radius) {
    return 3.14 * radius**2 // this method is more clean and make it quicker
};

const myCalcArea = myAreaCalc(5);
console.log(myCalcArea);

/*------------ Arrow Functions -------------*/
console.log('Below is an arrow function');
const calArea = (radius) => {
    return 3.14 * radius**2
};
const myArrowFuncArea = myAreaCalc(5);
console.log(myArrowFuncArea);

// Below it is the simplify version of the above arrow function to make it shorter
console.log('Below is an arrow function simplified version');
/**
 * Wr can remove the () and the return to get the same result
 * if we are to pass two arguments, then we need the ()
 * if there are no arguments then we need the ()
 * We can remove the {} as it is not necessary 
 */
const calcElArea = radius => 3.14 * radius**2;

const calculandoArea = myAreaCalc(5);
console.log(calculandoArea);

// Practice of turning normal functions into arrow functions
/*------------ CASE 1 -------------*/
/* const elSaludo = function() {
    return 'Hola, mi Nombre es: Diego'
}; */

const elSaludo = () => 'Hola, mi Nombre es: Diego';
const mySaludo = elSaludo();
console.log(mySaludo);

/*------------ CASE 2 -------------*/
/* const bill = function(products, tax) {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};*/

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));

/*------------ For Each Method & Callbacks -------------*/

//Callbacks
// The callback functions is to pass another function into a function as an argument
// and in some point in the other function the callback would be called and pass the value
const myCallBack = callbackFunc => {
    let callbackValue = 50;
    callbackFunc(callbackValue);
};

myCallBack(value => {
    console.log(value);
});

const people = ['Necia', 'George', 'Manolo', 'Alba', 'Carlos'];
people.forEach((person, index) => {
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`${index} - Hello ${person}`);
};
people.forEach(logPerson);

/*------------ Callbacks Functions in Action -------------*/
const myList = document.querySelector('.people');

const generalPeople = ['Necia', 'George', 'Manolo', 'Alba', 'Carlos'];

let html = ``;
generalPeople.forEach(person => {
    //creating an html template for each person
    html += `<li style="color: brown; padding: 0 10p;">${person}</li>`;
});

console.log(html);
myList.innerHTML = html;
