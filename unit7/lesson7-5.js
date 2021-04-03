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

// Returns a list of all lowercase letters
// return {list} - list of lowercase letters
function allLower(){
  return ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
}

// Returns a list of all lowercase letters
// return {list} - list of lowercase letters
function allUpper(){
  return ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
}

// Returns a list of all lowercase letters
// return {list} - list of lowercase letters
function vowelsLower(){
  return ["a","e","i","o","u"];
}

// Returns a list of all lowercase letters
// return {list} - list of lowercase letters
function vowelsUpper(){
  return ["A","E","I","O","U"];
}

// Returns a list of all lowercase letters
// return {list} - list of lowercase letters
function consonantsLower(){
  return ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
}

// Returns a list of all lowercase letters
// return {list} - list of lowercase letters
function consonantsUpper(){
  return ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];  
}

// Returns a list of letters
// letterType {string} - "All", "Consonants", or "Vowels"
// upper {boolean} - whether the letters should be upper case. If false, returns lowercase
// return {list} - a list of letters
function getLetters(letterType,upper){
  if(letterType == "All"){
    if(upper){
      return allUpper();
    } else {
      return allLower();
    }
  } else if (letterType == "Consonants") {
    if(upper){
      return consonantsUpper();
    } else {
      return consonantsLower();
    }
  } else if (letterType == "Vowels") {
    if(upper){
      return vowelsUpper();

    } else {
      return vowelsLower(); 
    }
  }
}

console.log("All Uppercase");
console.log(getLetters("All",true));

console.log("All Lowercase");
console.log(getLetters("All",false));

console.log("Consonants Uppercase");
console.log(getLetters("Consonants",true));

console.log("Consonants Lowercase");
console.log(getLetters("Consonants",false));

console.log("Vowels Uppercase");
console.log(getLetters("Vowels",true));

console.log("Vowels Lowercase");
console.log(getLetters("Vowels",false));
