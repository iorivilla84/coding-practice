console.log('<!------------- The Query Selector ---------------->');

const para = document.querySelector('p:nth-child(2)');
const para2 = document.querySelector('div.error');

console.log(para);
console.log(para2);

console.log('<!------------- The Query Selector All ---------------->');

const selectAll = document.querySelectorAll('p')
console.log(selectAll);
console.log(selectAll[1]); // with the square brackets we can select only one element from the selectAll

console.log('<!------------- The Query Selector All ---------------->');
selectAll.forEach(ptag => {
    console.log(ptag);
});

const errors = document.querySelectorAll('.error');
console.log(errors);

console.log('<!------------- Alternative way to query the DOM ---------------->');

console.log('<!------------- Get elements by ID ---------------->');
const title = document.getElementById('title');
console.log(title);

console.log('<!------------- Get elements by Class Name ---------------->');
const theErrors = document.getElementsByClassName('error')
console.log(theErrors);
console.log(theErrors[0]);
// NOTE: we can't use for Each by getting the element by Class Name due to it returns
// as an html collection

console.log('<!------------- Get elements by tag name ---------------->');
const myPara = document.getElementsByTagName('p');
console.log(myPara);
console.log(myPara[1]);

console.log('<!------------- Adding & Changing page content ---------------->');
const myContent = document.querySelector('p');
console.log(myContent.innerText);
myContent.innerText = 'This is now changed with JS';
myContent.innerText += ', Append text with JS'; // this example is to append the text on the p element

const allContent = document.querySelectorAll('p');
allContent.forEach(texto => {
    console.log(texto.innerText);
    texto.innerText += ' New text appended with JS'
});

const theDivContent = document.querySelector('.change');
const appendDivContent = document.querySelector('.append');
console.log(theDivContent.innerHTML);

theDivContent.innerHTML = '<h2>Replacing this p tag inside this div with h2 with JS</h2>'
appendDivContent.innerHTML += ' => Adding text to this h5 with JS'

const myPeople = ['Jessica', 'Victor', 'Alba', 'Benji'];
const miGenteLista = document.querySelector('.migente');

myPeople.forEach(persona => {
    miGenteLista.innerHTML += `<p>${persona}</p>`
});

console.log('<!------------- Getting & Setting Attributes ---------------->');
const myLink = document.querySelector('a');
console.log(myLink.getAttribute('href'));

myLink.setAttribute('href', 'www.customlink.com');
myLink.innerText = 'changing custom text with js'

const errorMssg = document.querySelector('.the-error');
console.log(errorMssg.getAttribute('class'));
errorMssg.setAttribute('class', 'success');
errorMssg.setAttribute('style', 'color: green;')

console.log('<!------------- Changing css Styles ---------------->');
const myTitle = document.querySelector('h1');

myTitle.style.padding = '50px';
myTitle.style.fontSize = '16px';

console.log('<!------------- Add or Remove classes ---------------->');
const myContentError = document.querySelector('.message');

myContentError.classList.add('error-mssg');
myContentError.classList.remove('error-mssg');
myContentError.classList.add('success-txt');

console.log('<!------------- Challenge ---------------->');

const myChallenge = document.querySelectorAll('.challenge p');

myChallenge.forEach(texto => {
    if (texto.textContent.includes('error')) {
        texto.classList.add('error-mssg');
    } else if (texto.textContent.includes('success')) {
        texto.classList.add('success-txt');
    }
});

const elTitulo = document.querySelector('.titulo');

elTitulo.classList.toggle('title');16

console.log('<!------------- Parent, Children, Siblings  ---------------->');

const myArticle = document.querySelector('article');
 // the result of the following log below it's an HTMLcollection which if we want to cycle trough it
 // what means that we can't use an array, forEach, or any loop to apply anything to each element
 // so what we have to do is we have to convert it to an array first
console.log(myArticle.children);

// converting the HTMLcollection into an array like the following below
console.log(Array.from(myArticle.children)); // now this will be an array so we can cycle through it with any loop

Array.from(myArticle.children).forEach(child => {
    child.classList.add('article-element');
});

const myH2Title = document.querySelector('article h2');

console.log(myH2Title.parentElement);
console.log(myH2Title.nextElementSibling);
console.log(myH2Title.previousElementSibling);

console.log('<!------------- Events Basic (click events) EXAMPLE 1 ---------------->');

const myUlList = document.querySelector(".click-events .first-list")
const myTodoListButton = document.querySelector('.button1');
const myItems = document.querySelectorAll('.click-events .item1');

myItems.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(item);

        // e.target.style.textDecoration = 'line-through'
        // e.target.style.display = 'none';
        e.target.style.cssText = `
            background: red;
        `;
    })
});

myTodoListButton.addEventListener('click', () => {
    myItems.forEach(list => {
        list.style.cssText = `
            display: block;
            background: green;
        `;
    })
});

console.log('<!------------- Events Basic (click events) and event Bubbling ad delegation ---------------->');
console.log('<!------------- Adding/Removing list items from the DOM ---------------->');

const myListItems2 = document.querySelectorAll(".click-events .item2");
const myButtonList = document.querySelector('.click-events .button2');
const myUlTodoList = document.querySelector('.click-events .todo-list2');

/* myButtonList.addEventListener('click', () => {
    myUlTodoList.innerHTML += `<li>New Todo</li>`
}); */

myButtonList.addEventListener('click', () => {
    const theLiList = document.createElement('li');
    theLiList.textContent = 'New Todo';
    // myUlTodoList.append(theLiList);
    myUlTodoList.prepend(theLiList);
});

/* console.log(myListItems2);
myListItems2.forEach(listItem => {
    listItem.addEventListener('click', e => {
        e.stopPropagation();
        e.target.remove();
    });
}); */

myUlTodoList.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    };
});

console.log('<!------------- More DOM events ---------------->');

const myCopyRight = document.querySelector('.copy-me');

myCopyRight.addEventListener('copy', () => {
    alert('OI, this is my content')
});

const myBoxEvent = document.querySelector('.box');

myBoxEvent.addEventListener('mousemove', e => {
    myBoxEvent.textContent = `X pos - ${e.offsetX} and y pos - ${e.offsetX}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})
 