$(document).ready(function() {

    //adjust iphone to middle of window screen
    $("#iphone-wrapper").css({"margin-left": ($(window).width() - $("#iphone-wrapper").width())/2 });

    //opening animations

    $("#title, #author").animate({
        opacity:1
    }, 1200,function() {
        $("#iphone-wrapper").animate({
            top: 0
        }, 1000, function() {
            $(".arrow").animate({
                opacity:1
            }, 500);
        });
    });


    //adjust iphone to middle of window screen upon resize
    $(window).resize(function() {

        var width = $(window).width();

        $("#iphone-wrapper").css({"margin-left": (width - $("#iphone-wrapper").width())/2 });

        if (width < 940)
            $(".fadeable").css({"opacity": (width - 640)/300 });
        else
            $(".fadeable").css({"opacity": 1 });
    });

    $(".arrow").click(function(){
        if($(this).attr('id') == "down")
            $("#chat-box").animate({
                scrollTop: $("#chat-box").scrollTop() + 300
            }, 500);
        else if($(this).attr('id') == "up")
            $("#chat-box").animate({
                scrollTop: $("#chat-box").scrollTop() - 300
            }, 500);
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
