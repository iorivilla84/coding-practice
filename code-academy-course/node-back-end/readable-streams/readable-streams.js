const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});

//assign each shopping item value to Item:
const printData = (data) => {
  console.log(`Item: ${data}`);
}

myInterface.on('line', printData);
