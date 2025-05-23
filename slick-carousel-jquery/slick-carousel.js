const cardsConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: false,
    respondTo: "window",
    focusOnChange: false,
    swipeToSlide: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 4
            }
        }
    ]
};

function updateCarouselState(slick, currentSlide) {
    const $slider = slick.$slider;
    const lastSlideIndex = Math.max(0, slick.slideCount - slick.options.slidesToShow);

    const $prevArrow = $('.prev-arrow');
    const $nextArrow = $('.next-arrow');

    // Unbind before binding to prevent stacking
    $prevArrow.off('click').on('click', function () {
        slick.slickPrev();
    });

    $nextArrow.off('click').on('click', function () {
        slick.slickNext();
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

function getTotalPages(slick) {
    const $carouselControl = $('.slide-count');
    const totalPages = Math.max(1, slick.slideCount - slick.options.slidesToShow + 1);
    const currentSlide = slick.currentSlide ? slick.currentSlide + 1 : 1;
    $carouselControl.text(`${currentSlide} / ${totalPages}`);
}

function initializeCardsCarousel($carousel) {
    if ($carousel.data('initialized')) return;
    $carousel.data('initialized', true);

    $carousel.on('swipe', function (event, slick, direction, nextSlide) {
        // Optional: swipe logic
    });

    $carousel.on('init', function (event, slick) {
        getTotalPages(slick);
        updateCarouselState(slick, slick.currentSlide);
    });

    $carousel.on('afterChange', function (event, slick, currentSlide) {
        getTotalPages(slick);
        updateCarouselState(slick, currentSlide);

        slick.$slider.find('.card-header').each(function () {
            const $this = $(this);
            if (!$this.hasClass('slick-initialized')) {
                $this.slick(imageConfig);
            } else {
                $this.slick('setPosition');
            }
        });
    });
}

function initCardsCarousel($carousel) {
    if (!$carousel || !$carousel.length) return;

    $carousel.each(function (index, carousel) {
        const $carousel = $(carousel);
        initializeCardsCarousel($carousel);
        $carousel.slick(cardsConfig);
    });
}

const imageConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    centerMode: false,
    respondTo: "window",
    focusOnChange: false,
    swipeToSlide: true,
    mobileFirst: true
};

function initImagesCarousel($carousel) {
    if (!$carousel || !$carousel.length) return;

    $carousel.each(function (index, carousel) {
        const $carousel = $(carousel);
        if (!$carousel.hasClass('slick-initialized')) {
            initializeCardsCarousel($carousel);
            $carousel.slick(imageConfig);
        }
    });
}

// Initialize carousels
$(document).ready(function () {
    initCardsCarousel($('.carousel-container'));
    // Only init .card-header if they're standalone, not nested
    initImagesCarousel($('.card-header'));

    $(window).on('resize', function () {
        $('.card-header.slick-initialized').each(function () {
            $(this).slick('setPosition');
        });
    });
});
