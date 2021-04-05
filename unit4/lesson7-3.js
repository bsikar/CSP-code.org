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

var score = 10;
var lives = 3;

// Predict how questions 1 and 2 will be answered, then run the code to
// check your prediction.
console.log("Q1: Is score plus lives less than thirteen?");
console.log((score + lives) < 13);
console.log("False");

console.log("Q2: Is lives times three equal to score?");
console.log((lives * 3) == score);
console.log("False");

// Add code to answer the following two questions
console.log("Q3: Is score minus lives greater than five?");
console.log((score - lives) > 5);
console.log("True");

//
console.log("Q4: Is score times two greater than or equal to lives times ten?");
console.log((score*2) >= (lives*10));
console.log("False");