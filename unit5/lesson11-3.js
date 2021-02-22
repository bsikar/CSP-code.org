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

// Creating and assigning list of animals
var favoritePets = ["dogs","cats","parrot","guinea pig","iguana"];
console.log("Here's my list of favorite pets");

// Printing and numbering every element in pets list 
var pet;
for (var i = 0; i < favoritePets.length; i++) {
  pet = favoritePets[i];
  console.log((i+1) + ": " + pet);
}

// Creating an assinging list of colors
var favoriteColors = ["red","green","blue","orange","yellow"];
console.log("Here's my list of favorite colors");
for (var i = 0; i < favoriteColors.length; ++i) {
  console.log(i+1 + ": " + favoriteColors[i]);
}
// Add code to print and number every element in the colors list