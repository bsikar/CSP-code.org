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

var clicks = 0;

onEvent("star", "click", function() {
  clicks = clicks + 1;
  setText("numClicks", clicks);

  if(clicks == 0){
    setProperty("star", "icon-color", "black");
  } else if (clicks >= 1 && clicks <= 4) {
    setProperty("star", "icon-color", "red");
  } else if (clicks >= 5 && clicks <= 9) {
    setProperty("star", "icon-color", "orange");
  } else if (clicks >= 10 && clicks <= 14) {
    setProperty("star", "icon-color", "yellow");
  } else if (clicks >= 15 && clicks <= 19) {
    setProperty("star", "icon-color", "green");
  } else if (clicks >= 20 && clicks <= 24) {
    setProperty("star", "icon-color", "blue");
  } else if (clicks >= 25 && clicks <= 29) {
    setProperty("star", "icon-color", "violet");
  } else {
    setProperty("star", "icon-color", "pink");
  }

});