// First Example: Sum Numbers (for loop)
const calculateSumButton = document.querySelector('#calc-button');

const calculateSumFunction = () => {
    const calcInputElement = document.querySelector('#user-number');
    const userEnteredValue = calcInputElement.value;

    let outputSumValue = 0;
    for (let i = 0; i <= userEnteredValue; i++) {
        outputSumValue = outputSumValue + i;
    }

    const outputResultValue = document.getElementById('calculated-sum');
    outputResultValue.textContent = outputSumValue;
    outputResultValue.classList.add('active');
}

calculateSumButton.addEventListener('click', calculateSumFunction);


// Second Example: Highlights links (for of loop)
const highlightButtonEl = document.querySelector('#highlight-links button');

const getHighlightsElements = () => {
    const highlightsElements = document.querySelectorAll('#highlight-links a');
    
    for (const elHighlighted of highlightsElements) {
        elHighlighted.classList.add('highlight');
    }
}

highlightButtonEl.addEventListener('click', getHighlightsElements);

// Third Example: Display User Data (for in loop)

const userData = {
    name: 'Jessica',
    lastname: 'Kawana',
    age: 28
}

const displayDataBtn = document.querySelector('#user-data button');

const userDataSum = () => {
    const userInfoOutput = document.querySelector('#output-user-data');

    userInfoOutput.innerHTML = '';

    for (const userInfo in userData) {
        const newUserInfoList = document.createElement('li') ;
        const outputListText = userInfo.toUpperCase() + ': ' + userData[userInfo];
        newUserInfoList.textContent = outputListText;

        userInfoOutput.append(newUserInfoList);
    }
}

displayDataBtn.addEventListener('click', userDataSum);


// Fourth Example: Role the dice (while loop);
const rollDiceBtnEl = document.querySelector('#statistics button');

const rollTheDice = () => {
    return Math.floor(Math.random() * 6) + 1;
}

const deriveNumberOfDiceRolls = () => {
    const inputDiceNumber = document.querySelector('#user-target-number');
    const diceRollsListEl = document.querySelector('#dice-rolls');
    const enteredNumber = inputDiceNumber.value;

    diceRollsListEl.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollTheDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollListEl = document.createElement('li');
        const outputText = 'Roll' + numberOfRolls + ': ' + rolledNumber;
        newRollListEl.textContent = outputText;
        diceRollsListEl.append(newRollListEl);
        hasRolledTargetNumber = rolledNumber == enteredNumber; // to check boolean
    }

    const outputTotalRollsEle = document.querySelector('#output-total-rolls');
    const outputTargetNumberEl = document.querySelector('#output-target-number');

    outputTotalRollsEle.textContent = numberOfRolls;
    outputTargetNumberEl.textContent = enteredNumber;
}

rollDiceBtnEl.addEventListener('click', deriveNumberOfDiceRolls);
