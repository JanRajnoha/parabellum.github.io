const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
const defaultElementsCount = NumberOfDefaultElements();
root.style.setProperty("--marquee-elements", marqueeContent.children.length);
root.style.setProperty("--marquee-width", GetWidthOfDefaultItems());

for(let i=0; i<marqueeElementsDisplayed; i++) 
{
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

function NumberOfDefaultElements()
{
    return document.getElementsByClassName("marquee-item");
}

function GetWidthOfDefaultItems()
{
    let defaultElementsWidth = 0;

    for (let i = 0; i < defaultElementsCount.length; i++)
    {
        defaultElementsWidth += defaultElementsCount[i].offsetWidth;
    }

    return defaultElementsWidth;
}












/*
var elementsWidth = SummaryElementsWidth(numberOfElements);
var screenWidth = window.innerWidth;

DuplicateElements(elementsWidth, screenWidth, numberOfElements)
ExtendDisplayedElements(screenWidth)

function DuplicateElements(elementsWidth, screenWidth, numberOfElements)
{
    var numberOfRepeats = NumberOfRepeatsNeededForDuplicating(elementsWidth, screenWidth);

    for (let i = 1; i <= numberOfRepeats; i++)
    {
        for(let i=0; i < numberOfElements; i++) {
          marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }  
    }
}

function NumberOfRepeatsNeededForDuplicating(elementsWidth, screenWidth)
{
    var numberOfRepeats = 0;
    var allElementsWidth = elementsWidth

    while (allElementsWidth < screenWidth)
    {
        numberOfRepeats++;
        allElementsWidth += elementsWidth;
    }

    return numberOfRepeats;
}

function SummaryElementsWidth(numberOfElements) 
{
    var summaryWidth = 0;

    for (let i = 0; i < numberOfElements.length; i++) 
    {
        summaryWidth += numberOfElements[i].offsetWidth;
    }

    return summaryWidth;
}

function ExtendDisplayedElements(screenWidth)
{
    var showedElementsWidth = GetShowedElementsWidth(screenWidth);
}

function GetShowedElementsWidth(screenWidth)
{
    var allElements = NumberOfDefaultElements();
    var showedElementsWidth = 0;
    var index = 0;

    while (showedElementsWidth + allElements[index].offsetWidth < screenWidth)
    {
        let element = allElements[index];
        showedElementsWidth = element.offsetWidth;
        index++;
    }

    if (showedElementsWidth >= screenWidth)
    {
        index--;
    }

    return showedElementsWidth
}
*/