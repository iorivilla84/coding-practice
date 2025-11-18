const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

/*
Component functions / classes → Capitalized (App, Greeting, MyButton)
Helpers / hooks / ordinary functions → lowercase (calculateSum, fetchData)
 */
function DvComponent() {
    return <h1>Hello world</h1>;
}

function NewQuote() {
    return (
      <blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite>
          <a target="_blank" 
            href="https://en.wikipedia.org/wiki/Susan_Sontag">
            Susan Sontag
          </a>
        </cite>
      </blockquote>
    )
}

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

//Define function component here:
function Owl() {
  return (
    <div>
      <h1>{owl.title}</h1>
      <img style={{width: '30%'}} src={owl.src} alt={owl.title} />
    </div>
  )
}

const friends = [
    {
      title: "Yummmmmmm",
      src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
      title: "Hey Guys! Wait Up!",
      src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
      title: "Yikes",
      src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
];

  // New function component starts here:
function Friend() {
    const friend = friends[1]
    return (
        <div>
        <h1>{friend.title}</h1>
        <img style={{width: '30%'}} src={friend.src} />
        </div>
    )
}

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan() {
  if (fiftyFifty === true) {
    return <h1>Tonight I'm going out WOOO</h1>
  } else {
    return <h1>Tonight I'm going to bed WOOO</h1>
  }
}

// Events Handlers in a component
function SubmitButton() {
    function handleClick() {
      alert('Submission Successful.');
    }
    return <button onClick={handleClick}>Submit</button>;
  }

root.render(
    <div>
        <SubmitButton />
        <DvComponent />
        <NewQuote />
        <Owl />
        <Friend />
        <TonightsPlan />
    </div>
)

// export { NewQuote, DvComponent, Owl }
