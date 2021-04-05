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

// create the variables
var mileTimes = [];
var avg = 0;
var fastest = 0;
var slowest = 0;
var totalMiles = 0;
var newTime = 0;

// when a new mile is added, the mile time is added to the mileTimes list
onEvent("newMileButton", "click", function( ) {
  newTime = getNumber("newMileInput");
  appendItem(mileTimes, newTime);
  totalMiles++;

  updateScreen();
});

// updates the display
function updateScreen(){
  average();
  fast();
  slow();
  numberedListDisplay();

  setText("avgOutput", avg);
  setText("fastestOutput", fastest);
  setText("slowestOutput", slowest);
  setText("totalMilesOutput", totalMiles);
  setText("newMileInput", "");
  myFunction();
}

function average(){
  var total = 0;
  for(var i=0; i<mileTimes.length; i++){
    total = total + mileTimes[i];
  }
  avg = total / mileTimes.length;
}

function slow(){
  var temp = 0;
  for(var i=0; i<mileTimes.length; i++){
    if(mileTimes[i] > temp){
      temp = mileTimes[i];
    }
  }
  slowest = temp;
}

function fast(){
  var temp = mileTimes[0];
  for(var i=0; i<mileTimes.length; i++){
    if(mileTimes[i]< temp){
      temp = mileTimes[i];
    }
  }
  fastest = temp;
}

function numberedListDisplay(){
  var temp = "";
  for(var i=0; i<mileTimes.length; i++){
      temp = temp + "Mile " + (i+1) + ": " + mileTimes[i] + "
";
  }
  setText("milesOutput", temp);
}

function myFunction() {
  var result = 0;
  for (var i = 0; i < mileTimes.length; ++i) {
    result += mileTimes[i];
  }
  console.log(result);
}