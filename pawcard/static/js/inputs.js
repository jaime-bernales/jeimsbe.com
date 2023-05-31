$('.input-group').focusin(function(){
    $(this).addClass('active');
});

$('.input-group').focusout(function(){
    if($(this).find('.input-text').val() == ''){
        $(this).removeClass('active');
    }
});