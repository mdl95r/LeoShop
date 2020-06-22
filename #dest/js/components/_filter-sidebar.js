$('.brand-list').hide();
$('.shape-list').hide();
$('.size-list').hide();

$('.filter-title').on('click', function(){
    $(this).next().toggleClass('active');
    $(this).siblings('.filter-list').slideToggle();
});