const calcSleepHours = numDays =>  {
    let sum = 0;
    for(let i = 0; i < numDays; i++) {
        sum += Math.floor(Math.random() * 15);
    }
    return sum;
};

const totalHoursSlept = () => {
    let sleepHoursRes = []
    
    weekDayInput.forEach(eachDay => {
        if(eachDay.value !== '') {
            outputSleepHours.classList.add('active');
            errorOutput.classList.remove('active');
        } else {
            errorOutput.classList.add('active')
            errorOutput.innerHTML = 'Please fill out the form'
        }
        
        if (eachDay.value < 8 || eachDay.value < '8') {
            eachDay.parentElement.firstElementChild.nextElementSibling.innerHTML = 'X'
            eachDay.parentElement.firstElementChild.style.color = 'red';
        }

        return sleepHoursRes.push(eachDay.value);
    });

    const resultSleep = sleepHoursRes.reduce(function(prev, curr){
        return (Number(prev) || 0) + (Number(curr) || 0);
    });
    
    return resultSleep;
}

// Week Value Here
const idealSleepHours = () => {
    const idealSleepHour = 8;
    return idealSleepHour * 7;
}

const sleepResultMessage = () => {
    const getSleepingHours = idealSleepHours();
    const getCalcSleepingHours = totalHoursSlept();

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

const outputSleepHours = document.querySelector('.output');
const errorOutput = document.querySelector('.error');
const weekDayInput = document.querySelectorAll('.weekday');
const submitSleepHoursBtn = document.querySelector('.submit');

submitSleepHoursBtn.addEventListener('click', () => {
    console.log(totalHoursSlept());
    outputSleepHours.innerHTML = sleepResultMessage();
    totalHoursSlept();
});

const calcWeekSleepHours = () => {

}

const resultMessage = () => {

}

const calcSleepHoursDifference = () => {

}

const sleepView = {
    days: [
        {
            day: 'monday',
            sleptHours: 0
        }
    ]
}

//crear funcion the agarre lista de dias del objeto y crea un input