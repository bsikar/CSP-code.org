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

i// Create and assign lists of states and admission years
var stateList   = getColumn("US States","State Name");
var yearList    = getColumn("US States","Admission Year");

// List of states with admission year after 1900
var since1900List = [];

// Filtering the table
var state;
var year;
for(var i = 0; i < stateList.length; i++){
  state = stateList[i];
  year  = yearList[i];
  if(year > 1900){
    appendItem(since1900List, state);
  }
}

console.log("States added since 1900:");
console.log(since1900List);

// Create and assign list of populations
var populationList = getColumn("US States","Population");

// List of states with population less than one million
var smallPopulationList = [];

var population;
for(var i = 0; i < stateList.length; i++){
  state = stateList[i];
  population = populationList[i];
  // Add code here
  if (population < 1000000) {
    appendItem(smallPopulationList, state);
  }

}

console.log("List of state with fewer than one million people");
console.log(smallPopulationList);