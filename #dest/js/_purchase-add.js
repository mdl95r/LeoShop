let counter = 0;

// Обрабатываем нажатие для добавления товара в корзину и обновление счетчика товара
$('.list-items').on('click', '.card-item__purchase', function() {
    counter += 1;
    $('#count-goods').text(counter);
    $('#count-goods').attr('data-value', counter);
    // const global = $('#count-goods').attr('data-value');
    // localStorage.setItem('count', global);
    // console.log(global);
});

// const value = localStorage.getItem('count');
// $('#count-goods').text(value);
// $('#count-goods').attr('data-value', value);

