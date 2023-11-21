var sizeSwitch = $('.switcher').width();
sizeSwitch = sizeSwitch - 63;
var switchHandle = $('.switch .handle');
var option =  $('.option');
var optionYes =  $('#optionYes');
var optionNo =  $('#optionNo');
var ageContainer =  $('.age');
var switchArea =  $('.switch');


switchHandle.draggable({
  axis: 'x',
  containment: 'parent',
  stop: function() {
    conditionMove();
  }
});

optionYes.click(function() {
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
});

optionNo.click(function() {
    setTimeout(function() {
        switchHandle.css("width", "96px");
        switchHandle.css("left", "0");
        $('.age .question').text('Insurrecto Wines');
        $('.age .statement').text('Para navegar en el sitio debés tener la edad legal para consumir alcohol.');
    }, 100);
});

switchArea.click(function() {
  conditionMoveSnap();
});

function conditionMove() {
    if(parseInt(switchHandle.css('left')) <= (sizeSwitch / 2)) {
        setTimeout(function() {
            switchHandle.css("width", "96px");
            switchHandle.css("left", "0");
            $('.age .question').text('Insurrecto Wines');
            $('.age .statement').text('Para navegar en el sitio debés tener la edad legal para consumir alcohol.');
        }, 100);
  }
  else {
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
  }
}

function conditionMoveSnap() {
    if(parseInt(switchHandle.css('left')) == sizeSwitch) {
        setTimeout(function() {
            switchHandle.css("width", "96px");
            switchHandle.css("left", "0");
            $('.age .question').text('Insurrecto Wines');
            $('.age .statement').text('Para navegar en el sitio debés tener la edad legal para consumir alcohol.');
        }, 100);
  }
  else {
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
  }
}
