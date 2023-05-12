//document.querySelector('.link1').href = 'www.google.com';

const anchorLink = document.querySelector('.link1');
anchorLink.setAttribute('href', 'www.google.com')

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice

let title = document.body.firstElementChild;
console.dir(title);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
const title1 = title.parentElement;
console.log(title1);

let title2 = title.nextElementSibling.nextElementSibling;
console.log(title2);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
const titleId = document.getElementById('main-title');
console.log(titleId);

// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
const text2 = document.querySelector('.text2');
console.log(text2);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
text2.textContent = 'Hello Word'

const removeTitle = document.querySelector('.main-title');
//removeTitle.remove(); // this example won't work on old browsers
// removeTitle.parentElement.removeChild(removeTitle) //this example is for old browsers

/* EVENTS */
let inputEv = document.querySelector('#texto');
const insertText = (input) => {
    // let enteredText = inputEv.value;
    let enteredText = input.target.value;
    console.log(enteredText);
}

inputEv.addEventListener('input', insertText);

let clickMe = document.querySelector('.click');

const getClick = (click) => {
    let clicked = click.target;
    clicked.textContent = 'this is clicked';
    console.log(click);
}

clickMe.addEventListener('click', getClick)