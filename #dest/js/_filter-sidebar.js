$('.filter-btn').on('click', function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
});


