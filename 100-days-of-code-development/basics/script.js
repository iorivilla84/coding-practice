let jobDesc = {
    title: 'Developer',
    place: 'Sydney',
    salary: 10000,
}

console.log(jobDesc.title);

let adultYears;
let age = 32;
const calculateAdultYears = (userAge) => {
    return userAge - 18;
}

adultYears = calculateAdultYears(age);
console.log(adultYears);

age = 45;
adultYears = calculateAdultYears(age);
console.log(adultYears);

// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let courseName = 'Java Script';
let coursePrice = 150;
let mainGoals = ['improve', 'learn', 'implement'];

// 2) Output ("alert") the three variable values
console.log(mainGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter
let myCourse = {
    name: 'Java Script',
    price: 150,
    goals: ['improve', 'learn', 'implement', 'have fun!']
}

console.log(myCourse);

// 4) Also output the second element in your "main goals" variable
console.log(myCourse.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)

const getArrayList = (arrayList, arrayIndex) => {
    let getArrayItem = arrayList[arrayIndex];
    return getArrayItem;
}

// 6) Execute your custom command from (5) and output ("alert") the result
let myGoals = getArrayList(myCourse.goals, 3);
console.log(myGoals);


let myArray = ['Learn', 'practicing', 'master it', 'improve'];

const getArray = (arrayItem, indexOfItem) => {
    let item = arrayItem[indexOfItem];
    return item;
}

let personalGoals = getArray(myArray, 1)
console.log(getArray(myArray, 1));

let person = {
    name: 'Diego',
    greet() {
        console.log('Hello', this.name);
    }
}
person.greet();
