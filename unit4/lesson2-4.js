// Create and assign variables
var tempF = 70;
var tempC = Math.round((tempF - 32)*(5/9));
var tempDisplayF = tempF + " F";
var tempDisplayC = tempC + " C";

// Set temperature on the screen
setText("temperatureF", tempDisplayF);
setText("temperatureC", tempDisplayC);

// Button to decrease the temperature by
// one degree F.
onEvent("downButton", "click", function() {
  tempF = tempF - 1;
  tempC = Math.round((tempF - 32)*(5/9));

  tempDisplayF = tempF + " F";
  tempDisplayC = tempC + " C";
  setText("temperatureF", tempDisplayF);
  setText("temperatureC", tempDisplayC);
  playSound("sound://category_objects/sharp_switch.mp3");
});

// Button to increase the temperature by
// one degree F.
onEvent("upButton", "click", function(){
  tempF = tempF + 1;
  tempC = Math.round((tempF - 32)*(5/9));

  tempDisplayF = tempF + " F";
  tempDisplayC = tempC + " C";
  setText("temperatureF", tempDisplayF);
  setText("temperatureC", tempDisplayC);
  playSound("sound://category_objects/sharp_switch.mp3");
});
