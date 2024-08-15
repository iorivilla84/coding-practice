/*------ Reverse loop ----- */
const reverseArray = array => {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i -= 1) {
        reversed.push(array[i])
    }
    return reversed;
}
const reversedRes = document.querySelector('.reverse-array');
const sentence = ['sense.','make', 'all', 'will', 'This'];
reversedRes.innerHTML = reverseArray(sentence).join(' ');


/*------ greetAliens() for loop ----- */
const greetAliens = grettingMsg => {
    for (let i = 0; i < grettingMsg.length; i++) {
        console.log(`Oh powerful ${grettingMsg[i]},
        we humans offer our unconditional surrender!`);
        
        // printing each message to the front-end
        messageToAliens.innerHTML += `Oh powerful ${grettingMsg[i]},
        we humans offer our unconditional surrender! </br>`
    }
}
const messageToAliens = document.querySelector('.for-loop');
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);

/*------ convertToBaby() for loop and .push() ----- */
const convertToBaby = array => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`baby ${array[i]}`)
    }
    return newArray
}

const babyArray = document.querySelector('.for-loop2');
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals)) 
babyArray.innerHTML = convertToBaby(animals).join(', ');

/*------ Using forEach() to call a function ----- */
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
      forEachRes.innerHTML += `No ${veg} please. I will have pizza with extra cheese. </br> `
}

const declineEverything = arr => {
  arr.forEach(politelyDecline);
}
const forEachRes = document.querySelector('.for-each-function');
console.log(declineEverything(veggies))

const acceptEverything = arr => {
  arr.forEach(veggie => {
    console.log(`Ok, I guess I will eat some ${veggie}.`)
    normalForEach.innerHTML += `Ok, I guess I will eat some ${veggie}. </br>`
  })
}
const normalForEach = document.querySelector('.normal-for-each');
acceptEverything(veggies)

/*------ Using map() to call a function ----- */
const numbers = [2, 7, 9, 171, 52, 33, 14]
const mapOnFunc = document.querySelector('.map-on-function');
const toSquare = num => num * num;
const squareNums = arr => {
    mapOnFunc.innerHTML = arr.map(toSquare);
}

squareNums(numbers)

/*------ Using filter(), map() and forEach() ----- */
const shoutGreetings1 = arr => {
  return arr.filter(str => typeof str === 'string')
        .map(str => `${str.toUpperCase()}! `)
}

const shoutGreetings2 = arr => {
    let newMsg = '';
    arr.forEach(word => {
      newMsg += word.toUpperCase() + ' ';
    })
    return newMsg;
}

const greetings1 = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
const greetings2 = ['hello', 'word', 'Im', 'here', 'studying', 'always'];
const filterMapJuntos = document.querySelector('.map-filter-juntos');
const resForEach = document.querySelector('.res-foreach');
  
filterMapJuntos.innerHTML = shoutGreetings1(greetings1).join(' ')
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
resForEach.innerHTML = shoutGreetings2(greetings2);

/*------ Using sort() and reverse() to get years in descending order ----- */
const yearsOrdered = document.querySelector('.sort-res');
const sortYears = arr => arr.sort().reverse();
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

yearsOrdered.innerHTML = sortYears(years);
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]