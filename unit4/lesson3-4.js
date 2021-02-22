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

console.log("How many hours in a week?");
console.log(7 * 24);
console.log("");

console.log("How many seconds in a year?");
console.log(60 * 60 * 24 * 365);
console.log("");

console.log("What is 72 degrees farenheit in celsius?");
console.log((72-32)*(5/9));

console.log("What do the numbers 1 through 10 add up to?");
// Add code here to add the numbers 1 - 10
for (var i = 1; i < 11; ++i) {
  console.log(i);
}
console.log("What do the numbers 1 through 10 multiply to?");
// Add code here to multiply the numbers 1 - 10
var i;
for (i = 1; i < 11; ++i) {
  i *= i;
}
console.log(i);
console.log("What is 1 divided by 7?");
// Add code here to divide 1 by 7
console.log(1/7);