$(document).ready(function() {

    $("#iphone-wrapper").css({"margin-left": ($(window).width() - $("#iphone-wrapper").width())/2 });

    $(window).resize(function() {
        $("#iphone-wrapper").css({"margin-left": ($(window).width() - $("#iphone-wrapper").width())/2 });
    });

    /*$(window).on('mousewheel DOMMouseScroll',function(e){
        // To catch up or down scroll:
        e = e.originalEvent;
        // delta == 1 = down, delta == -1 = up;
        var delta = e.wheelDelta > 0 || e.detail < 0 ? 1 : -1;

        if(delta == 1) {
            $("#chat-box").scrollTop($("#chat-box").scrollTop()-10);
        }
        else {
            $("#chat-box").scrollTop($("#chat-box").scrollTop()+10);
        }
    });*/
});
