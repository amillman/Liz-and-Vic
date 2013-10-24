$(document).ready(function() {

    $("#iphone-wrapper").css({"margin-left": ($(window).width() - $("#iphone-wrapper").width())/2 });

    $(window).resize(function() {
        $("#iphone-wrapper").css({"margin-left": ($(window).width() - $("#iphone-wrapper").width())/2 });
    });

});
