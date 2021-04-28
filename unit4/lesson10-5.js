// Create and assign variables
var thumbsUp = 5;
var mood;
// add code to update the screen


// When the down button is clicked
// decrease the thumbs up by one and
// update the screen.
onEvent("downButton", "click", function( ) {
  thumbsUp = thumbsUp - 1;
  // add code to update the screen
  updateScreen();


});

// When the up button is clicked
// increase the thumbsUp by one and
// update the screen.
onEvent("upButton", "click", function( ) {
  thumbsUp = thumbsUp + 1;
  // add code to update the screen
  updateScreen();
});

// Function to update the screen. It first checks
// the number of thumbs up. Then it changes the mood
// variable and uses it to update the text on the screen.
function updateScreen() {
  if(thumbsUp < 0){
    mood = "Sad";
    setProperty("moodGraphic", "image", "icon://fa-frown-o");
  } else if (thumbsUp < 10) {
    mood = "Neutral";
    setProperty("moodGraphic", "image", "icon://fa-meh-o");
  } else {
    mood = "Happy";
    setProperty("moodGraphic", "image", "icon://fa-smile-o");
  }
  setProperty("moodLabel", "text", "Thumbs Up: " + thumbsUp + " Mood: " + mood);
}
