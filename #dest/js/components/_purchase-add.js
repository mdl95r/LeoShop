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
