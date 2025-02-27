// let lastClickedAccordion = null;
const expandContent = (accordion, group) => {
    const currentActiveAccordion = accordion.currentTarget.parentElement.nextElementSibling;
    const toggleAccordionBtn = accordion.currentTarget;


    if (!accordion.target) return;

    const allAccordions = document.querySelectorAll(`[data-group="${group}"]`);

    allAccordions.forEach(acc => {
        const txtContent = acc.parentElement.nextElementSibling;
        console.log(txtContent);
        if (txtContent !== currentActiveAccordion) {
            txtContent.style.maxHeight = null;
            acc.classList.remove('open')
        }
    })

    // if (lastClickedAccordion && lastClickedAccordion !== currentActiveAccordion) {

        
    //     console.log(previousButton);
    //     if (previousButton) {
    //     }
    // }

    if (currentActiveAccordion.style.maxHeight) {
        currentActiveAccordion.style.maxHeight = null;
        // lastClickedAccordion = null;
        toggleAccordionBtn.classList.remove('open')
    } else {
        currentActiveAccordion.style.maxHeight = currentActiveAccordion.scrollHeight + 'px';
        toggleAccordionBtn.classList.add('open')
        // lastClickedAccordion = currentActiveAccordion;
    }
}

const activateDropdown = (selector, group) => {
    const accordionSelector = document.querySelectorAll(selector);

    accordionSelector.forEach(accordion => {
        accordion.setAttribute('data-group', group)
        accordion.addEventListener('click', (e) => {
            e.preventDefault()
            expandContent(e, group)
        })
    })

}

const initDropdown = () => {
    activateDropdown('.accordion-header', 'group1');
    activateDropdown('.accordion-header2', 'group2');
}

initDropdown()
