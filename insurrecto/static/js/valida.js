var sizeSwitch = $('.switcher').width();
sizeSwitch = sizeSwitch - 63;
var switchHandle = $('.switch .handle');
var option =  $('.option');
var optionYes =  $('#optionYes');
var optionNo =  $('#optionNo');
var ageContainer =  $('.age');
var switchArea =  $('.switch');

function moveNo(){
    setTimeout(function() {
        switchHandle.css("width", "96px");
        switchHandle.css("left", "0");
        $('.age .question').text('Insurrecto Wines');
        $('.age .statement').text('Para navegar en el sitio debés tener la edad legal para consumir alcohol.');
    }, 100);
};

function moveYes(){
    setTimeout(function() {
        switchHandle.css("width", "96px");
        switchHandle.css("left", "calc(100% - 96px)");
    }, 100);

    window.scrollTo({
      top: 0
    });

    setTimeout(function() {
        ageContainer.addClass('valid');
    }, 600);

    setTimeout(function() {
        ageContainer.addClass('hidden');
        $('.inactive').removeClass('inactive');
    }, 1000);
};

switchHandle.draggable({
  axis: 'x',
  containment: 'parent',
  stop: function() {
    conditionMove();
  }
});

function conditionMove() {
    if(parseInt(switchHandle.css('left')) < (sizeSwitch / 2) - 20) {
        moveNo();
    }

    if(parseInt(switchHandle.css('left')) > (sizeSwitch / 2) + 20) {
        moveYes();
    }
}

optionNo.click(function() {
    moveNo();
});

optionYes.click(function() {
    moveYes();
});