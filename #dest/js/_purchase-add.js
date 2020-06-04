let counter = 0;

// Обрабатываем нажатие для добавления товара в корзину и обновление счетчика товара
$('.list-items').on('click', '.card-item__purchase', function() {
    counter += 1;
    $('#count-goods').text(counter);
    $('#count-goods').attr('data-value', counter);
});