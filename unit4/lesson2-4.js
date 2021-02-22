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
var tempF = 70;
var tempC = Math.round((tempF - 32)*(5/9));
var tempDisplayF = tempF + " F";
var tempDisplayC = tempC + " C";

// Set temperature on the screen
setText("temperatureF", tempDisplayF);
setText("temperatureC", tempDisplayC);

// Button to decrease the temperature by
// one degree F.
onEvent("downButton", "click", function() {
  tempF = tempF - 1;
  tempC = Math.round((tempF - 32)*(5/9));

  tempDisplayF = tempF + " F";
  tempDisplayC = tempC + " C";
  setText("temperatureF", tempDisplayF);
  setText("temperatureC", tempDisplayC);
  playSound("sound://category_objects/sharp_switch.mp3");
});

// Button to increase the temperature by
// one degree F.
onEvent("upButton", "click", function(){
  tempF = tempF + 1;
  tempC = Math.round((tempF - 32)*(5/9));

  tempDisplayF = tempF + " F";
  tempDisplayC = tempC + " C";
  setText("temperatureF", tempDisplayF);
  setText("temperatureC", tempDisplayC);
  playSound("sound://category_objects/sharp_switch.mp3");
});