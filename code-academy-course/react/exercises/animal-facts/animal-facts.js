// import { animals } from './animals';
// import { React } from 'react';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

const animals = {
  dolphin: {
    image: './images/dolphin.png',
    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  },
  lobster: {
    image: './images/lobster.png',
    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  },
  starfish: {
    image: './images/starfish.png',
    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  }
};

function displayFact(e) {
  const clickedAnimal = e.target.alt;
  const allFacts = animals[clickedAnimal].facts;
  const randomIndex = Math.floor(Math.random() * allFacts.length);
  const funFact = allFacts[randomIndex]
  document.getElementById('fact').innerHTML = funFact;
}

const list = []
for (const animal in animals) {
    list.push(
      <img
        onClick={displayFact}
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        title={animal}
        aria-label={animal}
        role="button"
      />
    )
}

const background = <img
  className="background"
  alt="ocean"
  src="./images/ocean.jpg"
/>
const title = '';
const showBackground = true; // if true, show the background
const animalFacts = (
  <div>
    <h1>{title ?  title : 'Click an animal for a fun fact'}</h1>

    {/* if showBackground && is true, show the background */}
    {showBackground && background}

    <p id="fact"></p>

    <div className="animals">
      {list}
    </div>
  </div>
)

root.render(animalFacts);
