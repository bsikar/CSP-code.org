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

var phrases = ["The quick brown fox jumps over the lazy dog", 
               "To be or not to be, that is the question", 
               "Lorem ipsum dolor sit amet",
               "Try to be a rainbow in someone's cloud"];
               
onEvent("textInput", "input", function( ) {
  for (var i = 0; i < 5; i++) {
    setProperty("text"+i, "text", getText("textInput"));
  }
});
onEvent("fontSizeSlider", "change", function( ) {
  for (var i = 0; i < 5; i++) {
    setProperty("text"+i, "font-size", getNumber("fontSizeSlider"));
  }
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_3_app_click.mp3");
});
onEvent("colorDropdown", "input", function( ) {
  for (var i = 0; i < 5; i++) {
    setProperty("text"+i, "text-color", getText("colorDropdown"));
  }
});
onEvent("randomPhraseButton", "click", function( ) {
  var currentPhrase = getText("textInput");
  var randomPhrase = currentPhrase;
  while(randomPhrase == currentPhrase){
    randomPhrase = phrases[randomNumber(0,phrases.length-1)];
  }
  for (var i = 0; i < 5; i++) {
    setProperty("text"+i, "text", randomPhrase);
  }
  setProperty("textInput","text", randomPhrase);

});