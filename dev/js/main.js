WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

const MOBILE_MENU_MAX_WIDTH = 1000;
let previousWidth = 0;

$(document).ready(function() {

    previousWidth = window.innerWidth;

    LoadDynamicPart("nav")
    LoadDynamicPart("aboutIndex")
    LoadDynamicPart("mainFooter")
    /*LoadDynamicPart("otherFooter")*/
   /* LoadDynamicPart("opening")
    LoadDynamicPart("map")
    LoadDynamicPart("gallery")
    LoadDynamicPart("contact")*/
    LoadDynamicPart("footer")
});

async function LoadDynamicPart(partName)
{
    var destination = "#" + partName + "-placeholder"
    var source = "/dev/Support/" + partName + ".html"

    try {
        $(destination).load(source);
    } catch (error) {
        console.error(error);
    }
}

function ReplacePlaceholder(partName)
{
    var destination = partName + "-placeholder"

    var inner = document.getElementById(destination).innerHTML;
    document.getElementById(destination).outerHTML = inner;
}

function CheckWindowSize()
{
    var menuLinks = document.getElementById("menu");

    if (window.innerWidth > MOBILE_MENU_MAX_WIDTH)
    {
        menuLinks.style.display = "block";
    }
    else if (previousWidth > MOBILE_MENU_MAX_WIDTH)
    {
        menuLinks.style.display = "none";
    }
    previousWidth = window.innerWidth
}

function SwitchMenu() 
{
    if (window.innerWidth > MOBILE_MENU_MAX_WIDTH)
    {
        return;
    }

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