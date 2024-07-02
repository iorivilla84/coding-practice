/* ------- Bracket Notation ------- */
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  const isActive = spaceship[propName];
  console.log(isActive);
  
  const spaceObjRes = document.querySelector('.space-res');
  let returnObjValues = (objectName, keyValue) => spaceObjRes.append(objectName[keyValue] + ' / ');
  returnObjValues(spaceship, 'Active Mission');
  returnObjValues(spaceship, 'Fuel Type');
  returnObjValues(spaceship, 'homePlanet');
//   console.log(returnObjValues(spaceship, 'homePlanet'))

/* ------- Property Assignment ------- */
let spaceship1 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  const spaceObjRes1 = document.querySelector('.space1-res');
  
  spaceship.color = 'glorious gold' // Changes the value of the type property
  spaceship1.numEngines = 8; // Creates a new key of 'numEngines' with an integer value of '8'
  delete spaceship1['Secret Mission'] // Removes the mission property
  for (let spaceDet in spaceship1) spaceObjRes1.innerHTML += spaceDet + ': ' + spaceship1[spaceDet] + ' / ';
  console.log(spaceship1);

/* ------- Methods ------- */
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let retreatMessage1 = 'Spim... Borp... Glix... Blastoff!';

const returnedMessage = document.querySelector('.method-msg');
const alienShip = {
  retreat() {
    console.log(retreatMessage);
    returnedMessage.innerHTML = retreatMessage + ' || ';
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
    returnedMessage.innerHTML += retreatMessage1;
  }
};

alienShip.retreat()
alienShip.takeOff()

console.log(alienShip.retreat())
console.log(alienShip.takeOff())

/* ------- Nested Objects ------- */
let mySpaceship = {
    passengers: [{'name': 'Diego'}, {'name': 'Jessica'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] 
      }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  const capFave = mySpaceship.crew.captain['favorite foods'][0]
  console.log(capFave);
  mySpaceship.passengers = [{'name': 'Diego'}, {'name': 'Jessica'}];
  console.log(mySpaceship)
  const firstPassenger = mySpaceship['passengers'][0]
//   console.log(firstPassenger)

  const mySpaceSpects = document.querySelector('.nested-crew');

  const allPassengers = allNames => {
    let allPassengers = []
      for (let i = 0; i < allNames.passengers.length; i++) {
        console.log(allNames.passengers[i])
        allPassengers.push(allNames.passengers[i].name)
      }
      return allPassengers;
  }
  let passengersName = allPassengers(mySpaceship)

  passengersName.forEach(name => {
    mySpaceSpects.innerHTML += `Name: ${name} `;
  })


  /* ------- Add or Reassign objects ------- */
  let theSpaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  const changeObj = document.querySelector('.change-obj');
  const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil'
  }
  
  const remotelyDisable = obj => {
    obj['disabled'] = true
  }
  greenEnergy(theSpaceship)
  remotelyDisable(theSpaceship)

  for (let key in theSpaceship) {
    let keyObj = theSpaceship[key] + ',  ';
    changeObj.innerHTML += `<strong> ${key} </strong> => ${keyObj}`;
  }

   /* ------- Looping Through Objects ------- */
let spaceshipMembers = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

const crewMembers = document.querySelector('.crew-names');
const crewDegrees = document.querySelector('.crew-degrees');

for (let crewNames in spaceshipMembers.crew) {
  const membersNames = `<strong> ${crewNames.toUpperCase()}: </strong> ${spaceshipMembers.crew[crewNames].name}`;
  crewMembers.innerHTML += membersNames;
}

for (let crewStudies in spaceshipMembers.crew) {
  const degrees = `<strong> ${spaceshipMembers.crew[crewStudies].name.toUpperCase()}: </strong> ${spaceshipMembers.crew[crewStudies].degree}`;
  crewDegrees.innerHTML += degrees;
}

/* ------- The this Keyword ------- */
const thisOutp = document.querySelector('.this-key');

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

thisOutp.innerHTML = robot.provideInfo()

