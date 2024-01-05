console.log('<----- For Loop --------->');
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('<----- For-Of Loop --------->');
const users = ['Diego', 'Jessica', 'Benji', 'Bella'];

for (const user of users) {
    console.log(user);
}

console.log('<----- For-In Loop --------->');
const loggedInUser = {
    name: 'Diego',
    Age: 38,
    isAdmin: true
}

for (const propertyName in loggedInUser) {
    console.log(propertyName); // print key but no value Eg. name, age,etc
    console.log(loggedInUser[propertyName]); // print only the key value Eg. Diego, 38, etc
}

console.log('<----- While Loop --------->');
let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?')
}

console.log('Done!');
