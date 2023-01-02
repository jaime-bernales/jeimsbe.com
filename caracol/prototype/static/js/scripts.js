
// Home
//----------------------

$(function() {
    $('#home-menu').click(function(){
        $('.nav-overlay').addClass('active');
    });

    $('.nav-overlay').click(function(){
        $(this).removeClass('active');
    })
});


// Inputs
//----------------------

$('.input-group').focusin(function(){
    $(this).addClass('active');
});

$('.input-group').focusout(function(){
    if($(this).find('.input-text').val() == ''){
        $(this).removeClass('active');
    }
});