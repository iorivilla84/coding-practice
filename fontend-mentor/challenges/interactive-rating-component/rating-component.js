// Utility function to remove all classes from elements
const removeAllClasses = (elements, className) => {
    elements.forEach(el => el.classList.remove(className));
}

// Function to handle rating selection
const classHandler = selector => {
    const ratingElements = document.querySelectorAll(selector);
    const errorMessage = document.querySelector('.error-message');

    if (!ratingElements.length) return;

    ratingElements.forEach(rating => {
        rating.addEventListener('click', function() {
            removeAllClasses(ratingElements, 'selected'); // Remove 'selected' from all
            rating.classList.add('selected'); // Add 'selected' to clicked one
            if (errorMessage) errorMessage.innerHTML = ''; // Clear error
        });
    });
    removeAllClasses(ratingElements, 'selected');
}

// Function to get the selected rating value
const getRatingValue = selector => {
    const selectedElement = document.querySelector(selector);
    return selectedElement ? Number(selectedElement.innerText) : null;
}

// Function to handle rating submission
const submitRating = (selector, submitBtnSelector) => {
    const submitBtn = document.querySelector(submitBtnSelector);
    const resultContainer = document.querySelector('.ratings-result-wrapper');
    const thankYouMessage = document.querySelector('.rating-message');
    const errorMessage = document.querySelector('.error-message');

    if (!submitBtn) return;

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const ratingValue = getRatingValue(selector);

        if (ratingValue) {
            thankYouMessage.innerHTML = `You selected ${ratingValue} out of 5`;
            resultContainer.style.display = 'block';
            resultContainer.previousElementSibling.style.display = 'none';
        } else {
            if (errorMessage) errorMessage.innerHTML = 'Please select a rating';
        }
    });
}

// Function to reset rating selection when going back
const resetRatings = (selector, backBtnSelector) => {
    const resultContainer = document.querySelector('.ratings-result-wrapper');
    const backBtn = document.querySelector(backBtnSelector);

    if (!backBtn) return;

    backBtn.addEventListener('click', () => {
        resultContainer.style.display = 'none';
        resultContainer.previousElementSibling.style.display = 'block';
        classHandler(selector); // Reset rating selection
    });
}

// Initialize rating system
const initRatings = () => {
    classHandler('.number'); // Handle rating selection
    submitRating('.number.selected', '.submit-btn'); // Handle submission
    resetRatings('.number', '.back-btn'); // Handle reset
}

// Start the script
initRatings();