/* ------- Object Getters ------- */
const getterOut = document.querySelector('.getter');
const myRobot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel () {
    if (typeof this._energyLevel === 'number')  {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(myRobot.energyLevel);
getterOut.innerHTML = myRobot.energyLevel

/* ------- Object Setters ------- */
const setterOut = document.querySelector('.setter');

const theRobot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

setterOut.innerHTML = theRobot.numOfSensors = 'Final Sensor is:' +  100;

/* ------- Factory Functions ------- */
const factoryFunc = document.querySelector('.factory')
const robotFactory = (model, mobile, size) => {
  return {
    model, // instead of 'model: model' we simplify the code and use a shorthand
    mobile, // instead of 'mobile: mobile' we simplify the code and use a shorthand
    beep() {
      return 'Beep Boop'
    },
    size: size
  }
}

const tinCan = robotFactory('P-500', true, '7"');
tinCan.beep()

factoryFunc.innerHTML = `<strong>Model:</strong> ${tinCan.model}, <strong>Size:</strong> ${tinCan.size}, <strong>Default Sound:</strong> ${tinCan.beep()}`;

/* ------- Factory Functions ------- */
const destructuredObj = document.querySelector('.destructured');
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const { preferences } = vampire;
console.log(preferences.day); // print stay inside
destructuredObj.innerHTML = preferences.day;

/* ------- Built-in Object Methods ------- */
const builtInRes = document.querySelector('.built-in');
const elRobot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(elRobot);

console.log('robotKeys ' + robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(elRobot);

console.log('robotEntries ' +  robotEntries);

// Declare newRobot below this line and add new properties at the beggining:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, elRobot)

console.log(newRobot);

for (let keyVak in newRobot) {
  builtInRes.innerHTML += `<strong> ${keyVak}:</strong> ${newRobot[keyVak]} `
}

/* ------- Object setters and getters challenge Below ------- */
const todaysMenu = {
  special: {
    _theMeal: '',
    _thePrice: 0,
    _timeToCook: '',
    set theMeal(name) {
      if (typeof name === 'string') {
        return this._theMeal = name;
      }
    },
    set thePrice(cost) {
      if (typeof cost === 'number') {
        return this._thePrice = cost;
      }
    },
    set timeToCook(cooking) {
      if (typeof cooking === 'string') {
        return this._timeToCook = cooking;
      }
    },
    get todaysSpecialMeal() {
      if (typeof this._theMeal && typeof this._thePrice && typeof this._timeToCook) {
        return `Today's special meal is <strong> ${this._theMeal}</strong> for <strong>$${this._thePrice}</strong>
        and it will take <strong>${this._timeToCook}</strong> to cook`
      } else {
        return `The meal is not available today`
      }
    }
  }
}

todaysMenu.special.theMeal = 'Bandeja Paisa'
todaysMenu.special.thePrice = 25
todaysMenu.special.timeToCook = '15 mins'
const getTodaysMenu = todaysMenu.special.todaysSpecialMeal
console.log('today is' + todaysMenu.special.todaysSpecialMeal)
const menuResult = document.querySelector('.menu-res');
menuResult.innerHTML = getTodaysMenu;


/* ------- Object setters and getters challenge Below ------- */
const mySuperTeam = {
  _players: [
    {
      'firstName': 'Jessica',
      'lastName': 'Kawana', 
      'age': 30
    },
    {
      'firstName': 'Diego',
      'lastName': 'Velasquez', 
      'age': 40
    },
    {
      'firstName': 'Benji',
      'lastName': 'Kawana', 
      'age': 2
    }
  ],
  _games: [
    {
      'opponent': 'NSW',
      'teamPoints': 8, 
      'opponentPoints': 5
    },
    {
      'opponent': 'ACT',
      'teamPoints': 10, 
      'opponentPoints': 9
    },
    {
      'opponent': 'NT',
      'teamPoints': 15, 
      'opponentPoints': 12
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    player = {
      'firstName': newFirstName,
      'lastName': newLastName, 
      'age': newAge
    }
    this._players.push(player)
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    game = {
      'opponent': newOpponent,
      'teamPoints': newTeamPoints, 
      'opponentPoints': newOpponentPoints
    }
    this._games.push(game)
  }
}

mySuperTeam.addPlayer('Bella', 'Kawana', 1.5);
mySuperTeam.addGame('Titans', 100, 98);

const playersOutRes = document.querySelector('.team-players-res');

// for (let players in mySuperTeam.players) {
//   playersOutRes.innerHTML += `${mySuperTeam.player}: ${mySuperTeam.players[players].firstName}`
// }
const playersObj = mySuperTeam.players;
playersObj.forEach (player => {
  let html;
  const listContainer = document.createElement('ul')
  listContainer.classList.add('team-wrapper')
  for(let eachPlayer in player) {
    html = `
      <li><strong>${eachPlayer}</strong>: ${player[eachPlayer]}</li>
    `;
    listContainer.innerHTML += html
    playersOutRes.append(listContainer);
  }
})

const gamesOutRes = document.querySelector('.team-games-res');
const gamesObj = mySuperTeam.games;

gamesObj.forEach(game => {
  let html;
  const gameContainer = document.createElement('ul');
  gameContainer.classList.add('games-wrapper');

  for (let eachGame in game) {
    html = `
    <li><strong>${eachGame}</strong>: ${game[eachGame]}</li>
    `
    gameContainer.innerHTML += html;
    gamesOutRes.append(gameContainer);
  }
})


const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

console.log(hasPerson("hasOwnProperty"));
console.log(getAge("toString"));
