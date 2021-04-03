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

onEvent("complimentButton", "click", function(){
  updateScreen();
});


// Combines a random greeting in various languages with a name
// name {string} - the name of a person
// return {string} - the complete greeting which combines the random greeting with a name
function randomGreeting(name){
  var greetings = ["Good day, ", "Bonne journée, ", "Buenos dias, ", "Magandang araw, ", "美好的一天, "];
  var statement = greetings[randomNumber(0, greetings.length-1)] + name + ".";
  return statement;
}

// Combines a random compliment a name
// name {string} - the name of a person
// return {string} - the complete compliment which combines the random compliment with a name
function randomCompliment(name){
  var compliments = [", you have incredible hair!", ", you are astonishingly smart!", 
  ", your fashion sense is unmatched!", ", your smile lights up the room!", 
  ", you are uncommonly talented!", ", you are ridiculously funny!"];
  var statement = name + compliments[randomNumber(0, compliments.length-1)];
  return statement;
}

function updateScreen(){
  setText("output", randomGreeting(getText("nameInput")) + '\n' + randomCompliment(getText("nameInput")));
}

