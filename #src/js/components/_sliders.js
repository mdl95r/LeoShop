const btn_next = $('.js-btn-next');
const btn_prev = $('.js-btn-prev');

// главный слайдер

// предыдущий слайд

function prevSlide() {
    const current = $('.banner-item--active');
    const last = $('.banner-item').last();

    last.clone().prependTo('.banner-list');
    last.remove();
    current.animate({ opacity: 0.3 }, 1000).removeClass('banner-item--active');
    current.prev().animate({ opacity: 1 }, 1000).addClass('banner-item--active');
}

$(btn_prev).on('click', function () {
    prevSlide();
});

// Управление клавиатурой
$(btn_prev).on('focus', function () {
    $(window).on('keydown', function (event) {
        if (event.keyCode == 37) {
            prevSlide();
        }
    });
});

$(btn_prev).on('blur', function () {
    $(window).off('keydown');
})

function nextSlide() {
    const current = $('.banner-item--active');

    $(current).next().animate({ opacity: 1 }, 1000).addClass('banner-item--active');
    $(current).remove();
    $(current).clone().appendTo('.banner-list').animate(
        { opacity: 0.3 }, 1000).removeClass('banner-item--active').next();
}
// следующий слайд
$(btn_next).on('click', function () {
    nextSlide();
});

// Управление клавиатурой
$(btn_next).on('focus', function () {
    $(window).on('keydown', function (event) {
        if (event.keyCode == 39) {
            nextSlide();
        }
    });
});

$(btn_next).on('blur', function () {
    $(window).off('keydown');
})


// слайдер в сайдбаре
$('.banner-swipe__item').on('click', function () {
    const item_active = $('.banner-swipe__item--active');
    const SideBarBanner = $('.sidebar-banner__item--active');
    const index = $(this).index() + 1;

    $(item_active).removeClass('banner-swipe__item--active');

    $(this).addClass('banner-swipe__item--active');

    $(SideBarBanner).animate({ opacity: 0.3 }, 800).removeClass('sidebar-banner__item--active');

    $("#slide_" + index).animate({ opacity: 1 }, 800).addClass("sidebar-banner__item--active");
});

// слайдер в single.html
$('.card-slider-list__item').on('click', function () {
    const cardSlider = $('.current-image__img--active');
    const index = $(this).index() + 1;

    $(cardSlider).animate({ opacity: 0.3 }, 800).removeClass('current-image__img--active');
    $("#card-slide_" + index).animate({ opacity: 1 }, 800).addClass("current-image__img--active");
});

// слайдер с 10 подобными продуктами

$('.same-products-slider__btn-prev').on('click', function () {
    const listItems = $('.same-products__list');
    const item = $('.same-products__item');
    const lastItem = item.last();

    $(lastItem).clone().prependTo(listItems);
    $(lastItem).remove();
});

$('.same-products-slider__btn-next').on('click', function () {
    const listItems = $('.same-products__list');
    const item = $('.same-products__item');
    const firstItem = item.first();

    $(firstItem).clone().appendTo(listItems);
    $(firstItem).remove();
})