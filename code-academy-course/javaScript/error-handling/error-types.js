// ------- Runtime Errors
console.log('This message will be printed to the console.');

function throwError (notDefinedVar) {
  return notDefinedVar;
}

throwError ()

console.log('Because of the error, this will not be printed!');

// ------- Constructing an error
console.log(new Error('User missing name'))

console.log('Will logging the error stop our program from running?');

// ------- Throw keyword
throw Error('Username or password does not match');

const theAlert = () => {
  return console.log('this is passed')
}

throw Error('The code is not passed');

// ------- Try / Catch Statement
try {
    throw Error('Try Error Message')
} catch (e) {
    console.log(e)
}

// ------- Handling with try...catch
function capAllElements(arr){
    let res = '';
    try {
      arr.forEach((el) => {
       res += el.toUpperCase() + ', ';
      });
    } catch (e) {
      console.log(e)
    }
    res = res.slice(0, -2);
    console.log(res.length - 1)
    return res;
}
  
const capList = ['PS5', 'XBox', 'Nintento Switch']

// capAllElements('Incorrect argument');
console.log(capAllElements(capList))
  