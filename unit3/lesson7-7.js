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

// Show the controls when the user clicks the up button
onEvent("upButton", "click", function( ) {
  console.log("Showing controls");
  setProperty("downButton", "hidden", false);
  setProperty("playButton", "hidden", false);
  setProperty("stopButton", "hidden", false);
}); 
// Hide the controls
onEvent("downButton", "click", function( ) {
  setProperty("downButton", "hidden", true);
   setProperty("playButton", "hidden", true);
   setProperty("stopButton", "hidden", true);
    console.log("Hiding controls");  
  });
  
  // Play the music
  onEvent("playButton", "click", function( ) {
    playSound("sound://category_loops/vibrant_game_musical_harping_movement_loop_1_accents.mp3");
    console.log("Playing song");
  });
  
  // Stop the music
  onEvent("stopButton", "click", function( ) {
    stopSound();
    console.log("Stopping song");
  });