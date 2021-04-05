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
var score;
var lives;

// Button to start the game
onEvent("playButton", "click", function( ) {
  // Set starting values for variables and properties
  score = 0;
  lives = 3;
  setProperty("scoreLivesLabel","text","Score: " + score + " Lives: " + lives);
  playSound("sound://category_alerts/vibrant_game_carton_start_game_2_long.mp3", false);
  setScreen("gameScreen");
});

// Event handler for when the mouse touches a lemon
onEvent("lemon", "mouseover", function( ) {
  playSound("sound://category_collect/collect_item_bling_1.mp3");

  // Increase the score
  score = score + 1;

  // Set the size of the lemon based on the score
  if (score > 15) {
    setProperty("lemon","width",30);
    setProperty("lemon","height",30);
  }
  else if (score > 10){
    setProperty("lemon","width",60);
    setProperty("lemon","height",60);
  } else if (score > 5) {
    setProperty("lemon","width", 100);
    setProperty("lemon","height", 100);
  } else {
    setProperty("lemon","width", 140);
    setProperty("lemon","height", 140);
  }

  // Move the lemon and lime to random locations
  setProperty("lemon","x", randomNumber(50,220));
  setProperty("lemon","y", randomNumber(50,320));
  setProperty("lime","x", randomNumber(50,220));
  setProperty("lime","y", randomNumber(50,320));

  // Update screen text
  setProperty("scoreLivesLabel","text", "Score: " + score + " Lives: " + lives);
});

// Event handler for when the mouse touches a lime
onEvent("lime", "mouseover", function( ) {
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);

  // Decrease lives
  lives = lives - 1;

  // Move the lemon and lime to random locations
  setProperty("lemon","x",randomNumber(50,220));
  setProperty("lemon","y", randomNumber(50,320));
  setProperty("lime","x", randomNumber(50,220));
  setProperty("lime","y", randomNumber(50,320));

  // Update screen text
  setProperty("scoreLivesLabel","text","Score: " + score + " Lives: " + lives);

  // End game when you run out of lives
  if(lives <= 0){
    setScreen("startScreen");
    setProperty("startLabel","text","You collected " + score + " lemons! Play again?");
  }
});