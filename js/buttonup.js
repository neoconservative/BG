//Easy tabs Technologies key 1
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

//Easy tabs Technologies key 2
$(document).ready(function($) {
    $('.technologiestab_content2').hide();
    $('.technologiestab_content2:first').show();
    $('.technologiestabs2 li:first').addClass('active');
    $('.technologiestabs2 li').click(function(event) {
        $('.technologiestabs2 li').removeClass('active');
        $(this).addClass('active');
        $('.technologiestab_content2').hide();

        var selectTab = $(this).find('a').attr("data-target");

        $(selectTab).fadeIn();
    });
});

//Easy tabs Technologies key 3
$(document).ready(function($) {
    $('.technologiestab_content3').hide();
    $('.technologiestab_content3:first').show();
    $('.technologiestabs3 li:first').addClass('active');
    $('.technologiestabs3 li').click(function(event) {
        $('.technologiestabs3 li').removeClass('active');
        $(this).addClass('active');
        $('.technologiestab_content3').hide();

        var selectTab = $(this).find('a').attr("data-target");

        $(selectTab).fadeIn();
    });
});


//Easy tabs value
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


// email
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


// scroll
var limit     = $(window).height()/3,
    $backToTop = $('#back-to-top');

$(window).scroll(function () {
    if ( $(this).scrollTop() > limit ) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});


$backToTop.click(function () {
    // language=JQuery-CSS
    $('body,html').animate({
        scrollTop: 0
    }, 1500);
    return false;
});


