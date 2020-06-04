let w = $(window).width();
const hamburger_btn = $('#hamburger-btn');

$(hamburger_btn).on('click', function() {
    $(this).toggleClass('active');
    $('.nav-menu__list').addClass('active');
    $('.nav-menu__list.active').slideToggle(400);
});

$(window).on('resize', function() {
    if( w != $( window ).width() ){

        $(hamburger_btn).removeClass('active');
        $('.nav-menu__list').removeClass('active').css('display', '');
    
        w = $( window ).width();
    
        delete w;
      }
});