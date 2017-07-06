/* Monitors window resize and creates/destroys the homepage slider */

$(document).ready(function() {
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

    } else
    {
        if(window.sldr!=undefined)
        {
            window.sldr.destroySlider();
            window.sldr = undefined;
        }
    }
}

/* Deferred images to load after page has finished loading */

function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        } } }
window.onload = init;
