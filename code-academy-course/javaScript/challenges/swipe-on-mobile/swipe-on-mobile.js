const swipeEventHandler = (container) => {
    if (!container && !container.length) {
        return;
    }

    let touchStartX = 0;
    let touchEndX = 0;
    let lastSwipedElement = null;

    function handleGesture(touchStartX, touchEndX, e) {
        const delx = touchEndX - touchStartX;
        const direction = touchEndX < touchStartX ? 'left' : 'right';
        console.log(delx);
        if(Math.abs(delx) && direction === 'left') {
            console.log('left');
            if (lastSwipedElement && lastSwipedElement !== e.currentTarget || !delx) {
                lastSwipedElement.classList.remove('is-swiped');
            }
            e.currentTarget.classList.add('is-swiped');
            lastSwipedElement = e.currentTarget;
        } else if (direction === 'right') {
            e.currentTarget.classList.remove('is-swiped');
            console.log('right');
        } else if (touchEndX === touchStartX) {
            console.log('tap');
        }
        return delx;
    }

    const handleClickOutside = (event) => {
        const isInside = Array.from(container).forEach(box => {
            box.contains(event.target);
            console.log('target outside', box.contains(event.target));
        });

        if (!isInside) {
            Array.from(container).forEach(box => {
                box.classList.remove('is-swiped');
                console.log('clicked outside');
            })
        }
    }

    container.forEach(box => {
        box.addEventListener('touchstart', event => {
            event.preventDefault();
            touchStartX = event.changedTouches[0].screenX;
        }, false);
    })

    container.forEach(box => {
        box.addEventListener('touchend', event => {
            event.preventDefault();
            touchEndX = event.changedTouches[0].screenX
            if (touchEndX) {
                handleGesture(touchStartX, touchEndX, event);
            }
        }, false);
    });

    const isTouchDevice = () => 
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice() === true) {
        document.addEventListener('click', handleClickOutside);
    } else {
        document.removeEventListener('click', handleClickOutside, false);
    }

    window.addEventListener('resize', function(event) {
        console.log(isTouchDevice());

        const timeOut = setTimeout(function() {
            if (isTouchDevice() === true) {
                document.addEventListener('click', handleClickOutside, true);
                console.log('tough is true');
            } else {
                document.removeEventListener('click', handleClickOutside, false);
                console.log('tough is false ');
            }
        }, 100) 
        this.clearTimeout(timeOut)       
    });
}

const initSwipeElement = (container) => {
    const swipeElement = document.querySelectorAll(container)
    swipeEventHandler(swipeElement);
}

initSwipeElement('.box');