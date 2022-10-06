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
