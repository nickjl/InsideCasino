$(document).ready(function(){
    $('.gallery-slider').bxSlider({
        slideWidth: 400,
        auto: true,
        controls: false,
        pager: true,
        onSliderLoad: function(){
            $(".gallery-slider").css("visibility", "visible");
        }
    });
});

