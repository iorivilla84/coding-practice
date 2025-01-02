/* dom-functions.js */
export function changeText(domElement, newText) {
    domElement.innerHTML = newText;
}

export function changeToFunkyColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// USE EXPORT in front of each function to use the new export function method
// OR USE THE CONVENTIONAL METHOD TO EXPORT THE FUNCTIONS

// export { changeText, changeToFunkyColor };

// or export as object
// const resources = {
//     changeText,
//     changeToFunkyColor
// }
// export { resources as default }; or below second option
// export default resources;