/**
 * Handles filter button active states and card toggle (active/inactive) functionality on page load.
 * @param {String} cards - The individual card container element selector
 * @returns {void}
 */
const cardsEventHandler = (cards) => {
    const filterBtns = document.querySelectorAll('.filter-btn button');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'))

            btn.classList.add('active');
        })
    })

    const toggleBtn = document.querySelectorAll('.switch-toggle-btn');
    toggleBtn.forEach(btn => {
        const cardWrapper = btn.closest(cards);
        const isActive = cardWrapper.getAttribute('data-is-active') === 'true';

        if (!isActive) {
            btn.classList.add('inactive');
            btn.parentElement.classList.add('inactive');
            btn.parentElement.setAttribute('aria-controls', 'inactive');
        }

        btn.addEventListener('click', () => {
            btn.classList.toggle('inactive')
            btn.parentElement.classList.toggle('inactive');
            cardWrapper.dataset.isActive = cardWrapper.dataset.isActive === 'false' ? 'true' : 'false';

            const cardStateToggleBtn = btn.parentElement.getAttribute('aria-controls');
            const bntState = cardStateToggleBtn === 'active' ? 'inactive' : 'active';
            btn.parentElement.setAttribute('aria-controls', bntState)

            // Example below with find method
            // const allFilterBtns = [...filterBtns].find(btn => btn.innerHTML === 'All');
            // const isAllFilterActive = allFilterBtns.classList.contains('active');

            // simplified version
            const isAllFilterActive = document.querySelector('.filter-btn button[aria-controls="all"]')
                .classList.contains('active');
            if (!isAllFilterActive) {
                cardWrapper.remove()
            }
        });
    });
}

/**
 * Fetch the localStorage value and update body class based on the theme styles
 * @returns {void}
 */
const loadThemeFromLocalStorage = () => {
    const storedThemeValue = JSON.parse(localStorage.getItem('theme'));
    if (!storedThemeValue) {
        return;
    }

    const themeStyleSelector = document.querySelector('body');
    if (!themeStyleSelector) {
        return;
    }

    themeStyleSelector.classList.remove('is-dark', 'is-light');
    themeStyleSelector.classList.add(storedThemeValue);

    const themeToggleIcon = document.querySelector('.theme-toggle-btn span');
    if (themeToggleIcon) {
        themeToggleIcon.classList.remove('is-dark-icon', 'is-light-icon');
        themeToggleIcon.classList.add(storedThemeValue === 'is-dark' ? 'is-dark-icon' : 'is-light-icon');
    }
}

/**
 * Store the current theme style preference (light or dark) in localStorage
 * @returns {void}
 */
const storeThemeStylesInLocalStorage = () => {
    const themeStyleSelector = document.querySelector('body');

    if (!themeStyleSelector) {
        return;
    }

    const themeStyles = themeStyleSelector.classList.contains('is-dark') ? 'is-dark' : 'is-light';
    localStorage.setItem('theme', JSON.stringify(themeStyles));
    console.log(themeStyleSelector);
}

/**
 * Toggles the them styles between is-light, is-dark by updating the body
 * and toggle icon, then stores the selected value in localStorage
 * @returns {void}
 */
const switchThemesStyles = () => {
    const darkThemeStyleBtn = document.querySelector('.theme-toggle-btn .is-dark-icon');
    const darkTheme = document.querySelector('.is-dark');
    
    darkThemeStyleBtn.addEventListener('click', () => {
        darkThemeStyleBtn.classList.contains('is-dark-icon')
            ? darkThemeStyleBtn.classList.replace('is-dark-icon', 'is-light-icon')
            : darkThemeStyleBtn.classList.replace('is-light-icon', 'is-dark-icon');

        darkTheme.classList.contains('is-dark')
            ? darkTheme.classList.replace('is-dark', 'is-light')
            : darkTheme.classList.replace('is-light', 'is-dark');

        storeThemeStylesInLocalStorage();
    });
}

switchThemesStyles();
loadThemeFromLocalStorage();

export { cardsEventHandler };
