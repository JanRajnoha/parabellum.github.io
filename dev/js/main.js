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
});

/*function LoadDynamicPart(partName)
{
    var destination = partName + "-placeholder"
    var source = "/dev/Support/" + partName + ".html"

    try {
        fetch(source)
        .then(response => response.text())
        .then((data) => {
            document.getElementById(destination).outerHTML = data;
        })

        var sourceResult = fetch(source).then((res) => {return res;});
        if (sourceResult.ok)
        {
            var data = sourceResult.text().then((res) => {return res;});
            document.getElementById(destination).outerHTML = data;
        }
    } catch (error) {
        console.log("partName: " + partName + "\n\n" + error);
    }
}*/

async function LoadDynamicPart(partName)
{
    var destination = partName + "-placeholder"
    var source = "/dev/Support/" + partName + ".html"

    try {
        /*fetch(source)
        .then(response => response.text())
        .then((data) => {
            document.getElementById(destination).outerHTML = data;
        })*/

        var sourceResult = await fetch(source);
        if (sourceResult.ok)
        {
            var data = await sourceResult.text();
            document.getElementById(destination).outerHTML = data;
        }
    } catch (error) {
        console.log("partName: " + partName + "\n\n" + error);
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