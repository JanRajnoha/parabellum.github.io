WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

$(document).ready(function() {
    $("#gallery-placeholder").load("/dev/Support/gallery.html");

    $("#footer-placeholder").load("/dev/Support/footer.html");
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