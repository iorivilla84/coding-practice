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

/*------ Using filter() to compare two arrays and return common words ----- */
const justCoolStuff = (arr1, arr2) => {
  return arr1.filter(wordInCommon => {
    return arr2.includes(wordInCommon);
  })
}

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
const filterComparisonResult = document.querySelector('.filter-compare');

filterComparisonResult.innerHTML = 'Common words are => ' + justCoolStuff(myStuff, coolStuff)
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/*------ Using every() to go through array and return boolean ----- */
const isTheDinnerVegan1 = arr => {
  return arr.every(dish => {
    return dish.source === 'plant'
  })
}

// Using for loop to pass inner function to check array and return boolean
const isTheDinnerVegan2 = (arr) => {
      const isVegan = dish => {
        if (dish.source === 'plant') {
          return true;
        }
        return false
      }

      for (let i = 0; i < arr.length; i++) {
        if (!isVegan(arr[i])) {
          return false;
        }
      }
      return true;
}

const noVeganMenu = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
const veganMenu = [{name: 'hamburger', source: 'plant'}, {name: 'ketchup', source: 'plant'}, {name: 'salad', source: 'plant'}, {name: 'kinoa', source:'plant'}];
const everyArrRes = document.querySelector('.every-method')
const forArrRes = document.querySelector('.for-loopm')

everyArrRes.innerHTML = 'not all dishes are vegan => ' + isTheDinnerVegan1(noVeganMenu)
forArrRes.innerHTML = 'all dishes are vegan=> ' + isTheDinnerVegan1(veganMenu)
// Should print false


/*------ Using sort() as function to iterate on array of objects and sort species by No of teeth ----- */
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
const sortSpeciesByTeeth = arr => {
  const arrSorted = arr.sort((specie1, specie2) => specie1.numTeeth - specie2.numTeeth);
  
  let arrOutput = [];
  for (let i = 0; i < arrSorted.length; i++) {
    arrOutput.push(`${arrSorted[i].speciesName}: ${arrSorted[i].numTeeth}`)
  }
  return arrOutput;
}
console.log(sortSpeciesByTeeth(speciesArray))
const sortedSpecies = document.querySelector('.sort-method');
sortedSpecies.innerHTML = sortSpeciesByTeeth(speciesArray).join(', ');


const sortSpeciesByTeeth2 = arr => {
  const arrSorted2 = arr.sort((specie1, specie2) => specie1.numTeeth - specie2.numTeeth);
  
  let arrOutput2 = [];
  for (let specie in arrSorted2) {
    arrOutput2.push(`${arrSorted2[specie].speciesName}: ${arrSorted2[specie].numTeeth}`)
  }
  return arrOutput2;
}
console.log('sortSpeciesByTeeth2 =>' + sortSpeciesByTeeth2(speciesArray));

const resSpecies2 = document.querySelector('.sort-method2');
resSpecies2.innerHTML = sortSpeciesByTeeth2(speciesArray).join(' / ')

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

/*------ Using sort() as function to iterate on array of objects and sort species by No of teeth ----- */
const findMyKeys = myKeys => {
  return myKeys.indexOf('keys');
}

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
const keysIndexOf = document.querySelector('.index-item')

keysIndexOf.innerHTML = 'keys position number is => ' + findMyKeys(randomStuff);
// Should print 4

/*------ function with object inside with _properties, Setters and Getters ----- */
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return 'ruff! ruff!';
    },
    eatTooManyTreats() {
      this._weight++;
      return this._weight;
    }
  }
}
const dogDetails = dogFactory('Benji', 'Mini Dachshund', 10);
// console.log(dogFactory('Joe', 'Pug', 27))
const finalDetails = `${dogDetails.name}, ${dogDetails.breed}, ${dogDetails.weight}, 
  this dog does a lot of ${dogDetails.bark()} and if eat too many treats usually
  gets ${dogDetails.eatTooManyTreats()}kg each month`
const objectOut = document.querySelector('.object-res');
objectOut.innerHTML = finalDetails;