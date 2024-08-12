/* ------- Functions as Data ------- */
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  const nameOfFunc = document.querySelector('.name-func');
  nameOfFunc.innerHTML = `checking name of function if you forgot = ${isTwoPlusTwo.name}`
  
  console.log(isTwoPlusTwo.name)


/* ------- Functions as Parameters ------- */
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
  
    if (checkA === checkB) {
      return checkB
    } else {
      return 'inconsistent results';
    }
  }
  
  const functionParam = document.querySelector('.func-par');
  functionParam.innerHTML = `Calling external function as a parameter = ${checkConsistentOutput(addTwo, 6)}`;
  console.log(checkConsistentOutput(addTwo, 6))
  
  console.log();

/* ------- Iterators ------- */

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
const iteraOut = document.querySelector('.for-each');

const ulEl = document.createElement('ul');
ulEl.classList.add('list-wrapper');
let pTitle = `<h3>For Each</h3>`
artists.forEach(artist => {
  let html = '';
  console.log(artist + ' is one of my favorite artists.');
  html = `<li><strong>${artist}</strong> is one of my favorite artists.</li>`
  ulEl.innerHTML += html;
});
iteraOut.innerHTML = pTitle;
iteraOut.appendChild(ulEl);

const numbers = [1, 2, 3, 4, 5];
const mapOut = document.querySelector('.map');
pTitle = `<h3>Map</h3>`
const squareNumbers = numbers.map(number => {
  return number * number;
});

const splitNum = squareNumbers.join(' - ')
mapOut.innerHTML = pTitle
mapOut.innerHTML += splitNum
console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const filterOut = document.querySelector('.filter');
pTitle = `<h3>Filter</h3>`
const myThings = (type) => {
  const filteringThings = things.filter(thing => {
    return typeof thing === type
  });
  const filterRes = `<p class="filter-wrapper">${filteringThings.join(' - ')}</p>`;
  return filterRes;
}
console.log('thing is: ' + myThings('number'));
filterOut.innerHTML = `
  ${pTitle}
  <h4>Filtering strings only</h4>
  ${myThings('string')}
  <h4>Filtering numbers only</h4>
  ${myThings('number')}
`
// console.log(onlyNumbers);

/* ------- Map Iterator ------- */
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const mapRes1 = document.querySelector('.map1'); 

// Create the secretMessage array below
const secretMessage = animals.map(animal => mapRes1.innerHTML += animal.split('')[0])

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const mapRes2 = document.querySelector('.map2'); 

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => mapRes2.innerHTML += number / 100)


/* ------- Filter Iterator ------- */
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const filter1 = document.querySelector('.filter1'); 

// Call .filter() on randomNumbers below
const smallNumbers1 = randomNumbers.filter(number => {
  return number < 250;
})
filter1.innerHTML = smallNumbers1;

console.log(smallNumbers1);


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const filter2 = document.querySelector('.filter2'); 

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

filter2.innerHTML = longFavoriteWords;

console.log(longFavoriteWords);

/* ------- findIndex() Iterator ------- */
const animales = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const index1 = document.querySelector('.index1'); 

const foundAnimal = animales.findIndex(animal => {
  return animal === 'elephant'
})
index1.innerHTML = foundAnimal;

const index2 = document.querySelector('.index2');
const startsWithS = animales.findIndex(firstLetter => {
  return firstLetter[0] === 's';
});
index2.innerHTML = startsWithS;

console.log(foundAnimal);
console.log(startsWithS);

/* ------- The .reduce() Method ------- */
const reduceRes = document.querySelector('.reduce');
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);

  console.log('The value of currentValue: ', currentValue);

  return accumulator + currentValue;
}, 10); // adding this argument at the end, the sum will start with this number

reduceRes.innerHTML = newSum;

/* ------- The .some() + .every() Method ------- */
/* The two methods iterates to an array and returns a boolean */
const newNum = [1, 50, 75, 200, 350, 525, 1000];
const numsRes = document.querySelector('.some-every');
// const numsReturn = newNum.every(num => num < 0);
const numsReturn = newNum.some(num => num < 0);
console.log('numbers result here: ' + numsReturn);

numsRes.innerHTML = numsReturn;


/* ------- Using .filter() on an object ------- */
const GPA_BENCHMARK = 3.5;
const studentsRes = document.querySelector('.filter-on-object');
let students = [
  {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  {
    name: 'Sameer Fares',
    gpa: 3.9
  }
]
// const filteredStudents = students.filter(student => {
//   if (student.gpa >= GPA_BENCHMARK) {
//     return student.name;
//   }
// });
const honorStudents = students.forEach(student => {
  if (student.gpa >= GPA_BENCHMARK) {
    studentsRes.innerHTML += student.name + ' ';
  }
})

// studentsRes.innerHTML = filteredStudents;


/* ------- ITERATORS CHALLENGE (CHOOSING THE CORRECT ITERATOR) ------- */
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach(word => {
  return count++;
})
console.log('Number of words is=> ' + count);

const newStory = storyWords.filter(word => {
  if (word !== unnecessaryWord) {
    return word
  }
})

const spellCheck = storyWords.map(word => word === misspelledWord ? 'beautiful' : word);

const badWordIndex = storyWords.findIndex(wrongWord => {
    return wrongWord === badWord;
})

storyWords[badWordIndex] = 'really' // using the function above with findIndex to find and access the story array and reasigning the badWord to 'Really'

const lengthCheck = storyWords.every(word => {
  return word.length <= 10;
});

const longWordCheck = storyWords.findIndex(word => {
  return word.length > 10;
})

storyWords[longWordCheck] = 'stunning';

// console.log(newStory.join(' '))
// console.log(spellCheck.join(' '))
console.log(badWordIndex)
console.log('legth check here => ' + lengthCheck)
console.log('long word index is => ' + longWordCheck)
console.log('long word is => ' + storyWords[longWordCheck])
const challengeRes = document.querySelector('.iterators-challenge')
challengeRes.innerHTML = storyWords.join(' ');
// console.log(storyWords.join(' '))
