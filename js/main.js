const MOBILE_MENU_MAX_WIDTH = 1000;
let previousWidth = 0;
let parentsDynamic = new Map();

$(document).ready(function() {

    previousWidth = window.innerWidth;
    
    document.getElementById("year").innerHTML = (new Date()).getFullYear(); 
});

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
