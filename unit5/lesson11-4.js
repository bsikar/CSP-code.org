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

// Creating and assigning lists

var fruits = ["apples", "bananas", "peaches", "pears", "oranges"];
var prices = [0.99, 0.69, 1.29, 1.09, 0.89];

// Traversing both lists to print the price of each fruit
var fruit;
var price;

for(var i = 0; i < fruits.length; i++){
  fruit = fruits[i];
  price = prices[i];
  console.log(fruit + " cost " + price);
}

// Creating and assigning lists

var students = ["Angelo","Emilia","Abel","Darien","Elly"];
var grades    = [11, 10, 12, 10, 9];

for (var i = 0; i < students.length; ++i) {
  console.log(students[i] + " is in grade " + grades[i]);
}