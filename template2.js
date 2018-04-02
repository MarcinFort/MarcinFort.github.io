$(document).scroll(function() {
    if( $(this).scrollTop() >= $(window).height() ) {
        $('#menu_bar').addClass("colored_bg");
    } else {
        $('#menu_bar').removeClass("colored_bg");
    }
})