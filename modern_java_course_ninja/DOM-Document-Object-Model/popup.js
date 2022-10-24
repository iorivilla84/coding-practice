const popButton = document.querySelector('button');
const myPopUp = document.querySelector('.popup-wrapper');
const closeBtn = document.querySelector('.popup-close');

popButton.addEventListener('click', () => {
    myPopUp.style.display = 'block'
});

closeBtn.addEventListener('click', () => {
    myPopUp.style.display = 'none'
});

myPopUp.addEventListener('click', () => {
    myPopUp.style.display = 'none'
});
