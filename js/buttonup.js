//Easy tabs
$(document).ready(function($) {
    $('.technologiestab_content').hide();
    $('.technologiestab_content:first').show();
    $('.technologiestabs li:first').addClass('active');
    $('.technologiestabs li').click(function(event) {
        $('.technologiestabs li').removeClass('active');
        $(this).addClass('active');
        $('.technologiestab_content').hide();

        var selectTab = $(this).find('a').attr("data-target");

        $(selectTab).fadeIn();
    });
});

//Easy tabs
$(document).ready(function($) {
    $('.value_content').hide();
    $('.value_content:first').show();
    $('.valuetabs li:first').addClass('active');
    $('.valuetabs li').click(function(event) {
        $('.valuetabs li').removeClass('active');
        $(this).addClass('active');
        $('.value_content').hide();

        var selectTab = $(this).find('a').attr("data-target");

        $(selectTab).fadeIn();
    });
});



$(document).ready(function(){
    $('#submit').attr('disabled',true);

    $('#message ,#email').keyup(function(){

        var email = $('#email').val();
        var message = $('#message').val();

        if (email.length != 0 && message.length != 0) {
            $('#submit').attr('disabled', false);
        } else {
            $('#submit').attr('disabled', true);
        }
    })
});



var limit     = $(window).height()/3,
    $backToTop = $('#back-to-top');

$(window).scroll(function () {
    if ( $(this).scrollTop() > limit ) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});

// scroll body to 0px on click
$backToTop.click(function () {
    // language=JQuery-CSS
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});