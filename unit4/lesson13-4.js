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

// Global Variables
var hasTimeNow;   // bool
var hasTimeLater; // string
var currentGrade; // int

// If any values in the app change, update the screen
onEvent("currentGradeSlider", "change", updateScreen);
onEvent("hasTimeLaterDropdown", "change", updateScreen);
onEvent("hasTimeNowDropdown", "change", updateScreen);

// updateScreen function that will update the screen
function updateScreen() {
  // update the variables accordantly
  getText("hasTimeNowDropdown")=="Yes"?hasTimeNow=true:hasTimeNow=false;
  getText("hasTimeLaterDropdown")=="Yes"?hasTimeLater="true":hasTimeLater="false";
  currentGrade = getNumber("currentGradeSlider");
  setProperty("currentGradeOutput", "text", "Current Grade: " + currentGrade + "%");
  
  // output if they should do their homework or not
  if (hasTimeNow || currentGrade < 70) { // if they have time or if they are failing make tell them to do the homework
    setProperty("dontDoHomeworkOutput", "hidden", true);
    setProperty("otherDoHomeworkOutput", "hidden", true);
    setProperty("doHomeworkOutput", "hidden", false);
  } else if (!hasTimeNow && hasTimeLater == "true") { // if they don't have time now, but they do later tell them to not do the homework
    setProperty("doHomeworkOutput", "hidden", true);
    setProperty("otherDoHomeworkOutput", "hidden", true);
    setProperty("dontDoHomeworkOutput", "hidden", false);
  } else { // else tell them that you do not know and to make up their own mind
    setProperty("dontDoHomeworkOutput", "hidden", true);
    setProperty("doHomeworkOutput", "hidden", true);
    setProperty("otherDoHomeworkOutput", "hidden", false);
  }
}