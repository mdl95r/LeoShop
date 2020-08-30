$(document).ready(function () {
    $('.new-product').text('NEW!');
    $('.product-sale').text('SALE!');
    @@include("components/_purchase-add.js")
    @@include("components/_sliders.js")
    @@include("components/_select-options.js")
    @@include("components/_menu.js")
    @@include("components/_filter-sidebar.js")
});
