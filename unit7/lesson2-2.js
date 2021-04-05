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

onEvent("addButton", "click", function(){
  setText("outputLabel", calculate(" + "));
});

onEvent("minusButton", "click", function(){
  setText("outputLabel", calculate(" - "));
});

onEvent("multiplyButton", "click", function(){
  setText("outputLabel", calculate(" * "));
});

onEvent("divideButton", "click", function() {
  setText("outputLabel", calculate("/"));
});
// calculates the answer to the math problem
// displays whether the answer is even or odd
// symbol {string} - the operator
// return {string}
function calculate(symbol){
  var number1 = getNumber("inputNumber1");
  var number2 = getNumber("inputNumber2");
  var answer;

  if(symbol == " + "){
    answer = number1 + number2;
  } else if (symbol == " - "){
    answer = number1 - number2;
  } else if (symbol == " / ") {
    answer = number1 / number2;
  } else {
    answer = number1 * number2;
  }

  // the MOD operator "%" - divides two numbers and returns the remainder
  // in this case - if a number divided by two has a remainder of zero, it's an even number
  if(answer%2==0){
    setText("evenOddLabel", "The answer is an EVEN number.");
  } else {
    setText("evenOddLabel", "The answer is an ODD number");
  }

  // answer is now set to a string of the math problem written out
  answer = number1 + " " + symbol + " " + number2 + " = " + answer;

  setText("inputNumber1", "");
  setText("inputNumber2", "");
  return answer;
}
