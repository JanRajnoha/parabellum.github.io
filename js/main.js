WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

window.onload = (event) => {
/*    ComputeMarqueeWidth();
    ReRunMarquee();*/

    $(function() {
        $('.de').imageslider({
        slideItems: '.my-slider-item',
        slideContainer: '.my-slider-list',
        slideDistance: 5,
        slideDuratin: 800,
        resizable: true,
        pause: true
        });
    });
};