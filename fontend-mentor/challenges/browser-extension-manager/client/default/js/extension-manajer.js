import { cardsEventHandler } from './helpers/eventHandlerHelper.js';
let currentCardsArray = []; // Global scope

/**
 * Fetch and returns data object from json file
 * @returns {Object} Object containing each cards details
 */
async function getJsonData() {
    const res = await fetch('extensions.json');
    const data = await res.json();

    return data;
}

/**
 * Prints and returns data object from json file
 * @returns {Object} Object an array of the extension object otherwise undefined
 */
async function printExtensionsData() {
    const getData = await getJsonData();

    if (!getData) {
        return;
    }

    return getData;
}

/**
 * Creates and appends cards to the front end
 * @param {String} cards - The individual card container element selector
 * @returns {void}
 */
const createAndAppendCard = async (cards) => {
    const getExtensionData = await printExtensionsData();
    const cardsWrapper = document.querySelector(cards);

    if (!cardsWrapper) {
        return;
    }

    for (const app of getExtensionData) {
        cardsWrapper.innerHTML += `
        <div class="extension-card" data-is-active="${app.isActive}">
            <div class="extension-info">
                <div class="extension-logo">
                    <img src="${app.logo}" alt="">
                </div>
                <div class="extension-content">
                    <h2>${app.name}</h2>
                    <p>${app.description}</p>
                </div>
            </div>
            <div class="extension-actions">
                <button class="remove-btn" type="button">Remove</button>
                <button class="switch-btn" aria-controls="active" type="button"><span class="switch-toggle-btn"></span></button>
            </div>
        </div>
        `
    }
}

/**
 * Removes a card from the DOM and Updates the current cards array
 * @param {HTMLElement} btn - The remove button element
 * @param {HTMLElement} cardWrapper - The wrapper containing all the card elements
 * @returns {void}
 */
const removeAndUpdateCardsArray = (btn, cardWrapper) => {
    btn.addEventListener('click', () => {
        const cardContent = btn.closest('.extension-card');
        
        if (!cardContent) {
            return;
        }

        cardContent.remove();
        currentCardsArray = currentCardsArray.filter(card => card !== cardContent);
    });
};

/**
 * Filters and append 'active', 'inactive' or all cards to the DOM the
 * based on the selected filter button
 * @param {HTMLElement} btn - The remove button element
 * @param {HTMLElement} cardWrapper - The wrapper containing all the card elements
 * @returns {void}
 */
const filteredCards = (btn, cardWrapper) => {
    btn.addEventListener('click', () => {
        const filteredStates = btn.getAttribute('aria-controls');
        let newCardsArray = [];

        if (filteredStates === 'active') {
            newCardsArray = currentCardsArray.filter(card => card.getAttribute('data-is-active') === 'true');
        } else if (filteredStates === 'inactive') {
            newCardsArray = currentCardsArray.filter(card => card.getAttribute('data-is-active') === 'false');
        } else {
            newCardsArray = [...currentCardsArray];
        }

        cardWrapper.innerHTML = '';
        newCardsArray.forEach(card => cardWrapper.appendChild(card));
    });
};

/**
 * Render the cards based on the selected filter button
 * or based on the card removed from the DOM
 * @returns {void}
 */
const renderFilteredCards = () => {
    const cardWrapper = document.querySelector('.extension-wrapper');
    
    if (!cardWrapper) {
        return
    }

    currentCardsArray = Array.from(cardWrapper.querySelectorAll('.extension-card'));

    // Update cards array based on the card status
    const removeBtnEl = document.querySelectorAll('.remove-btn');
    removeBtnEl.forEach(btn => removeAndUpdateCardsArray(btn, cardWrapper));

    // Update cards array based on the card status
    const filtersBtn = document.querySelectorAll('.filter-btn button');
    filtersBtn.forEach(btn => filteredCards(btn, cardWrapper));

    cardsEventHandler('.extension-card');
};

/**
 * Initialises and renders the extension cards
 * @returns {void}
 */
const initCards = async () => {
    await createAndAppendCard('.extension-wrapper');
    renderFilteredCards();
};

export { initCards }
