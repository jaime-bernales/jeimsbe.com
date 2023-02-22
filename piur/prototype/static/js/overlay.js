var scrolled = false;

$(window).scroll(function() {
    if($(window).scrollTop() > 0 && scrolled == false){
        $('.overlay-content').addClass('scrolled');
        scrolled = true;
    } else if($(window).scrollTop() == 0) {
        $('.overlay-content').removeClass('scrolled');
        scrolled = false;
    }
})