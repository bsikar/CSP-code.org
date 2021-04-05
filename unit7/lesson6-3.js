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

// when the Pigify button is clicked, call the updateScreen() function
onEvent("pigifyButton", "click", function(){
  updateScreen();
});

// resets the screen and calls the pigify() function passing through user input
function updateScreen(){
  var text = getText("textInput");
  var statement = pigify(text);
  setText("textOutput", statement);
}

// uses a set of rules to convert the user input into pig latin
// makes calls to the Strings library to manage the user input so it can be converted
function pigify(str){
  var list = StringsLibrary.splitStringBySpace(str);
  var newList = [];

  for(var i=0; i<list.length; i++){
    var first = StringsLibrary.firstLetter(list[i]);
    var rest = StringsLibrary.allButFirst(list[i]);
    var temp = "";

    if(list[i].length < 4){
      temp = list[i];
    } else if (StringsLibrary.hasVowel(first) == true){
      temp = list[i] + "ay";
    } else {
      temp = rest + first + "ay";
    }
    appendItem(newList, temp);
  }

  var newString = newList.join(" ");
  console.log(newString);
  return newString;
}
