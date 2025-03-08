const removeElClass = (selector, className) => {
    selector.forEach(el => el.classList.remove(className))
}

const classHandler = selector => {
    const currentRatingEl = document.querySelectorAll(selector);
    const errorMessage = document.querySelector('.error-message');

    if (!currentRatingEl.length) return;

    currentRatingEl.forEach(number => {
        const ratingVal = number;

        ratingVal.addEventListener('click', function() {
            removeElClass(currentRatingEl, 'selected');
            ratingVal.classList.add('selected');
            if (errorMessage !== '') errorMessage.innerHTML = '';
        })

        removeElClass(currentRatingEl, 'selected');
    })
}

const getRatingValue = selector => {
    const currentRatingEl = document.querySelector(selector);
    if (currentRatingEl) {
        return Number(currentRatingEl.innerText);
    }
}

const submitRating = (selector, submit) => {
    if (!selector && !submit) return;

    const resultContainer = document.querySelector('.ratings-result-wrapper');
    const submitBtnEl = document.querySelector(submit);
    const thankYouMessage = document.querySelector('.rating-message');
    const errorMessage = document.querySelector('.error-message');

    submitBtnEl.addEventListener('click', function(e) {
        if (!submitBtnEl) return;
        const ratingVal = getRatingValue(selector)

        e.preventDefault();
        if (ratingVal) {
            thankYouMessage.innerHTML = `You selected ${ratingVal} out of 5`;
            resultContainer.style.display = 'block'
            resultContainer.previousElementSibling.style.display = 'none'
        } else {
             errorMessage.innerHTML = 'Please select rating';
         }
    })
}

const resetRatings = (selector, resetBtn) => {
    const backBtnEl = document.querySelector(resetBtn);
    const resultContainer = document.querySelector(selector);
    backBtnEl.addEventListener('click', () => {
        resultContainer.style.display = 'none'
        resultContainer.previousElementSibling.style.display = 'block'
        classHandler('.number');
    })
}

const initRatings = () => {
    classHandler('.number');
    submitRating('.number.selected', '.submit-btn');
    resetRatings('.ratings-result-wrapper', '.back-btn')
}

initRatings();