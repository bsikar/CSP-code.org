// Create and assign variables
var temp = 70;
var tempF = "";

// Button to decrease the temperature by
// one degree F.
onEvent("downButton", "click", function() {
    temp = temp - 1;
    tempF = temp + " F";
    setText("temperatureText", tempF);
    playSound("sound://category_objects/sharp_switch.mp3");
});
/*
this is decreasing and showing the temperature for F
*/
// Button to increase the temperature by
// one degree F.
onEvent("upButton", "click", function() {
    temp = temp + 1;
    tempF = temp + " F";
    setText("temperatureText", tempF);
    playSound("sound://category_objects/sharp_switch.mp3");
});
/*
this is increaseing and showing the temperature for F
*/