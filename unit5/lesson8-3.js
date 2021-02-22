/* MIT License
 *
 * Copyright (c) 2021 Brighton Sikarskie
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// List of icons to randomly choose between
var iconsList = ["icon://fa-heart", "icon://fa-music", "icon://fa-smile-o", "icon://fa-globe", "icon://fa-tree", "icon://fa-bolt", "icon://fa-moon-o", "icon://fa-star"];
// What icon index will be shown
var icon = randomNumber(0, iconsList.length-1);

// update the screen
updateScreen();
// if any of the buttons are clicked update the screen accordingly 
onEvent("colorsButton", "click", function() { updateScreen("color") });
onEvent("locationsButton", "click", function() { updateScreen("location") });
onEvent("shapesButton", "click", function() { updateScreen("shape") });

// update screen function
function updateScreen(str) {
  // if the color button was pressed change the color of the icons as well as the background
  if (str == "color") {
    for (var i = 0; i < 20; ++i) {
      setProperty("icon" + i, "icon-color", rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255), Math.random()));
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