let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push("to", "Program");
secretMessage[7] = 'right';
secretMessage.shift();
secretMessage.unshift("Programing");
secretMessage.splice(6, 5, "know,");
secretMessage.join(" ");
console.log(secretMessage.join(" "));

const finalMsg = secretMessage.join(" ");
const message = document.querySelector('.secret-msg');
message.innerHTML = finalMsg;



/*------ Nested Arrays basics ----- */
// To access the nested arrays we can use bracket notation with the index value
const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1]
console.log(target)

/*------ Nested Arrays 2 ----- */
const bobsFollowers = ['Lisa', "Jess", "Kyle", 'Jackie', 'Nelly'];
const tinasFollowers = ['Lisa', 'Kim', 'Kyle', 'Nelly'];
const mutualFollowers = [];
const friendsOutp = document.querySelector('.friends');

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j])
      console.log('Mutual Friends are ' +  mutualFollowers);
      friendsOutp.innerHTML = `The mutual friends are: ${mutualFollowers.join(" And ")}`;
    }
  }
}

/*------ While loop ----- */
const cards = ['diamond', 'spade', 'heart', 'club'];

const whileOutp = document.querySelector('.while');
let currentCard;

while(currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  whileOutp.innerHTML = currentCard;
  console.log(currentCard)
}

/*------ Do While Statement ----- */
const cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log('cups added ' + cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded);

/*------ Break Keyword ----- */
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  console.log("And if you don't know, now you know.");
  console.log("Notorious B.I.G.")
  break;
}


/*------ Reverse loop ----- */
const items = ['apricot', 'banana', 'cherry'];
const reverseRes1 = document.querySelector('.reverse-loop1');
for (let i = items.length - 1; i >= 0; i--) {
  console.log(`${i}. ${items[i]}`);
  reverseRes1.innerHTML += `${i}.${items[i]} `
}

const gadgets = ['laptop', 'watch', 'phone', 'screen'];
const reverseRes2 = document.querySelector('.reverse-loop2');

for (let i = gadgets.length - 1; i >= 0; i -= 1) {
    console.log(`Gadget is: ${gadgets[i]}`)
    reverseRes2.innerHTML += `${i}.<b>Gadget is:</b> ${gadgets[i]} `
}


/*------ Whale Talk Challenge ----- */
const input = 'The Dunna and Mugg I like is what I want to say';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const whaleRes = document.querySelector('.whale-res');

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    input[i] += input[i] + input[i] ;
    resultArray.push(input[i]);
  }

  if (input[i] === 'u') {
    input[i] += input[i] + input[i] ;
    resultArray.push(input[i]);
  }

  for (let j = 0; j < vowels.length; j++) {
    if(input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

console.log(resultArray.join(" ").toUpperCase());
whaleRes.innerHTML = resultArray.join(" ").toUpperCase();

/*------ For Of Loop ----- */
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
const myHobbies = document.querySelector('.for-of');
let spaced = '';

for (const hobbie of hobbies) {
    if (spaced !== '') {
        spaced = ' ';
    }
    spaced += hobbie;
    myHobbies.innerHTML += spaced;
}

/*------ Using Break in a For Of Loop  ----- */
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
const birdsRes = document.querySelector('.break-for-of');
 
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    break;
  }
  console.log(bird);
  birdsRes.innerHTML += bird + ' ';
}

/*------ Using Continue in a For Of Loop  ----- */
const theBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
const theBirdsRes = document.querySelector('.continue-for-of');
 
for (const bird of theBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);
  theBirdsRes.innerHTML += bird + ' ';
}

/*------ For In Loop Properties ----- */
const movieList = {'movie1': "The Hobbit", 'movie2': "Batman", 'movie3': "X-Men", 'movie4': "Avengers"}
const movieListRes = document.querySelector('.for-in-prop');

for (let movie in movieList) {
    movieListRes.innerHTML += `in ${movie} we have: ${movieList[movie]} ||  `;
}

/*------ For In Loop Array ----- */
const movieListArr = ["The Hobbit", "Batman", "X-Men", "Avengers", "Superman", "Pirates of the Caribean"];
const movieLisArrRes = document.querySelector('.for-in-array');
const movieLiCont = document.createElement('ul');
movieLiCont.classList.add('movie-list');
let newMovieArr = [];

for (let movieArr in movieListArr) {
    const movieLi = document.createElement('li');
    movieLiCont.appendChild(movieLi);
    newMovieArr.push(movieListArr[movieArr])
    movieLiCont.setAttribute('data-movie-list', newMovieArr);
    movieLi.innerHTML += `Number ${movieArr} is: ${movieListArr[movieArr]} || `
    movieLisArrRes.appendChild(movieLiCont);
}
