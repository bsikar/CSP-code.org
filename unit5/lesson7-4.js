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

// Create and assign variable
var counter = 0;
var coinFlips = [];

while(counter < 10){
  appendItem(coinFlips, randomNumber(0,1));
  // Increase counter by 1 every time
  // through the loop
  counter++;
}

console.log("Here's 10 random coin flips");
console.log(coinFlips);

// Create and assign variable
var counter2 = 0;
var diceRolls = [];
while(counter2 < 10){
  appendItem(diceRolls, randomNumber(1,6));
  // Increase counter by 1 every time
  // through the loop
  counter2++;
}
// In the space below write a while loop that
// will roll 10 dice. Use the code above to help.



console.log("Here's 10 random dice rolls");
console.log(diceRolls);