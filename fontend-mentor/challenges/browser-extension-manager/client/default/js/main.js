import { initCards } from './extension-manajer.js';

/**
 * Initialise the extension cards application
 * @returns {void}
 */
const init = () => {
    initCards();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});
