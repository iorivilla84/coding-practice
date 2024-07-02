let mySpaceship = {
    passengers: [{'name': 'Diego'}, {'name': 'Jessica'}],
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032 
    },
    crew: {
        captain: { 
            name: 'Sandra', 
            degree: 'Computer Engineering', 
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] 
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    electronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    },
    consoles: {
        name: 'Nintendo Switch',
        model: 2023,
        Games: ['Zelda', 'Mario', 'Mega Man'] 
    }
};

const init = () => {
    createAndAppendCard('.grid-container');
}

const createAndAppendCard = cardSelector => {
    const cardContainer = document.querySelector(cardSelector);

    for (let key in mySpaceship) {
        if (mySpaceship.hasOwnProperty(key)) {
            const cardEl = document.createElement('div');
            cardEl.classList.add('card');
            const html = `
                <h2 class="card-title">${key}</h2>
                <ul class="list-container">${generateList(mySpaceship[key])}</ul>
            `;
            cardEl.innerHTML = html;
            cardContainer.appendChild(cardEl);
        }
    }
}

const generateList = listEl => {
    let listHtml = '';
    if (Array.isArray(listEl)) {
        listEl.forEach(keyVal => {
            const innerHtml = generateList(keyVal);
            if (innerHtml.trim() !== '') {
                listHtml += `<li class="list-item">${innerHtml}</li>`;
            }
        })
    } else if (typeof listEl === 'object' && listEl !== null) {
        for (let keyVal in listEl) {        
            let value = listEl[keyVal];

            if (typeof value === 'object' && value !== null) {
                nestedHtml = generateList(value);
                if (nestedHtml.trim() !== '') {
                    listHtml += `<li class="list-item">${keyVal}: <ul class="list-subitem">${nestedHtml}</ul></li>`
                }
            } else if (value !== '' && value !== null) {
                listHtml += `<li class="list-item"><strong> ${keyVal}: </strong> ${value} </li>`;
            }
        }
    } else if (listEl !== '' && listEl !== null) {
        listHtml += `<li class="list-item">${listEl}</li>`
    }

    return listHtml;
}

// const generateList = (data) => {
//     let html = '';

//     if (Array.isArray(data)) {
//         data.forEach(item => {
//             const itemHtml = generateList(item);
//             if (itemHtml !== ) {
//                 html += `<li>${itemHtml}</li>`;
//             }
//         });
//     } else if (typeof data === 'object' && data !== null) {
//         for (let key in data) {
//             if (data.hasOwnProperty(key)) {
//                 let value = data[key];
//                 const valueHtml = typeof value === 'object' && value !== null ? `<ul>${generateList(value)}</ul>` : value;
//                 if (valueHtml) {
//                     html += `<li><strong>${key}:</strong> ${valueHtml}</li>`;
//                 }
//             }
//         }
//     } else if (data) {
//         html += `<li>${data}</li>`;
//     }

//     return html;
// }

init();