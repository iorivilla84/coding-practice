const fullName = 'Diego';
const lastName = 'Velasquez';
const myWife = 'Jessica';
const company = 'True Alliance';
let yearsAtWork = 1;
const country = 'Australia';
let famillyResult = `
    My Name is ${fullName} ${lastName}, my wife's name is ${myWife},
    I've been working for ${yearsAtWork} year at ${company} and I live in ${country}
`;
console.log(famillyResult);
console.log('Hola, mi nombre es: ' + fullName + ' ' + lastName + ' y vivo en ' + country);

yearsAtWork = 2;
console.log(yearsAtWork);

let myFamilly = ['Jessica', 'Benji', 'Alba'];
console.log(myFamilly);
console.log(myFamilly.length == 3);
let tipoFamiliar = myFamilly.indexOf('Benji'); // tells you which position is the element on
console.log(tipoFamiliar);
let tipoFamiliar2 = myFamilly.indexOf('Alba'); // tells you which position is the element on
console.log(tipoFamiliar2);

myFamilly.push('Carlos');
console.log(myFamilly);

let expandFamilly = myFamilly.concat(['Carlos', 'Victor']);
console.log(expandFamilly);
console.log(expandFamilly.length);
console.log(expandFamilly.length == 6);
console.log(expandFamilly, typeof expandFamilly);
expandFamilly[3] = 'Diego';
console.log(expandFamilly[3]);
console.log(expandFamilly);

let changeComaToGuion = expandFamilly.join(' - '); // it transforms an array into a string
console.log(changeComaToGuion);
console.log(changeComaToGuion, typeof changeComaToGuion);

myFamilly.pop();
console.log(myFamilly);

let myAddress = '919 Botany Road';
let myAdressResult = myAddress.includes('B');
console.log(myAdressResult);
console.log(myAddress, typeof myAddress);

let myEmail = 'iorivilla@hotmail.com';
let resultEmail = myEmail.includes('@');
console.log(resultEmail);
console.log(myEmail, typeof myEmail);

let miEdadActual = 38;
console.log(miEdadActual === 38);
console.log(miEdadActual, typeof miEdadActual);

let miResultado = '1';
miResultado = Number(miResultado);
console.log(miResultado + 1);

let myScoreResults = String(50);
console.log(myScoreResults);
console.log(myScoreResults, typeof myScoreResults);

let theScoreResult = Boolean(100);
console.log(theScoreResult, typeof theScoreResult);

let theScoreResult2 = Boolean('0');
console.log(theScoreResult2, typeof theScoreResult2);

let theScoreResult3 = Boolean(0);
console.log(theScoreResult3, typeof theScoreResult3);
