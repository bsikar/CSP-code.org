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

// Create and assign values to variables
var dollars = 0;
var tickets = 0;
var adultPrice = 12.50;
var childPrice = 8.50;
var seniorPrice = 10;

// Use the code in this button to guide how you
// add code to the others.
onEvent("adultButton","click",function(){
  // Increase tickets sold
  tickets = tickets + 1;
  // Increase dollars collected
  dollars = dollars + adultPrice;
  setProperty("dollarsLabel", "text", "$" + dollars);
  setProperty("ticketsLabel", "text", tickets + " tickets");
  playSound("sound://category_digital/coin_2.mp3");
});

// Add code to make this button work
onEvent("childButton","click",function(){
// Increase tickets sold
  tickets = tickets + 1;
  // Increase dollars collected
  dollars = dollars + childPrice;
  setProperty("dollarsLabel", "text", "$" + dollars);
  setProperty("ticketsLabel", "text", tickets + " tickets");
  playSound("sound://category_digital/coin_2.mp3");
});

// Add code to make this button work
onEvent("seniorButton","click",function(){
// Increase tickets sold
  tickets = tickets + 1;
  // Increase dollars collected
  dollars = dollars + seniorPrice;
  setProperty("dollarsLabel", "text", "$" + dollars);
  setProperty("ticketsLabel", "text", tickets + " tickets");
  playSound("sound://category_digital/coin_2.mp3");
});