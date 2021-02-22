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

// Creating and assigning a list of prices
var prices = [0.70, 1.50, 0.50, 2.50, 0.50, 3.25, 0.75];

// Setting up values for traversal
var minPrice = prices[0];
var price;

// Traversing list to find minimum value
for (var i = 0; i < prices.length; i++) {
  price = prices[i];
  if(price < minPrice){
    minPrice = price;
  }
}

console.log("The minimum price is $" + minPrice);

// Setting up variables
var maxPrice = prices[0];

// Traverse the list to find the maximum value
for (var i = 0; i < prices.length-1; i++) {
  if (prices[i] > maxPrice) {
    maxPrice = prices[i];
  }
}

console.log("The maximum price is $" + maxPrice);