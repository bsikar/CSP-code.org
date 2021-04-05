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

// get data as lists from the dataset and store in variables
var dogNames = getColumn("Dogs", "Name");
var dogHeight = getColumn("Dogs", "Maximum Height");
var dogImages = getColumn("Dogs", "Image");

// set up blank lists to store the filtered lists
var filteredDogNames = [];
var filteredDogImages = [];

// filter the lists and sets up the screen
listSetup();

// when the dropdown is changed, filter the lists and set up the screen
onEvent("sizeDropdown", "change", function(){
  listSetup();
});

// filters the lists, based on the value in the dropdown
// if the dog height is under a certain amount and the dropdown matches a value
// the corresponding name and image will be stored in the filtered lists.
function filter(){
  // clears the filtered lists
  filteredDogNames = [];
  filteredDogImages = [];

  // gets the size from the dropdown
  var dogSize = getText("sizeDropdown");

  // traverses the dogHeight List
  // if dogHeight and dogSize meet certain conditions
  // the corresponding names and images are stored in the filtered lists
  for(var i=0; i<dogHeight.length; i++){
    if(dogHeight[i] < 16 && dogSize == "Small"){
      appendItem(filteredDogNames, dogNames[i]);
      appendItem(filteredDogImages, dogImages[i]);
    } else if(dogHeight[i] >= 16 && dogHeight[i] < 24 && dogSize == "Medium"){
      appendItem(filteredDogNames, dogNames[i]);
      appendItem(filteredDogImages, dogImages[i]);
    } else if(dogHeight[i] >= 24 && dogSize == "Large") {
      appendItem(filteredDogNames, dogNames[i]);
      appendItem(filteredDogImages, dogImages[i]);
    }
  }

  // prints the list of dog names that match the value in the dropdown
  console.log(dogSize + " Dogs:
" + filteredDogNames);
}

// sets up the screen elements
function updateScreen(){
  var randomIndex = randomNumber(0, filteredDogNames.length-1);
  setText("nameOutput", filteredDogNames[randomIndex]);
  setImageURL("picture", filteredDogImages[randomIndex]);
}

// sets up the lists and the screen
function listSetup(){
  filter();
  updateScreen();
}