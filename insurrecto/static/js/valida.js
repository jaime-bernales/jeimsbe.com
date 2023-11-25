// Modal
$('.overlay, .btn-close').click(function(){
    $('.overlay, .modal-container').addClass('hidden');
});

// News
var newID ;

$('.new .read-more').click(function(){
    newID = $(this).closest('.new').attr('id');
    $('.overlay').removeClass('hidden');
    $('#modal-' + newID).removeClass('hidden');
});

// Buy
$('.btn-buy').click(function(){
    $('.overlay').removeClass('hidden');
    $('#subsidiaries').removeClass('hidden');
});

// Age validation

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

const parallax = document.querySelector('.hero');
const hero = document.querySelector('.hero-image');

const sHero = 1000;

parallax.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    hero.style.transform = `
    translate(
        ${x / sHero}%,
        ${y / sHero}%
    )`
});

// Tab MALBEC
$('.tab-container #tab-malbec').click(function(){
    $('.tab-container .item').removeClass('active');
    $(this).addClass('active');

    $('.tab-container .marker').removeClass('tab-blend');
    $('.tab-container .marker').addClass('tab-malbec');

    $('#malbec-2021').addClass('active');
    $('#blend-2021').removeClass('active');
});

// Tab BLEND
$('.tab-container #tab-blend').click(function(){
    $('.tab-container .item').removeClass('active');
    $(this).addClass('active');

    $('.tab-container .marker').removeClass('tab-malbec');
    $('.tab-container .marker').addClass('tab-blend');

    $('#blend-2021').addClass('active');
    $('#malbec-2021').removeClass('active');

    $('.stepper .step').removeClass('active');
    $('.stepper #step-1').addClass('active');
});

// Year 2021
$('.year-selector #cta-2021').click(function(){
    $('.year-selector #cta-2017').removeClass('active');
    $(this).addClass('active');
    $('.wine-2017').addClass('hidden');
    $('.wine-2021').removeClass('hidden');
});

// Year 2017
$('.year-selector #cta-2017').click(function(){
    $('.year-selector #cta-2021').removeClass('active');
    $(this).addClass('active');
    $('.wine-2021').addClass('hidden');
    $('.wine-2017').removeClass('hidden');
});

// Pairings slides
var malbecActiveParing = 1;
var blendActiveParing = 1;

$('.malbec .pairing-container .next').click(function(){
    malbecActiveParing++;

    if(malbecActiveParing > 4) {
        malbecActiveParing = 1;
        $('.malbec #pair-malbec-1').removeClass('hidden');
    }

    var malbecParing = "#pair-malbec-" + malbecActiveParing;
    $('.malbec .pairing-container').addClass('hidden');
    $(this).closest('.pairing').find(malbecParing).removeClass('hidden');
});

$('.malbec .pairing-container .prev').click(function(){
    if(malbecActiveParing == 1) {
        malbecActiveParing = 4;
        $('.malbec #pair-malbec-1').removeClass('hidden');
        console.log(malbecParing);
    }

    else {
        malbecActiveParing--;
    }

    var malbecParing = "#pair-malbec-" + malbecActiveParing;
    $('.malbec .pairing-container').addClass('hidden');
    $(this).closest('.pairing').find(malbecParing).removeClass('hidden');
});

//--------------------------

$('.blend .pairing-container .next').click(function(){
    blendActiveParing++;

    if(blendActiveParing > 4) {
        blendActiveParing = 1;
        $('.blend #pair-blend-1').removeClass('hidden');
    }

    var blendParing = "#pair-blend-" + blendActiveParing;
    $('.blend .pairing-container').addClass('hidden');
    $(this).closest('.pairing').find(blendParing).removeClass('hidden');
});

$('.blend .pairing-container .prev').click(function(){
    if(blendActiveParing == 1) {
        blendActiveParing = 4;
        $('.blend #pair-blend-1').removeClass('hidden');
        console.log(blendParing);
    }

    else {
        blendActiveParing--;
    }

    var blendParing = "#pair-blend-" + blendActiveParing;
    $('.blend .pairing-container').addClass('hidden');
    $(this).closest('.pairing').find(blendParing).removeClass('hidden');
});

// Stepper

$('.wine-details#malbec-2021, .wine-details#blend-2021').scroll(function() {
    var scrollLeft = $(this).scrollLeft();
    var ancho = this.scrollWidth;

    if(scrollLeft < ancho / 3) {
        $('.stepper .step').removeClass('active');
        $('.stepper #step-1').addClass('active');
    }

    if(scrollLeft > ancho / 3 - 30 && scrollLeft < ancho / 3 * 2) {
        $('.stepper .step').removeClass('active');
        $('.stepper #step-2').addClass('active');
    }

    if(scrollLeft >= ancho / 3 * 2) {
        $('.stepper .step').removeClass('active');
        $('.stepper #step-3').addClass('active');
    }

});
