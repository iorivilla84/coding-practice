const classHandler = selector => {
    const currentRatingEl = document.querySelectorAll(selector);
    const errorMessage = document.querySelector('.error-message');

    if (!currentRatingEl.length) return;

    currentRatingEl.forEach(number => {
        const ratingVal = number;

        ratingVal.addEventListener('click', function() {
            currentRatingEl.forEach(el => el.classList.remove('selected'))
            ratingVal.classList.add('selected');

            if (errorMessage !== '') {
                errorMessage.innerHTML = '';
            }
        })

        ratingVal.classList.remove('selected');
    })
}

const displayMessage = (selector, submit) => {
    if (!selector.length) return;
    
    const getRatingValue = () => {
        const currentRatingEl = document.querySelector(selector);
        if (currentRatingEl) {
            return Number(currentRatingEl.innerText);
        }
    }

    const resultContainer = document.querySelector('.ratings-result-wrapper');
    const submitRating = () => {
        const submitBtnEl = document.querySelector(submit);
        const thankYouMessage = document.querySelector('.rating-message');
        const errorMessage = document.querySelector('.error-message');

        submitBtnEl.addEventListener('click', function(e) {
            if (!submitBtnEl) return;
    
            e.preventDefault();
            if (getRatingValue()) {
                if (getRatingValue() === 5) {
                    thankYouMessage.innerHTML = 'You selected 5 out of 5';
                } else if (getRatingValue() === 4) {
                    thankYouMessage.innerHTML = 'You selected 4 out of 5';
                } else if (getRatingValue() === 3) {
                    thankYouMessage.innerHTML = 'You selected 3 out of 5';
                } else if (getRatingValue() === 2) {
                    thankYouMessage.innerHTML = 'You selected 2 out of 5';
                } else {
                    thankYouMessage.innerHTML = 'You selected 1 out of 5';
                }
                resultContainer.style.display = 'block'
                resultContainer.previousElementSibling.style.display = 'none'
            } else {
                 errorMessage.innerHTML = 'Please select rating';
             }
        })
    }

    classHandler('.number');
    submitRating()

    const backBtnEl = document.querySelector('.back-btn');
    backBtnEl.addEventListener('click', () => {
        resultContainer.style.display = 'none'
        resultContainer.previousElementSibling.style.display = 'block'
        classHandler('.number');
    })
}

const initRatings = () => {
    displayMessage('.number.selected', '.submit-btn');
}

initRatings();