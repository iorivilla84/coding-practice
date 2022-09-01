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
