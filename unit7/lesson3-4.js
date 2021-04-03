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

greetAndCompliment("Benjamin");
greetAndCompliment("Raji");
greetAndCompliment("Esmerelda");

function greetAndCompliment(name){
  console.log(randomGreeting() + name);
  console.log(name + randomCompliment());
}

// Generates a random greeting
// return {string} - random greeting, followed by a comma and space
function randomGreeting(){
  
  var greetings = ["Good day, ", "Bonne journée, ", "Buenos dias, ", "Magandang araw, ", "美好的一天, "];
  var randomGreet = greetings[randomNumber(0, greetings.length-1)];
  return randomGreet;
  
}

// Generates a random compliment
// return {string} - random compliment, followed by exclamation point
function randomCompliment(){
  var compliments = [", you have incredible hair!", ", you are astonishingly smart!", 
                     ", your fashion sense is unmatched!", ", your smile lights up the room!", 
                     ", you are uncommonly talented!", ", you are ridiculously funny!"];
  // Write code to complete this function
 return compliments[randomNumber(0, compliments.length-1)];
}
