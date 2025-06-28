import { initCards } from './extension-manajer.js';

/**
 * Initialise the extensions cards application
 * @returns {void}
 */
const init = () => {
    initCards();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});
