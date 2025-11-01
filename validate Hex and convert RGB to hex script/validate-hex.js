
'use strict';

/**
 * Check if input has a valid hex color code.
 * @param {string} input - The input color (e.g., `#FFFFFF`).
 * @returns {string} A valid hex color code.
 */
function validateHexColor(input) {
    const hexPattern = /^#[0-9A-F]{3,6}$/i;
    const rgbPattern = /^rgb\((([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s?){2}([01]?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$/i;
    let validColour = '';

    // Check if the input colour is valid to print the hex colour
    if (hexPattern.test(input)) {
        validColour = input;
    }

    // Check if the RGB input colour is valid to convert RGB and print it as hex colour
    if (rgbPattern.test(input)) {
        // Convert RGB to HEX
        const rgb = input.match(/\d+/g).map(Number);
        validColour = '#' + rgb.map(value => value.toString(16).padStart(2, '0')).join('');
    }

    return validColour ? `style='background-color: ${validColour.toUpperCase()}'` : '';
}

module.exports = {
    validateHexColor: validateHexColor
};