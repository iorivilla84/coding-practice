const trigger = $('.et_mobile_menu .first-level > a');
const secondLevel = $('.second-level');

// function show() {
//     //secondLevel.css('display', 'none');
//     console.log(trigger);

//     trigger.click(function (click) { /* option of click 1 */
//         //secondLevel.css({"display": 'block'});
//         if(click) {
//             $(".sub-menu").toggleClass('active');
//         }

//     });
// }

// show();

const trigger1 = document.querySelector('.et_mobile_menu .first-level > a');
const subm = document.querySelector('.sub-menu');
-
trigger1.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (subm.classList.contains('active')) {
        subm.classList.remove('active')
    } else {
        subm.classList.add('active')
    }
});
