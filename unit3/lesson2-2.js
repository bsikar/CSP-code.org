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

onEvent("blueButton", "click", function() {
  setProperty("colorswatch", "background-color", "blue");
  playSound("Blue.mp3", false);
});
onEvent("purpleButton", "click", function() {
  setProperty("colorswatch", "background-color", "purple");
  playSound("Purple.mp3", false);
});
onEvent("redButton", "click", function() {
  setProperty("colorswatch", "background-color", "red");
  playSound("Red.mp3", false);
});
onEvent("nextButton", "click", function() {
  setScreen("trashScreen");
});
onEvent("recycleBin", "click", function() {
  setText("pictureInfo", "Recycling Bin: Put in here any items that can be recycled.");
});
onEvent("trashCan", "click", function() {
  setText("pictureInfo", "Trash Can: Throw away all trash in the blue bins.");
});
onEvent("flowerBasket", "click", function() {
  playSound("sound://category_digital/power_down_2.mp3", false);
  setText("pictureInfo", "New flower baskets: No trash belongs here!");
});
onEvent("lastButton", "click", function() {
  setScreen("gardenScreen");
});
onEvent("homeButton", "click", function() {
  setScreen("homeScreen");
});