WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

$(document).ready(function() {

    LoadDynamicPart("mainFooter")
    LoadDynamicPart("otherFooter")
    LoadDynamicPart("opening")
    LoadDynamicPart("nav")
    LoadDynamicPart("map")
    LoadDynamicPart("gallery")
    LoadDynamicPart("contact")
    LoadDynamicPart("footer")

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

function LoadDynamicPart(partName)
{
    var destination = partName + "-placeholder"
    var source = "/dev/Support/" + partName + ".html"

    try {
        fetch(source)
        .then(response => response.text())
        .then((data) => {
            document.getElementById(destination).outerHTML = data;
        })
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