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

// Create and assign starting values for the list
var songList = ["The Twist", "Stop! In the Name of Love", "Dancing in the Streets", "The Locomotion", "Happy Together", "I Wanna Hold Your Hand", "Build Me Up Buttercup", "Crimson and Clover", "Stand By Me", "I'm a Believer"];

updateScreen();

onEvent("updateButton", "click", function( ) {
  // Add code to get the name of the new song and its position in the list
  var rank = getNumber("rankDropdown")-1;
  var name = getText("songInput");
  
  // Add code to insert the song into the list at the position indicated
  insertItem(songList, rank, name);
  
  // Add code to remove the last item from the list
  removeItem(songList, songList.length-1);
  
  playSound("sound://category_slide/whoosh_4.mp3");
  updateScreen();
});

onEvent("rankDropdown", "change", function( ) {
  playSound("sound://category_board_games/card_dealing_single.mp3");
});

onEvent("songInput", "click", function( ) {
  playSound("sound://category_pop/deep_bubble_notification.mp3");
});

function updateScreen(){
  setProperty("songsOutput", "text", songList.join("
"));
}

var test = 0;
var test = 1;
console.log(test);