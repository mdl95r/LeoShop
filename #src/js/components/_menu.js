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

