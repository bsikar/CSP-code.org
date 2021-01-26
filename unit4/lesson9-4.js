// Create variables and assign values
var count = 0;

// Call updateScreen function to set up
// the screen.
updateScreen();

// When the user clicks the upButton increase the
// score and then update the screen.
onEvent("upButton", "click", function() {
  count = count + 1;
  updateScreen();
});

// When the user clicks the downButton decrease the
// score and then update the screen.
onEvent("downButton", "click", function() {
  count = count - 1;
  updateScreen();
});

// Declare the updateScreen function
function updateScreen(){
  setText("countDisplayLabel", count);
  if (count >= 15 || count <= -15) {
    setScreen("gameOverScreen");
    setText("finalScoreLabel", count);
  }
}
