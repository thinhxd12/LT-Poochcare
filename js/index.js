
$('#owl-slider').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    autoplayHoverPause: false,
    dots: true
});
$('#owl-quotes').owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    autoplayHoverPause: false,
    dots: true,
});


$('.counter').countUp({
    'time': 2000,
    'delay': 10
});

$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
});

$('.iframe-popup-zoom').magnificPopup({
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        patterns: {
            youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
            },
            vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=0'
            },
            gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
            }
        },

        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 100, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
        opener: function (openerElement) {
            return openerElement.is('iframe') ? openerElement : openerElement.find('img');
        }
    }

});