/*
recoger valor del input cuando usuario de click en el boton
    agregar event listener
    encontrar el elemento con id sign para insertar imagen
    para cada una de las letras del input
        crear elemnto <img> para insertar imagen
        darle al <img> el path para encontrar imagen deseada "src"
        insertar imagen dentro del elemento con id sign
     
dependiendo de la cantidad de letras va a devolver precio completo
*/

const start = e => {
    e.preventDefault();

    const inputMsg = inputText.value.toUpperCase();

    generateSign(inputMsg);
    calcCostPerImg(inputMsg);
}

const generateSign = image => {
    textContainer.innerHTML = "";
    textContainer.classList.add('active');

    createAndAppendThunder(textContainer);
    
    for (let i = 0; i < image.length; i++) {
        const letter = image[i];

        if(letter == " ") {
            createAndAppendThunder(textContainer);
        } else {
            const letterImg = document.createElement('img');
            letterImg.src = `./assets/abc/${letter}.png`;
            textContainer.appendChild(letterImg);
        }
    }

    createAndAppendThunder(textContainer);
}

const createAndAppendThunder = () => {
    const thunderImg = document.createElement('img');
    thunderImg.src = `./assets/abc/THUNDER.gif`;
    textContainer.appendChild(thunderImg);
}

const calcCostPerImg = inputMsg => {
    const imageCost = 10;
    const totalImg = inputMsg.length * imageCost;
    // priceContainer.appendChild(totalImg);

    priceContainer.innerHTML = `
        <h2>Your price is $ ${totalImg}</h2>
    `;
}

const inputText = document.querySelector('.insert-text');
const createSignBtn = document.querySelector('.submit-text');
const textContainer = document.querySelector('#sign');
const priceContainer = document.querySelector('#price');

createSignBtn.addEventListener('click', start);
