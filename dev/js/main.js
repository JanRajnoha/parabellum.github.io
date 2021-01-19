WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

$(document).ready(function() {

    LoadDynamicPart("mainFooter-placeholder", "/dev/Support/mainFooter.html")
    LoadDynamicPart("otherFooter-placeholder", "/dev/Support/otherFooter.html")
    LoadDynamicPart("opening-placeholder", "/dev/Support/opening.html")
    LoadDynamicPart("nav-placeholder", "/dev/Support/nav.html")
    LoadDynamicPart("map-placeholder", "/dev/Support/map.html")
    LoadDynamicPart("gallery-placeholder", "/dev/Support/gallery.html")
    LoadDynamicPart("contact-placeholder", "/dev/Support/contact.html")
    LoadDynamicPart("footer-placeholder", "/dev/Support/footer.html")

/*    try {
        $("#mainFooter-placeholder").load("/dev/Support/mainFooter.html");
    } catch (error) {
        console.error(error);
    }

    try {
        $("#otherFooter-placeholder").load("/dev/Support/otherFooter.html");
    } catch (error) {
        console.error(error);
    }

    try {
        $("#opening-placeholder").load("/dev/Support/opening.html");
    } catch (error) {
        console.error(error);
    }

    try {
        $("#nav-placeholder").load("/dev/Support/nav.html");
    } catch (error) {
        console.error(error);
    }

    try {
        $("#map-placeholder").load("/dev/Support/map.html");
    } catch (error) {
        console.error(error);
    }

    try {
        $("#gallery-placeholder").load("/dev/Support/gallery.html");
    } catch (error) {
        console.error(error);
    }

    try {
        $("#contact-placeholder").load("/dev/Support/contact.html");
    } catch (error) {
        console.error(error);
    }

    try {
        $("#footer-placeholder").load("/dev/Support/footer.html");
    } catch (error) {
        console.error(error);
    }*/
});

function LoadDynamicPart(destination, source)
{
    try {
        document.getElementById(destination).innerHTML = "asd";
        //$(destination).load(source);
    } catch (error) {
        console.error(error);
    }
}

function CheckWindowSize()
{
    var previousWidth = window.innerWidth

    window.onresize = function(event)
    {
        var menuLinks = document.getElementById("menu");

        if (window.innerWidth > 1000)
        {
            menuLinks.style.display = "block";
        }
        else if (previousWidth > 1000)
        {
            menuLinks.style.display = "none";
        }
        previousWidth = window.innerWidth
    };
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