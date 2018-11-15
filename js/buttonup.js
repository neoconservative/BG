$(document).ready(function($) {
    $('.technologiestab_content').hide();
    $('.technologiestab_content:first').show();
    $('.technologiestabs li:first').addClass('active');
    $('.technologiestabs li').click(function(event) {
        $('.technologiestabs li').removeClass('active');
        $(this).addClass('active');
        $('.technologiestab_content').hide();

        var selectTab = $(this).find('a').attr("href");

        $(selectTab).fadeIn();
    });
});