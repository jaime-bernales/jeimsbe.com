$(function() {
    $('#home-menu').click(function(){
        $('.nav-overlay').addClass('active');
    });

    $('.nav-overlay').click(function(){
        $(this).removeClass('active');
    })
});


$('.input-group').click(function(){
    $(this).addClass('active');
});