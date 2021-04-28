/*
// if someone inputs any text
onEvent ("quoteInput", "input", function() {
  setProperty("quoteOutput", "text", getText("quoteInput"));
  showElement("feedbackOutput");
});
// if someone changes the color of the screen
onEvent ("colorInput", "change", function() {
  setProperty("colorOutput", "background-color", getText("colorInput"));
  showElement("feedbackOutput");
});
// if someone changes the font
onEvent ("fontFamilyInput", "change", function() {
  setProperty("quoteOutput", "font-family", getText("fontFamilyInput"));
  showElement("feedbackOutput");
});
// if someone changes the font size
onEvent ("fontSizeInput", "change", function(){
  setProperty("quoteOutput", "font-size", getNumber("fontSizeInput"));
  showElement("feedbackOutput");
});
*/
function updateScreen(num) {
    if (num == 1) // if updateScreen(1): change outputed text
        setProperty("quoteOutput", "text", getText("quoteInput"));
    else if (num == 2) // if updateScreen(2): change background color
        setProperty("colorOutput", "background-color", getText("colorInput"));
    else if (num == 3) // if updateScreen(3): change font family
        setProperty("quoteOutput", "font-family", getText("fontFamilyInput"));
    else if (num == 4) // if updateScreen(4): change font size
        setProperty("quoteOutput", "font-size", getNumber("fontSizeInput"));
    else // else alert the user
        console.log("Num should not be anthing except 1-4");
    showElement("feedbackOutput"); /// make hiden text shown
}

// if someone inputs any text call updateScreen(1)
onEvent("quoteInput", "input", function() {
    updateScreen(1);
});
// if someone changes the color of the screen call updateScreen(2)
onEvent("colorInput", "change", function() {
    updateScreen(2);
});
// if someone changes the font call updateScreen(3)
onEvent("fontFamilyInput", "change", function() {
    updateScreen(3);
});
// if someone changes the font size call updateScreen(4)
onEvent("fontSizeInput", "change", function() {
    updateScreen(4);
});