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