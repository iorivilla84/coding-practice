let counter = document.querySelector('.counting');
const input = document.querySelector('.counting-words');
const errorMsg = document.querySelector('.error-msg');
counter.style.color = 'green'

const getCount = (inputField) => {
    let maxAllowText = input.maxLength;
    let inputText = inputField.target.value
    counter.innerHTML = maxAllowText - inputText.length;

    
    if (inputText.length < 10) {
        counter.style.color = 'green';
    } else if (inputText.length < 15) {
        counter.style.color = 'orange';
    } else {
        counter.style.color = 'red';
    }

    if (inputText.length === 20) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = "you can't text more";
    } else {
        errorMsg.style.display = 'none';
    }

    console.log(inputText.length);
}

input.addEventListener('input', getCount);
