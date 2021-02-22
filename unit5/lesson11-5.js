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

// Create and assign list
var animals = ["alligator","bird","cow","dog","emu","flamingo","gorilla","hippo"];

console.log("Which animals have more than 5 letters in their names?");

// Filter animals to those with more than 5 letters
var animalsFiltered = [];
var animal;
for(var i = 0; i < animals.length; i++){
  animal = animals[i];
  if(animal.length > 5){
    appendItem(animalsFiltered,animal);
  }
}
console.log(animalsFiltered);

// Create and assign a list of students

var students = ["Angel","Ben","Clarissa","Darien","Elly","Francesco","Giselle","Henry"];

console.log("Which students have 6 or more letters in their names?");

// Filter students to have those with more than 6 letters
var studentsFiltered = [];
var student;

// Add code to filter the list of students
for (var i = 0; i < students.length; ++i) {
  if (students[i].length >= 6) {
    appendItem(studentsFiltered, students[i]);
  }
}


console.log(studentsFiltered);