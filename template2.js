$(document).scroll(function() {
    if( $(this).scrollTop() >= $(window).height() - 80) {
        $('#menu_bar').addClass("colored_bg");
    } else {
        $('#menu_bar').removeClass("colored_bg");
    }
    if( $(this).scrollTop() >= 0) {
        let currentPos = Math.ceil($(this).scrollTop() / $(window).height());
        // Hacky fixes for the current position
        if (currentPos < 1) {
            currentPos = 1;
        }
        if (currentPos > 8) {
            currentPos = 8;
        }
        if (currentPos !== 3) {
            $("#menu_options").find("div").removeClass();
            $("#menu_options").find("div[id='a_"+currentPos+"']").addClass("active");
        }
    }
});

$(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY + 1);
});

$('#hamburger').on('click', e => {
    e.preventDefault();
    $('#menu_options').toggle();
});

$('#menu_options a').on('click', e => {
    if ($('#hamburger').css('display') === 'block') {
        $('#menu_options').hide();
    }
});