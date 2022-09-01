console.log("<----forLoop---->");
for (i = 0; i < 5; i++) {
    console.log('in Loop ', i);
    break;
};

const myFamilyNames = ['Jessica ', 'Benji ', 'Alba'];
console.log("<---- forLoop with array---->");
for (let i = 0; i < myFamilyNames.length; i++) {
    let html = `
        <div>
            <h1>${myFamilyNames[i]}</h1>
        </div>
    `;
    console.log(html);
};

let l = 0;
while (l < 5) {
    console.log('loop in ', l);
    l++
}

const famVelNames = ['Jessica ', 'Benji ', 'Alba'];
let f = 0;
console.log("<---- While Loop with array---->");
while (f < famVelNames.length) {
    console.log(famVelNames[f]);
    f++;
}

console.log("<---- Do While Loop---->");
let numB = 8;
do {
    console.log('The final number is', numB);
    numB++;
} while ( numB < 10);

console.log("<---- If Statements ---->");
let myAge = 25;

if (myAge >= 50) {
    console.log('Too old');
} else if (myAge >= 40) {
    console.log(" getting there ");
} else {
    console.log('you are still a long way to go');
}

let personalPss = 'MyP@assword_20';

if (personalPss.length >= 15) {
    console.log('you password is strong');
} else if (personalPss.length >= 10) {
    console.log('strong enough');
} else {
    console.log('not good enough');
}

if (personalPss.length >= 15 && personalPss.includes('@') && personalPss.includes('_')) {
    console.log('Pss very strong');
} else if (personalPss.length >=10 && personalPss.includes('@') && personalPss.includes('_')) {
    console.log('make it longer');
} else if (personalPss.length >= 10) {
    console.log('please use special characters');
} else {
    console.log('your pss must contain more than 10 letters');
}

console.log("<---- Logical Not ---->");
let miContra = false;
if (!miContra) {
    console.log('tienes que estar logueado para continuar');
}

console.log("<---- Switch Statements ---->");
const miCalificacion = 'C'
switch (miCalificacion) {
    case 'A':
        console.log('Resultado Perfecto');
        break;
    case 'B':
        console.log('Tienes una buena nota');
        break;
    case 'C':
        console.log('not tan mala nota');
        break;
    case 'D':
        console.log('Tienes que estudiar mas');
        break;
    default:
        console.log('Perdiste el examen');
}
