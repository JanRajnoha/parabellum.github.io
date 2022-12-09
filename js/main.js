WebFont.load({ google: { families: ["Roboto Condensed:regular,700"] } });

const MOBILE_MENU_MAX_WIDTH = 1000;
let previousWidth = 0;
let parentsDynamic = new Map();

$(document).ready(function() {

    previousWidth = window.innerWidth;

    LoadChildAndLogParent("nav")
    LoadChildAndLogParent("otherFooter")
    /*LoadChildAndLogParent("opening")    
    LoadChildAndLogParent("map")    
    LoadChildAndLogParent("contact")
    LoadDynamicPart("gallery")*/    
    LoadChildAndLogParent("footer")
});

function LoadChildAndLogParent(partName, parentName)
{
    var destination = "#" + partName + "-placeholder"
    var source = "/Support/" + partName + ".html"
    
    LoadData(destination, source);
    
    if (parentName !== undefined) parentsDynamic.set(partName, parentName);
}

function LoadData(destination, source)
{
    try {
        $(destination).load(source, 
                            function(response, status, http){ 
                                if(status == "error") 
                                    console.error("Error: " + http.status + ": " + http.statusText); 
                            });
    } catch (error) {
        console.error(error);
    }
}

function RemovePlaceholder(partName, doWorkAfterRemove)
{
    var destination = partName + "-placeholder"

    var inner = document.getElementById(destination).innerHTML;
    document.getElementById(destination).outerHTML = inner; 

    RemoveParentPlaceholder(partName, doWorkAfterRemove)
}

function RemoveParentPlaceholder(childName, doWorkAfterRemove)
{    
    parentName = parentsDynamic.get(childName);
    parentsDynamic.delete(childName);
    
    if (parentName !== undefined && [ ...parentsDynamic.values() ].filter(x => x == parentName).length == 0)
        RemovePlaceholder(parentName);
    
    if (doWorkAfterRemove !== undefined) doWorkAfterRemove();
}

function CheckWindowSize()
{
    var menuLinks = document.getElementById("menu");

    if (window.innerWidth > MOBILE_MENU_MAX_WIDTH)
        menuLinks.style.display = "block";
    else if (previousWidth > MOBILE_MENU_MAX_WIDTH)
        menuLinks.style.display = "none";
        
    previousWidth = window.innerWidth
}

function SwitchMenu() 
{
    if (window.innerWidth > MOBILE_MENU_MAX_WIDTH) return;

    var menuLinks = document.getElementById("menu");
    menuLinks.style.display = (menuLinks.style.display === "block") ? "none" : "block";
}