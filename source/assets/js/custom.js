/* Monitors window resize and creates/destroys the homepage slider */

jQuery(document).ready(function() {
    var width = window.innerWidth;
    jQuery(window).resize(function(){
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
            window.sldr=jQuery('.header-slider').bxSlider({
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


/* Creates gallery slider on casino homepage */

jQuery(document).ready(function(){
    jQuery('.gallery-slider').bxSlider({
        slideWidth: 400,
        auto: true,
        controls: false,
        pager: true,
        onSliderLoad: function(){
            jQuery(".gallery-slider").css("visibility", "visible");
        }
    });
});

/* Show/hide bonus card on mobile */

jQuery('.viewMoreBonuses').click(function() {
    jQuery('.hide-bonuses').slideToggle('slow');
    jQuery(this).text( jQuery(this).text() == 'show less' ? "show more" : "show less");

});

/* Blurs background image for individual game pages */

jQuery(function() {
    var BLUR_RADIUS = 100;
    var canvas = document.querySelector('[data-canvas]');
    if(canvas) {
        var canvasContext = canvas.getContext('2d');
        var image = new Image();
        image.src = document.querySelector('[data-canvas-image]').src;
        var drawBlur = function () {
            var w = canvas.width;
            var h = canvas.height;
            canvasContext.drawImage(image, 0, 0, w, h);
            stackBlurCanvasRGBA('heroCanvas', 0, 0, w, h, BLUR_RADIUS);
        };
        image.onload = function () {
            drawBlur();
        }
    }
});

