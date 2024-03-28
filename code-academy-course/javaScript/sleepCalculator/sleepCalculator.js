const calcSleepHours = numDays =>  {
    let sum = 0;
    for(let i = 0; i < numDays; i++) {
        sum += Math.floor(Math.random() * 15);
    }
    return sum;
};

const getWeekSleepValue = () => {
    let sleepHoursRes = []
    weekDayInput.forEach(day => {
        if(day.value !== '') {
            outputSleepHours.classList.add('active');
            errorOutput.classList.remove('active')
        } else {
            errorOutput.classList.add('active')
            errorOutput.innerHTML = 'Please fill out the form'
        }

        return sleepHoursRes.push(day.value);
    });

    const resultSleep = sleepHoursRes.reduce(function(prev, curr){
        return (Number(prev) || 0) + (Number(curr) || 0);
    });
    
    return resultSleep;
}



// Week Value Here

const getIdealSleepHours = () => {
    const idealSleepHour = 8;
    return idealSleepHour * 7;
}

const actualSleepHours = () => {
    const getSleepingHours = getIdealSleepHours();
    const getCalcSleepingHours = getWeekSleepValue();

    console.log(getCalcSleepingHours);
    console.log(getSleepingHours);
    console.log('real number ' + (getSleepingHours - getCalcSleepingHours));

    if (getSleepingHours === getCalcSleepingHours) {
        return 'You have got the perfect sleep'; 
    } else if (getSleepingHours < getCalcSleepingHours) {
        return 'You have got ' + (getCalcSleepingHours - getSleepingHours) + ' more hours than what you need';
    } else if (getSleepingHours > getCalcSleepingHours) {
        return 'You have got ' + (getSleepingHours - getCalcSleepingHours) + ' hours to go, keep sleeping!!';
    } else {
        return 'You need to get some rest';
    }
}

console.log(calcSleepHours(7));
console.log(getIdealSleepHours());
console.log(calcSleepHours() - getIdealSleepHours());



const outputSleepHours = document.querySelector('.output');
const errorOutput = document.querySelector('.error');
const weekDayInput = document.querySelectorAll('.weekday');
const submitSleepHoursBtn = document.querySelector('.submit');

submitSleepHoursBtn.addEventListener('click', () => {
    console.log(getWeekSleepValue());
    outputSleepHours.innerHTML = actualSleepHours();
    getWeekSleepValue();
});
