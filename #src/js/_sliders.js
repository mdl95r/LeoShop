const btn_next = $('.js-btn-next');
const btn_prev = $('.js-btn-prev');

// главный слайдер
// предыдущий слайд
$(btn_prev).on('click', function(){
    const current = $('.banner-item.active');
    const last = $('.banner-item').last();
    
    last.clone().prependTo('.banner-list');
    last.remove();
    current.animate({opacity: 0.3}, 1000).removeClass('active');
    current.prev().animate({opacity: 1}, 1000).addClass('active');
});

// следующий слайд
$(btn_next).on('click', function(){
    const current = $('.banner-item.active');
    
    $(current).next().animate({opacity: 1}, 1000).addClass('active');
    $(current).remove();
    $(current).clone().appendTo('.banner-list').animate(
        {opacity: 0.3}, 1000).removeClass('active').next();
});

// слайдер в сайдбаре
$('ol li').on('click', function(){
    const item_active = $('.banner-swipe__item.active');
    const SideBarBanner = $('.sidebar-banner__item.active');
    const index = $(this).index() + 1;

    $(item_active).removeClass('active');

    $(this).addClass('active');
    
    $(SideBarBanner).animate({opacity: 0.3}, 800).removeClass('active');

    $("#slide_" + index).animate({opacity: 1}, 800).addClass("active");
});