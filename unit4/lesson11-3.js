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

/*
// if someone inputs any text
onEvent ("quoteInput", "input", function() {
  setProperty("quoteOutput", "text", getText("quoteInput"));
  showElement("feedbackOutput");
});
// if someone changes the color of the screen
onEvent ("colorInput", "change", function() {
  setProperty("colorOutput", "background-color", getText("colorInput"));
  showElement("feedbackOutput");
});
// if someone changes the font
onEvent ("fontFamilyInput", "change", function() {
  setProperty("quoteOutput", "font-family", getText("fontFamilyInput"));
  showElement("feedbackOutput");
});
// if someone changes the font size
onEvent ("fontSizeInput", "change", function(){
  setProperty("quoteOutput", "font-size", getNumber("fontSizeInput"));
  showElement("feedbackOutput");
});
*/
function updateScreen(num) {
  if (num == 1) // if updateScreen(1): change outputed text
    setProperty("quoteOutput", "text", getText("quoteInput"));
  else if (num == 2) // if updateScreen(2): change background color
    setProperty("colorOutput", "background-color", getText("colorInput"));
  else if (num == 3) // if updateScreen(3): change font family
    setProperty("quoteOutput", "font-family", getText("fontFamilyInput"));
  else if (num == 4) // if updateScreen(4): change font size
    setProperty("quoteOutput", "font-size", getNumber("fontSizeInput"));
  else // else alert the user
    console.log("Num should not be anthing except 1-4");
  showElement("feedbackOutput"); /// make hiden text shown
}

// if someone inputs any text call updateScreen(1)
onEvent ("quoteInput", "input", function() {
  updateScreen(1);
});
// if someone changes the color of the screen call updateScreen(2)
onEvent ("colorInput", "change", function() {
  updateScreen(2);
});
// if someone changes the font call updateScreen(3)
onEvent ("fontFamilyInput", "change", function() {
  updateScreen(3);
});
// if someone changes the font size call updateScreen(4)
onEvent ("fontSizeInput", "change", function(){
  updateScreen(4);
});