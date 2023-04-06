const start = e => {
    e.preventDefault();

    const insertMsg = inputText.value.toUpperCase().trim();

    createSignImages(insertMsg);
    priceForEachSign(insertMsg)
}

const createSignImages = image => {
    imagesContainer.innerHTML = '';
    imagesContainer.classList.add('active');

    createAndInsertThunder(imagesContainer);

    for (let i = 0; i < image.length; i++) {

        if (image[i] === " ") {
            createAndInsertThunder(imagesContainer);
        } else {
            const textImg = document.createElement('img');
            textImg.src = `./assets/abc/${image[i]}.png`;
            imagesContainer.appendChild(textImg);
        }
    }

    createAndInsertThunder(imagesContainer);
}

const createAndInsertThunder = () => {
    const thunderImg = document.createElement('img');
    thunderImg.src = `./assets/abc/THUNDER.gif`;
    imagesContainer.appendChild(thunderImg)
}

const priceForEachSign = eachLetter => {
    const pricePerLetter = 10;
    const totalPerSign = eachLetter.length * pricePerLetter;
    finalPriceContainer.innerHTML = `
        <h2>Sign Total Price: ${totalPerSign}</h2>
    `
}

const inputText = document.querySelector('.insert-text');
const insertBtn = document.querySelector('.submit-text');
const imagesContainer = document.querySelector('#sign');
const finalPriceContainer = document.querySelector('#price');

insertBtn.addEventListener('click', start)
