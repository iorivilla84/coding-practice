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
