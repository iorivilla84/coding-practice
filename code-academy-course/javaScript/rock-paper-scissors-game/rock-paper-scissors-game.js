console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  // if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  //   return userInput
  // } else {
  //   console.log('Try Again!')
  // }

  return userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
    ? userInput
    : console.log("Try Again!");
};

console.log(getUserChoice("paper"));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissors";
  }
};

console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a "TIE!"';
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won!'
    } else {
      return 'User Won!'
    }
  }
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won!'
    } else {
      return 'User Won!'
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won!'
    } else {
      return 'User Won!'
    }
  }
};

console.log(determineWinner('paper', 'paper'));

const playGame = () => {
  const theUserChoice = getUserChoice('rock');
  const theComputerChoice = getComputerChoice();
  console.log(theUserChoice);
  console.log(theComputerChoice)
  console.log('The Winner is: ' + determineWinner(theUserChoice, theComputerChoice));
}

playGame()
