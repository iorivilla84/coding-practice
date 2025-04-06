const cardsConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": true,
    "dots": true,
    "infinite": false,
    "centerMode": false,
    "respondTo": "window",
    "focusOnChange": false,
    "swipeToSlide": true,
    "mobileFirst": true,
    "responsive": [
        {
            "breakpoint": 576,
            "settings": {
              "slidesToShow": 2
            }
        },
        {
            "breakpoint": 960,
            "settings": {
                "slidesToShow": 4
            }
        }
    ]
}

function updateCarouselState(slick, currentSlide) {
    const $slider = slick.$slider
    const lastSlideIndex = slick.slideCount - slick.options.slidesToShow;
    console.log('carousel is init', slick);

    const $prevArrow = $('.prev-arrow');
    const $nextArrow = $('.next-arrow');

    $prevArrow.on('click', function() {
        slick.$prevArrow.click();
    });

    $nextArrow.on('click', function() {
        slick.$nextArrow.click();
    });

    if (currentSlide === 0) {
        $slider.addClass('is-first-slide');
        $prevArrow.attr('disabled', true);
    } else {
        $slider.removeClass('is-first-slide');
        $prevArrow.attr('disabled', false);
    }

    if (currentSlide >= lastSlideIndex) {
        $slider.addClass('is-last-slide');
        $nextArrow.attr('disabled', true);
    } else {
        $slider.removeClass('is-last-slide');
        $nextArrow.attr('disabled', false);
    }
}

function getTotalPages(slick, currentSlide) {
    const $carouselControl = $('.slide-count');
    const totalPages = slick.slideCount - slick.options.slidesToShow;
    currentSlide = slick.currentSlide ? slick.currentSlide + 1 : 1;
    $carouselControl.text(`${currentSlide} / ${totalPages + 1}`);
}

function initializeCardsCarousel($carousel) {
    $carousel.on('swipe', function(event, slick, direction, nextSlide) {
        // console.log(direction === 'left');
    });

    // On edge hit
    $carousel.on('init', function(event, slick) {
        getTotalPages(slick);
        updateCarouselState(slick, slick.currentSlide);
    });

    $carousel.on('beforeChange', function(event, slick, currentSlide) {

    });

    $carousel.on('afterChange', function(event, slick, currentSlide) {
        getTotalPages(slick);
        updateCarouselState(slick, currentSlide)
    });
}

function initCardsCarousel($carousel) {
    if (!$carousel && !$carousel.length) {
        return
    }

    initializeCardsCarousel($carousel)
    $carousel.slick(cardsConfig);
}

initCardsCarousel($('.carousel-container'))
