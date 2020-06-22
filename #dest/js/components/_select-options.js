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