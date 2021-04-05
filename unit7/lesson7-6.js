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

// Creates a new list of the length given and with the same value repeated
// length {number} - the length of the list to create
// value {*} - the value to appear in every item of
function fill(length, value){
  var returnList = [];
  for(var i = 0; i < length; i++){
    appendItem(returnList, value);
  }
  return returnList;
}

console.log("fill 10, *" + fill(10, '*'));
console.log("fill 0, *" + fill(0, '*'));
console.log("fill 2, 322" + fill(10, 322));


// Write three different tests for the fill function

function multiplyBy(list, number){
  var returnList = [];
  // Write your code here
  for (var i = 0; i < list.length; ++i) {
    returnList.push(list[i] * number);
  }
  return returnList;
}

console.log("Multiply [1,2,3] by 2 " + multiplyBy([1,2,3],2));
console.log("Multiply [10,20,30] by 5 " + multiplyBy([10,20,30],5));
console.log("Multiply [-1,-2,-3] by 3 " + multiplyBy([-1,-2,-3],3));

// Returns a copy of the list given but in reverse order
// list {list} - the list to be reversed
// return {list} - a copy of the original list in reverse order
function reverse(list){
  return list.reverse();
}

console.log("Reverse [1,2,3]" + reverse([1,2,3]));
console.log("Reverse ['yes','no','maybe']" + reverse(["yes","no","maybe"]));

