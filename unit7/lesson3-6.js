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

var stateNames = getColumn("US States", "State Name");
var dogNames = getColumn("Dogs", "Name");

longestShortest("states", stateNames);
longestShortest("dogs", dogNames);

function longestShortest(typeOfList, list){
  var message = "There are many " + typeOfList;
  message = message + " but the one with the shortest name is " + shortestWord(list);
  message = message + " and the one with the longest name is " + longestWord(list);
  console.log(message);
}

// Finds the shortest word in a list
// list {list} - a list of strings to search through
// return {string} - the string in the list with the fewest characters
function shortestWord(list){

  var shortest = list[0];
  for(var i = 0; i < list.length; i++){
    if (list[i].length < shortest.length){
      shortest = list[i];
    }
  }

  return shortest;
}

// Finds the longest word in a list
// list {list} - a list of strings to search through
// return {string} - the string in the list with the most characters
function longestWord(list){
  var longest = list[0];
  for (var i = 0; i < list.length; ++i){
    if (list[i].length > longest.length){
      longest = list[i];
    }
  }

  return longest;
}
