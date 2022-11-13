

class Tooltip {
    constructor(element){
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });
        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        });
    }
}

// initiate the reusable tooltip
// Menu tooltip
const tooltipMenu = new Tooltip(document.querySelector('.tooltip-menu'));
tooltipMenu.init();
// Footer Tooltip
const tooltipFooter = new Tooltip(document.querySelector('.tooltip-footer'));
tooltipFooter.init();

const btnMenu = document.querySelector('.constru');
btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
})
