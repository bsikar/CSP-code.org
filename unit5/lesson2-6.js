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

var peopleList = ["You","Me","Another Person", "Joe", "bob", "jack", "jeff", "reee"];

updateScreen();

function updateScreen(){
  setProperty("peopleLabel","text",peopleList.join("
"));
  setProperty("peopleDropdown","options",peopleList);
}

onEvent("addPersonButton","click",function(){
  var newPerson = getText("personInput");
  insertItem(peopleList,0,newPerson);
  setProperty("personInput","text","");
  updateScreen();
});

onEvent("removePersonButton","click",function(){
  var personIndex = getProperty("peopleDropdown","index");
  removeItem(peopleList,personIndex);
  updateScreen();
});

onEvent("randomAssignButton","click",function(){
  if((peopleList.length >= 3)){
    var randomIndex1 = randomNumber(0,peopleList.length-1);
    var randomPerson1 = peopleList[randomIndex1];
    removeItem(peopleList,randomIndex1);

    var randomIndex2  = randomNumber(0,peopleList.length-1);
    var randomPerson2 = peopleList[randomIndex2];
    removeItem(peopleList,randomIndex2);

    var randomIndex3  = randomNumber(0,peopleList.length-1);
    var randomPerson3 = peopleList[randomIndex3];
    removeItem(peopleList,randomIndex3);

    setProperty("pairLabel","text",randomPerson1 + " and " + randomPerson2 + " and " + randomPerson3);

  } else {
    setProperty("pairLabel","text","Add more people to make a pair");
  }
  updateScreen();
});