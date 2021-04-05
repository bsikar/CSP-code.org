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

// defining global variables (the reminderList)
var reminderList = [];
var countOutput = 0;

// show "Add Reminders!" when the app is ran,
// but do not show "Add Reminders!" when the app
// hasn't been ran
setProperty("reminderOutput", "text", "Add Reminders!");

// if the button "Add" is clicked then
// add an item to the reminderList
// increase the count (if its zero meaning you wont see the screen that says "Add Reminders!")
// and update screen
onEvent("addButton", "click", function() {
  appendItem(reminderList, getText("reminderInput"));
  // console.log(reminderList); // this is for debugging
  setProperty("reminderInput", "text", "");
  if (countOutput == 0) {
    ++countOutput;
    updateScreen();
  }
});

// if the right button is clicked then show the next text from the reminderList
onEvent("rightButton", "click", function() {
  if (countOutput < reminderList.length) {
    ++countOutput;
    updateScreen();
  }
});

// if the left button is clicked then show the previous text from the reminderList
onEvent("leftButton", "click", function() {
  if (countOutput > 1) {
    --countOutput;
    updateScreen();
  }
});

// display the text from the reminderList as well as what it is
function updateScreen() {
  setProperty("countOutput", "text", countOutput);
  setProperty("reminderOutput", "text", reminderList[countOutput-1]);
}