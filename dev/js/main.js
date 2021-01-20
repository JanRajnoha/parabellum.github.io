WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

$(document).ready(function() {

    LoadDynamicPart("nav")
    LoadDynamicPart("aboutIndex")
    LoadDynamicPart("mainFooter")
    LoadDynamicPart("otherFooter")
    LoadDynamicPart("opening")
    LoadDynamicPart("map")
    LoadDynamicPart("gallery")
    LoadDynamicPart("contact")
    LoadDynamicPart("footer")
});

async function LoadDynamicPart(partName, attempt)
{
    var destination = partName + "-placeholder"
    var source = "/dev/Support/" + partName + ".html"

    try {
        var sourceResult = await fetch(source);
        if (sourceResult.ok)
        {
            var data = await sourceResult.text();
            document.getElementById(destination).outerHTML = data;
        }
    } catch (error) {
        console.log("partName: " + partName + "\n\n" + error);

        if (attempt < 10)
        {
            await LoadDynamicPart(partName, attempt + 1)
        }
    }
}

async function LoadDynamicPart(partName, attempt)
{
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