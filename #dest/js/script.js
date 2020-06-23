$(document).ready(function() {    
    // Обрабатываем нажатие для добавления товара в корзину и обновление счетчика товара
function addCounter() {
    let counter = 0;   
    return function() {
        return ++counter;
    };
}

currentCount = addCounter();

$('.list-items').on('click', '.card-item__purchase', function() { 
    count = currentCount();
    $('#count-goods').text(count);
    $('#count-goods').attr('data-value', count);
});

    const btn_next = $('.js-btn-next');
const btn_prev = $('.js-btn-prev');

// главный слайдер

// предыдущий слайд

function prevSlide() {
    const current = $('.banner-item.active');
    const last = $('.banner-item').last();
    
    last.clone().prependTo('.banner-list');
    last.remove();
    current.animate({opacity: 0.3}, 1000).removeClass('active');
    current.prev().animate({opacity: 1}, 1000).addClass('active');
}

$(btn_prev).on('click', function(){
    prevSlide();
});

// Управление клавиатурой
$(btn_prev).on('focus', function() {
    $(window).on('keydown', function(event) {
        if (event.keyCode == 37) {
            prevSlide();
        }
    });
});

$(btn_prev).on('blur', function() {
    $(window).off('keydown');
})

function nextSlide() {
    const current = $('.banner-item.active');
    
    $(current).next().animate({opacity: 1}, 1000).addClass('active');
    $(current).remove();
    $(current).clone().appendTo('.banner-list').animate(
        {opacity: 0.3}, 1000).removeClass('active').next();
}
// следующий слайд
$(btn_next).on('click', function(){
    nextSlide();
});

// Управление клавиатурой
$(btn_next).on('focus', function() {
    $(window).on('keydown', function(event) {
        if (event.keyCode == 39) {
            nextSlide();
        }
    });
});

$(btn_next).on('blur', function() {
    $(window).off('keydown');
})


// слайдер в сайдбаре
$('.banner-swipe__item').on('click', function(){
    const item_active = $('.banner-swipe__item.active');
    const SideBarBanner = $('.sidebar-banner__item.active');
    const index = $(this).index() + 1;

    $(item_active).removeClass('active');

    $(this).addClass('active');
    
    $(SideBarBanner).animate({opacity: 0.3}, 800).removeClass('active');

    $("#slide_" + index).animate({opacity: 1}, 800).addClass("active");
});

// слайдер в single.html
$('.card-slider-list__item').on('click', function(){
    const cardSlider = $('.current-image__img.active');
    const index = $(this).index() + 1;

    $(cardSlider).animate({opacity: 0.3}, 800).removeClass('active');
    $("#card-slide_" + index).animate({opacity: 1}, 800).addClass("active");
});

// слайдер с 10 подобными продуктами

$('.same-products-slider__btn-prev').on('click', function() {
    const listItems = $('.same-products__list');
    const item = $('.same-products__item');
    const lastItem = item.last();

    $(lastItem).clone().prependTo(listItems);
    $(lastItem).remove();
});

$('.same-products-slider__btn-next').on('click', function() {
    const listItems = $('.same-products__list');
    const item = $('.same-products__item');
    const firstItem = item.first();

    $(firstItem).clone().appendTo(listItems);
    $(firstItem).remove();
})
    const currencySelect = $('.js-currency-select');
const currencySelectBtn = $('.js-currency-select-btn');
const currency_list = $('.js-currency-list');
const currency_item = $('.currency-list__item');

const langSelect = $('.js-lang-select');
const langSelectBtn = $('.js-lang-select-btn');
const lang_list = $('.js-languages-list');
const lang_item = $('.languages-list__item');

// Обрабатываем нажатие по кнопке выбиратора валюты
$(currencySelectBtn).on('click', function() {
    $(this).toggleClass('open');
    $(currency_list).slideToggle(200);
});

// Обрабатываем нажатие по item'у валюты
$(currency_item).on('click', function() {
    $('.currency-list__item.active').removeClass('active');
    $(this).addClass('active');
    const currentCurency = $('.currency-list__item.active').text();
    $(currencySelectBtn).text(currentCurency);
    currency_list.slideUp(100);
    $(currencySelectBtn).removeClass('open');
});


// Обрабатываем нажатие по кнопке выбиратора валюты
$(langSelectBtn).on('click', function() {
    $(this).toggleClass('open');
    $(lang_list).slideToggle(200);
});

// Обрабатываем нажатие по item'у языка
$(lang_item).on('click', function() {
    $('.languages-list__item.active').removeClass('active');
    $(this).addClass('active');

    const currentlang = $('.languages-list__item.active').text();

    $(langSelectBtn).text(currentlang);
    lang_list.slideUp(100);
    $(langSelectBtn).removeClass('open');
});

// При нажатии за областью списка выбиратора языков и валют, скрываем список языков и валют
$(document).on('mouseup',function(e) {
    if (currencySelect.has(e.target).length === 0){
        currency_list.hide();
        $(currencySelectBtn).removeClass('open');
    }

    if (langSelect.has(e.target).length === 0){
        lang_list.hide();
        $('.lang-select__btn').removeClass('open');
    }
});
    const hamburger_btn = $('#hamburger-btn');

$(hamburger_btn).on('click', function() {
    $(this).toggleClass('active');
    $('.nav-menu__list').addClass('active');
    $('.nav-menu__list.active').slideToggle(400);
});

function resize() {
    let w = $(window).width();

    return function() {
        if( w != $( window ).width() ){

            $(hamburger_btn).removeClass('active');
            $('.nav-menu__list').removeClass('active').css('display', '');
        
            w = $( window ).width();
        
            delete w;
          }
    }
}

windowRes = resize();

$(window).on('resize', function() {
    windowRes();
});


    $('.brand-list').hide();
$('.shape-list').hide();
$('.size-list').hide();

$('.filter-title').on('click', function(){
    $(this).next().toggleClass('active');
    $(this).siblings('.filter-list').slideToggle();
});
});
