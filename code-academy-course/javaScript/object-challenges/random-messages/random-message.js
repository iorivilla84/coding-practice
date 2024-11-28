const randomMessages = {
    message1: 'Regular check-ins can significantly improve alignment and ensure everyone is on the same page',
    message2: 'Consider using collaborative tools like shared whiteboards or project management apps to streamline communication',
    message3: 'Celebrate small wins together to boost morale and foster a sense of team accomplishment',
    message4: 'Clear role definitions help avoid confusion and ensure everyone knows their responsibilities in the project',
    message5: 'Scheduling weekly stand-ups helps keep everyone informed and aligned on priorities',
    message6: 'Encourage open feedback within the team to address challenges and improve processes collaboratively',
    message7: 'Leveraging shared digital workspaces can make real-time collaboration more efficient and transparent',
    message8: 'Fostering a culture of trust and open communication encourages team members to share ideas freely and collaborate effectively'
}
console.log(typeof randomMessages);

const getRandomMessage = obj => {
    let arr = []
    for (let message in obj) {
        arr.push(obj[message])
    }
    return arr;
}

const outputRandomMessage = arr => {
    const message = getRandomMessage(arr);
    console.log(message[Math.floor(Math.random() * message.length)]);
    console.log('length', message.length);
    const returnRandomMessage = message[Math.floor(Math.random() * message.length)];
    return returnRandomMessage;
}

const messageOutput = document.querySelector('.random-message');
messageOutput.innerHTML = outputRandomMessage(randomMessages);


// OPTON 2
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

function fortuneSelector(){
    let randomFortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomFortune];
}
console.log(typeof fortunes);
const messageOutput2 = document.querySelector('.random-message2');
messageOutput2.innerHTML = fortuneSelector();
