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

var wordList = getColumn("Words", "Word");
var filteredWordList = [];

filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());

onEvent("lengthDropdown", "change", function(){
  filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());
});

onEvent("letterDropdown", "change", function(){
  filter(getNumber("lengthDropdown"), getText("letterDropdown").toLowerCase());
});


function filter(len, letter){
  showElement("waitingImage");
  showElement("unclickable");
  filteredWordList = [];
  setText("output", "");

  for(var i=0; i<wordList.length; i++){
    if(wordList[i].length == len && wordList[i].substring(0,1)==letter){
        appendItem(filteredWordList, wordList[i]);
    }
  }

  if(filteredWordList.length == 0){
    appendItem(filteredWordList, "No Options Available");
  }

  hideElement("waitingImage");
  hideElement("unclickable");
  setText("output", filteredWordList.join(", "));
}

