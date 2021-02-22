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

// Button to update screen to excited image, text, and song
onEvent("calmButton", "click", function( ) {
  setProperty("calmButton","border-width",2);
  setProperty("tiredButton","border-width",0);
  setProperty("excitedButton","border-width",0);

  setProperty("mainImage","image","https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg");
  setProperty("mainText","text","Your mind is clear. Breathe deeply and enjoy the calm.");
  stopSound();
  playSound("sound://category_loops/stabilizing_breath_loop1.mp3", true);
});

// Button to update screen to tired image, text, and song
onEvent("tiredButton", "click", function( ) {
  setProperty("tiredButton","border-width",2);
  setProperty("calmButton","border-width",0);
  setProperty("excitedButton","border-width",0);

  setProperty("mainImage","image","https://cdn.pixabay.com/photo/2016/03/27/20/51/bed-1284238_960_720.jpg");
  setProperty("mainText","text","Let yourself rest and save your energy.");
  stopSound();
  playSound("sound://category_loops/vibrant_game_harping_down_forever_loop_1.mp3", false);
});

onEvent("excitedButton", "click", function( ) {
  setProperty("tiredButton","border-width",0);
  setProperty("calmButton","border-width",0);
  setProperty("excitedButton","border-width",2);

  setProperty("mainImage","image","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgflip.com%2Fs%2Fmeme%2FExcited-Cat.jpg&f=1&nofb=1");
  setProperty("mainText","text","Let yourself rest and save your energy.");
  stopSound();
  playSound("https://www.youtube.com/watch?v=B1lNhNHdoPI", true);
});