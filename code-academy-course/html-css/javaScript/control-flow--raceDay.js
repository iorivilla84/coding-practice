let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

let registeredEarly = false;
let runnerAge = 18;

const date = new Date();
const hour = date.getHours();
let dayTime = hour >= 12 ? 'AM' : 'PM'
const min = date.getMinutes();
const time = `${hour}:${min}${dayTime}`;


console.log('the time is ' + time)

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(raceNumber);
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Hello your will race at 9:30am with the number ${raceNumber}`)
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Hello your will race at 11:00am with the number ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`Hello your will race at 12:30 pm with the number ${raceNumber}`)
} else {
  console.log(`Please see the registration desk, your number ${raceNumber}`)
}