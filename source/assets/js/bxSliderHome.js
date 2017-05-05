$(document).ready(function(){
    var width = window.innerWidth;
    $(window).resize(function(){
        var width = window.innerWidth;
        slider(width);
    });
    slider(width);
});

function slider(width)
{
    if(width < 768 || screen.width < 768) // change it here
    {
        if(window.sldr==undefined)
        {
            window.sldr=$('.header-slider').bxSlider({
                minSlides: 1,
                maxSlides: 1,
                pager: false,
                auto: true,
                controls: false
            });
        }

    }else
    {
        if(window.sldr!=undefined)
        {
            window.sldr.destroySlider();
            window.sldr = undefined;
        }
    }
}
