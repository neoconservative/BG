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