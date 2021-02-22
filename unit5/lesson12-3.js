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

// Build the Random Forecaster app
// global variable
var info = {
  city: getColumn("Daily Weather", "City"),
  high: getColumn("Daily Weather", "High Temperature"),
  low: getColumn("Daily Weather", "Low Temperature"),
  condition: getColumn("Daily Weather", "Condition Description"),
  icon: getColumn("Daily Weather", "Icon"),
  day: getColumn("Daily Weather", "Forecast Number"),
};

// if someone clicks the "Get Forecast" Button
onEvent("forecastButton", "click", function() {
  var x = 0;

  while (info.day[x] != 2) {
    x = randomNumber(0, info.day.length-1);
  }
  setProperty("cityOutput", "text", info.city[x]);
  setProperty("highTempOutput", "text", info.high[x]);
  setProperty("lowTempOutput", "text", info.low[x]);
  setProperty("conditionOutput", "text", info.condition[x]);
  setProperty("iconOutput", "image", info.icon[x]);
});