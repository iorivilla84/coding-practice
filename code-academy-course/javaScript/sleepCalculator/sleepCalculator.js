const getSleepHours = (day) => {
    const sleepHours = Math.floor(Math.random() * 15);
    
    switch (day) {
        case 'monday':
            return sleepHours;
            break;
        case 'tuesday':
            return sleepHours;
            break;
        case 'wednesday':
            return sleepHours;
            break;
        case 'thursday':
            return sleepHours;
            break;
        case 'friday':
            return sleepHours;
            break;
        case 'saturday':
            return sleepHours;
            break;
        case 'sunday':
            return sleepHours;
            break;
    }
}

const calcSleepHours = () => 
    getSleepHours('monday')
    + getSleepHours('tuesday')
    + getSleepHours('wednesday')
    + getSleepHours('thursday')
    + getSleepHours('friday')
    + getSleepHours('saturday')
    + getSleepHours('sunday');

const getIdealSleepHours = () => {
    const idealSleepHour = 8;
    return idealSleepHour * 7;
}

const actualSleepHours = () => {
    const getSleepingHours = getIdealSleepHours();
    const getCalcSleepingHours = calcSleepHours();

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

console.log(calcSleepHours());
console.log(getIdealSleepHours());
console.log(calcSleepHours() - getIdealSleepHours());



const outputSleepHours = document.querySelector('.output');

outputSleepHours.innerHTML = actualSleepHours();