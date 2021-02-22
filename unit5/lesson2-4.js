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

var adjectiveList = ["Sideways", "Time", "Forbidden", "Organized", "Simple", "Wake Up", "Woopsie", "Random", "ett", "tewqtet", "sadfadf"];
var nounList      = ["Monkeys", "Balloons", "Family", "Sandwich", "Puppies", "Rakes", "Turnips", "dfasdfsd", "asdfsdf", "fasdfsd"];

var adjectiveIndex    = 0;
var nounIndex         = 0;

updateScreen();

onEvent("randomizeButton", "click", function( ) {
  nounIndex = randomNumber(0,nounList.length-1);
  adjectiveIndex = randomNumber(0,adjectiveList.length-1);
  playSound("sound://category_bell/notification_4.mp3", false);
  updateScreen();
});

function updateScreen(){
  var adjective = adjectiveList[adjectiveIndex];
  var noun = nounList[nounIndex];
  var bandName = adjective + "
" + noun;
  setProperty("bandNameLabel","text",bandName);
}