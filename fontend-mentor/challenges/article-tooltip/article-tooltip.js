const initTooltip = () => {
    const toolTipElDesk = document.querySelector('.sharing-tooltip');
    const tooltipElMob = document.querySelector('.article-sharing-wrapper-mobile');
    const windowSize = window.screen.width;

    if (windowSize > 576) {
        toolTipElDesk.classList.toggle('show');
    } else {
        tooltipElMob.classList.toggle('show');
    }
}

const addEventHandlers = (selectors) => {
    selectors.forEach(btn => {
        const sharingBtn = document.querySelector(btn);
        if (sharingBtn) {
            sharingBtn.addEventListener('click', e => {
                e.preventDefault();
                initTooltip();
            })
        }
    });
}

const initSharingTooltip = () => {
    addEventHandlers(['.share-button', '.share-button-mobile'])
}

initSharingTooltip();

// const shareBtn = document.querySelector('.share-button');
// shareBtn.addEventListener('click', e => {
//     e.preventDefault()
//     initTooltip()
// })

// const shareBtnMob = document.querySelector('.share-button-mobile');
// shareBtnMob.addEventListener('click', e => {
//     e.preventDefault()
//     initTooltip()
// })