WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

const MOBILE_MENU_MAX_WIDTH = 1000;
let previousWidth = 0;
let parentsDynamic = new Map();

$(document).ready(function() {

    previousWidth = window.innerWidth;

    LoadChildAndLogParent("nav")
    LoadChildAndLogParent("aboutIndex")
    LoadChildAndLogParent("mainFooter")
    /*LoadDynamicPart("otherFooter")*/
   /* LoadDynamicPart("opening")
    LoadDynamicPart("map")
    LoadDynamicPart("gallery")
    LoadDynamicPart("contact")*/
    LoadChildAndLogParent("footer")
});

function LoadChildAndLogParent(partName, parentName)
{
    var destination = "#" + partName + "-placeholder"
    var source = "/dev/Support/" + partName + ".html"

    try {
        $(destination).load(source);
    } catch (error) {
        console.error(error);
    }
    
    if (parentName !== undefined)
    {
        parentsDynamic.set(partName, parentName);
    }

    console.log("Load " + partName);
}

function RemovePlaceholder(partName)
{
    var destination = partName + "-placeholder"

    var inner = document.getElementById(destination).innerHTML;
    document.getElementById(destination).outerHTML = inner;

    console.log("Remove " + partName);
    
    RemoveParentPlaceholder(partName)
}

function RemoveParentPlaceholder(childName)
{
    parentName = parentsDynamic.get(childName);
    parentsDynamic.delete(childName);
    
    if ([ ...parentsDynamic.values() ].filter(x => x == parentName).length = 0)
    {
        RemovePlaceholder(parentName);
    }
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