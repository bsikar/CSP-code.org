// List of icons to randomly choose between
var iconsList = ["icon://fa-heart", 
                 "icon://fa-music", 
                 "icon://fa-smile-o", 
                 "icon://fa-globe", 
                 "icon://fa-tree", 
                 "icon://fa-bolt", 
                 "icon://fa-moon-o",
                 "icon://fa-star"];
// What icon index will be shown
var icon = randomNumber(0, iconsList.length-1);

// update the screen
updateScreen();
// if any of the buttons are clicked update the screen accordingly 
onEvent("colorsButton", "click", function() { updateScreen("color") });
onEvent("colorsButton", "click", function() { updateScreen("color") });
onEvent("locationsButton", "click", function() { updateScreen("location") });
onEvent("shapesButton", "click", function() { updateScreen("shape") });

// update screen function
function updateScreen(str) {
  // if the color button was pressed change the color of the icons as well as the background
  if (str == "color") {
    for (var i = 0; i < 20; ++i) {
      setProperty("icon" + i, "icon-color", rgb(randomNumber(0,255), randomNumber(0,255) ,randomNumber(0,255), Math.random()));
      setProperty("homeScreen", "background-color", rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255), 0.5));
    }
    // if the location button was pressed change the location of all of the icons
  } else if (str == "location") {
    for (var i = 0; i < 20; ++i) {
      setProperty("icon" + i, "x", randomNumber(0, 320));
      setProperty("icon" + i, "y", randomNumber(0, 420));
    }
    // if the shape button was pressed change the shape of all the icons
  } else if (str == "shape") {
    icon = randomNumber(0, iconsList.length-1);
    for (var i = 0; i < 20; ++i) {
      setProperty("icon" + i, "image", iconsList[icon]);
    }
    // this gets ran the first time the app is ran, it ranomizes everything
  } else {
    for (var i = 0; i < 20; ++i) {
      setProperty("icon" + i, "image", iconsList[icon]);
      setProperty("icon" + i, "x", randomNumber(0, 320));
      setProperty("icon" + i, "y", randomNumber(0, 420));
      setProperty("icon" + i, "width", randomNumber(0, 200));
      setProperty("icon" + i, "height", randomNumber(0, 200));
      setProperty("icon" + i, "icon-color", rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255), Math.random()));
      setProperty("homeScreen", "background-color", rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255), 0.5));
    }
  }
}

