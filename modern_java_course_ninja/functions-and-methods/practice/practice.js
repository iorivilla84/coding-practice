console.log('<-------- function expression ---------->');
const intro = function() {
    console.log('Hello, my name is Diego');
}
intro();

console.log('<-------- Arguments and Parameters ---------->');
const dayGreeting = (name, time) => {
    console.log(`Good ${time} ${name}, how are you today?`);
};

dayGreeting('Diego', 'Evening');

const bookList = (fullname, time, title) => {
    console.log(`Your book this ${time} ${fullname} is: ${title}`);
};

bookList('Diego', 'Evening', 'The Hobbit');

const calcuNum = radius => {
    let myNum = 5 * radius * (5 + 2) + 1;
    console.log(myNum);
};

calcuNum(2);

console.log('<-------- function expression ---------->');
