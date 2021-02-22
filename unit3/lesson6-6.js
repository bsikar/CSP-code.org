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

// Play the background music. It should repeat forever.
playSound("sound://category_nature/forest_woodland_loop.mp3", true);

// When the user puts their mouse over the hawk move both
// birds but play a sad sound and put sad text
onEvent("hawk", "mouseout", function( ) {
  playSound("sound://category_alerts/vibrant_wrong_action_hit_1.mp3", false);
  setProperty("hawk", "x", randomNumber(0, 100));
  setProperty("hawk", "y", randomNumber(0, 200));
  setProperty("sparrow", "x", randomNumber(0, 100));
  setProperty("sparrow", "y", randomNumber(0, 200));
  setProperty("message", "text", "Avoid the hawk!");
});

// When the user puts their mouse over the sparrow move both
// birds but play a happy sound and put happy text
onEvent("sparrow", "mouseout", function( ) {
  playSound("sound://category_collect/vibrant_game_positive_item_2.mp3");
  setProperty("hawk", "x", randomNumber(0, 100));
  setProperty("hawk", "y", randomNumber(0, 200));
  setProperty("sparrow", "x", randomNumber(0, 100));
  setProperty("sparrow", "y", randomNumber(0, 200));
  setProperty("message", "text", "You saved another sparrow!");
});