console.log('<-------- function expression ---------->');
const intro = function() {
    console.log('Hello, my name is Diego');
}
intro();

console.log('<-------- Arguments and Parameters ---------->');
const dayGreeting = (name, time) => {
    console.log(`Good ${time} ${name}, how are you today?`);
};

dayGreeting('Diego', 'Evening');

const bookList = (fullname, time, title) => {
    console.log(`Your book this ${time} ${fullname} is: ${title}`);
};

bookList('Diego', 'Evening', 'The Hobbit');

const calcuNum = radius => {
    let myNum = 5 * radius * (5 + 2) + 1;
    console.log(myNum);
};

calcuNum(2);

console.log('<-------- Returning Values with arrow functions ---------->');
const myAreaCalc = elradio => {
    let miarea = 3.1415 * elradio**2;
    return miarea;
};

const areaResult = myAreaCalc(5)
console.log(areaResult);

console.log('<-------- Returning Values, return simple version ---------->');
const correctAera = myarea => {
    return 3.1415 * myarea**2;
}

const resultCorrectArea = correctAera(5);
console.log(resultCorrectArea);

console.log('<-------- Returning Values, arrow function simple version ---------->');
const perfectArea = fullarea => 3.1415 * fullarea**2;

const resultPerfectArea = perfectArea(5);
console.log(resultPerfectArea);

const saludando = () => "hola a todos";
const miSaludo = saludando();
console.log(miSaludo);

const miFactura = (producto, impuesto) => {
    let totalProd = 0;
    for(let i = 0; i < producto.length; i++) {
        totalProd = producto[i] + producto[i] * impuesto;
    };
    return totalProd;
};

console.log(miFactura([10,15,30], 0.2));

console.log('<-------- For each Method and Call Back ---------->');
const myLlamada = llamando => {
    let llamadaValor = 40;
    llamando(llamadaValor);
}

myLlamada(miValor => {
    console.log(miValor);
});

const miGente = ['Necia', 'George', 'Manolo', 'Alba', 'Carlos'];
miGente.forEach((persona, numero) => {
    console.log(`${numero} Hola senor(@) ${persona}`);
});

console.log('<-------- For each Method and Call Back OPTION 2 BELOWS ---------->');
const logMiGente = (persona, numero) => {
    console.log(`${numero} Hola senor(@) ${persona}`);
};

miGente.forEach(logMiGente);

console.log('<-------- For each Method inserting html ---------->');
const genteGeneral = ['Necia', 'George', 'Manolo', 'Alba', 'Carlos'];
const listaGente = document.querySelector('.mi-gente');

html = ``;
genteGeneral.forEach(lapersona => {
    html += `
        <li style="color: white; background: brown; border-bottom: 1px solid white; list-style: none; padding: 10px 20px;">${lapersona}</li>
    `;
});

console.log(html);
listaGente.innerHTML = html;

const nombresPersonas = ['Necia', 'George', 'Manolo', 'Alba', 'Carlos'];
const myUlLista = document.querySelector('.nombres');

miHtml = ``;
nombresPersonas.forEach(nombre => {
    miHtml += `
        <li style="background: #4d4d4d; color: white; padding: 10px 20px; margin-bottom: 5px;">${nombre}</li>
    `;
});

console.log(miHtml);
myUlLista.innerHTML = miHtml;

const miListaNombres = ['Jessica', 'Alba', 'Carlos', 'Sebastian', 'Benji'];
const listaEnUl = document.querySelector('.nomb-lista');

html = ``;
miListaNombres.forEach(elNombre => {
    html += `
        <li style="Background: orange; margin-bottom: 10px; padding: 25px 10px;">${elNombre}</li>
    `;
});

listaEnUl.innerHTML = html;

console.log('<-------- For each Method inserting html FINAL EXAMPLE ---------->');
const misConocidos = ['Gerardo', 'Jonny', 'Jules', 'Justin', 'Ricardo'];
const myUlGente = document.querySelector('.gente-conocida');

htmlUl = ``;
misConocidos.forEach(eachname => {
    htmlUl += `
        <li style="background: lightblue; color: darkblue; margin-bottom: 10px; padding: 20px 10px;">${eachname}</li>
    `;
});

myUlGente.innerHTML = htmlUl;
