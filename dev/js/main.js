WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

$(document).ready(function() {
    $('.gallery-default a').simpleLightbox({
        captionsData: 'alt'
    });

    $("#footer-placeholder").load("/dev/footer.html");
});

$('.gallery-default').imageslider({
    slideItems: '.marquee-item',
    slideContainer: '.marquee-content',
    slideDistance: 5,
    slideDuration: 250,
    resizable: true,
    pause: true
});

window.onload = (event) => {
    RunMarquee();
};

function RunMarquee()
{
    /*$(function() {
        $('.de').imageslider({
            slideItems: '.my-slider-item',
            slideContainer: '.marquee-content',
            slideDistance: 5,
            slideDuratin: 800,
            resizable: true,
            pause: true
        });
    });*/
}


function SwitchMenu() 
{
    var menuLinks = document.getElementById("menu");

    if (menuLinks.style.display === "block")
    {
        menuLinks.style.display = "none";
    } 
    else 
    {
        menuLinks.style.display = "block";
    }
}