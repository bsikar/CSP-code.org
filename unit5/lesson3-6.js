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
var index = 0;
var classes = ["Biology", "Algebra", "Social Studies","Gym"];
updateScreen();

onEvent("leftButton", "click", function(){
	// use the Scroll Pattern to decrease the index
  if (index > 0) {
    --index;
  }
	// call updateScreen()
  updateScreen();
	playSound("sound://category_accent/puzzle_game_accent_small_d_01.mp3");
});


onEvent("rightButton", "click", function(){
  
  if(index < (classes.length - 1)){
    index = index + 1;
  }
  updateScreen();
	playSound("sound://category_accent/puzzle_game_accent_small_d_02.mp3");
});

function updateScreen(){
	setText("classLabel", classes[index]);
	setText("periodLabel", "Period: " + (index + 1));
}