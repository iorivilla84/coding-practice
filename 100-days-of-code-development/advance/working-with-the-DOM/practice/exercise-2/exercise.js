// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
/* 
 *Solution below
 */
const firstButton = document.querySelectorAll('button')[0];
const secondButton = document.getElementById('second-button');


// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

/* 
 *Solution below
 */
const firstPara = document.body.children[2].children[1];
const thirdPara = document.body.children[2].children[3];
//example to select third paragraph
const thirdElePara = firstPara.nextElementSibling.nextElementSibling;

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

/* 
 *Solution below
 */
/* FIRST FUNCTION */
// const firstFunction = () => {
//     console.dir(firstButton);
// }

// const secondFunction = (event) => {
//     console.dir(event.target);
// }

/* MODIFIED FUNCTIONS FROM POINT 4  */
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

/* 
 *Solution below
 */
// const firstFunction = () => {
//     thirdPara.style.display = 'none';
// }

// const secondFunction = () => {
//     firstPara.style.backgroundColor = 'blue'
// }


// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

/* 
 *Solution below
 */
const firstFunction = () => {
    thirdPara.classList.add('d-none');
}

const secondFunction = () => {
    firstPara.classList.add('text-blue');
}

firstButton.addEventListener('click', firstFunction);
secondButton.addEventListener('click', secondFunction);