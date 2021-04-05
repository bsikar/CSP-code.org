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

// Home Screen
// if the `toFruitButton` is pressed show the fruit screen
onEvent("toFruitButton", "click", function() {
  setScreen("fruitScreen");
  // hide all of the images
  for (var i = 1; i <= 5; ++i) {
    hideElement("image" + i);
  }
  // update the text in the output
  setProperty("fruitOutput", "text", "");
});

// if the `toSandwichButton` is pressed show the sandwich screen
onEvent("toSandwichButton", "click", function() {
  setScreen("sandwichScreen");
  // hide all of the images
  for (var i = 6; i <= 10; ++i) {
    hideElement("image" + i);
  }
  // update the text in the output
  setProperty("sandwichOutput", "text", "Your sandwich contains:

");
});

// if the `toBothButton` is pressed show the secret screen
onEvent("toSecretButton", "click", function() {
  setProperty("toSecretButton", "checked", false);
  setScreen("secretScreen");
  // hide all of the images
  for (var i = 11; i <= 20; ++i) {
    hideElement("image" + i);
  }
  // update the text in the output
  setProperty("secretOutput", "text", "");
});

// Fruit Screen
// if the `fruitBackButton` is pressed show the home screen
onEvent("fruitBackButton", "click", function() {
  setScreen("homeScreen");
});

// global variable fruits
var fruits = {
  fruit: getColumn("fruits", "fruit"),
  image: getColumn("fruits", "image"),
};

// if the `fruitGoButton` is clicked show the fruit
onEvent("fruitGoButton", "click", function() {
  fruits.fruit = getColumn("fruits", "fruit");
  fruits.image = getColumn("fruits", "image");

  for (var i = 1; i <= 5; ++i) {
    hideElement("image" + i);
  }

  var message = "WOah woAh! You can eat these fruits that I picked for you!:

";
  for (var i = 1; i <= randomNumber(3, 5); ++i) {
    var y = randomNumber(0, fruits.fruit.length-1);
    setProperty("image" + i, "image", fruits.image[y]);
    showElement("image" + i);
    message += fruits.fruit[y] + ", ";
    fruitFilter(y);
  }
  setProperty("fruitOutput", "text", message.slice(0, -2));
});

// Sandwich Screen
// if the `sandwichBackButton` is pressed show the home screen
onEvent("sandwichBackButton", "click", function() {
  setScreen("homeScreen");
});
// global variable sandwich
var sandwich = {
  toppings: getColumn("toppings", "topping"),
  image: getColumn("toppings", "image"),
};

// if the `sandwichGoButton` is pressed show the sandwich
onEvent("sandwichGoButton", "click", function() {
  sandwich.toppings = getColumn("toppings", "topping");
  sandwich.image = getColumn("toppings", "image");

  for (var i = 6; i <= 10; ++i) {
    hideElement("image" + i);
  }

  var message = "Your sandwich contains:

";
  for (var i = 6; i <= 9; ++i) {
    var y;
    if (i == 6) {
      y = randomNumber(0, 4);
      setProperty("image10" , "image", sandwich.image[y]);
      showElement("image10");
    } else {
      y = randomNumber(5, sandwich.toppings.length-1);
    }
    setProperty("image" + i, "image", sandwich.image[y]);
    showElement("image" + i);
    message += sandwich.toppings[y] + ", ";
    sandwichFilter(y);
  }
  setProperty("sandwichOutput", "text", message.slice(0, -2));
});

// secret screen
// if the `secretBackButton` is pressed show the home screen
onEvent("secretBackButton", "click", function() {
  setScreen("homeScreen");
});

// if the `sandwichGoButton` is pressed show the sandwich
onEvent("secretGoButton", "click", function() {
  sandwich.toppings = getColumn("toppings", "topping");
  sandwich.image = getColumn("toppings", "image");
  fruits.fruit = getColumn("fruits", "fruit");
  fruits.image = getColumn("fruits", "image");

  for (var i = 11; i <= 20; ++i) {
    hideElement("image" + i);
  }

  var message = "Fruits:
";
  for (var i = 11; i <= 11+randomNumber(3, 5); ++i) {
    var y = randomNumber(0, fruits.fruit.length-1);
    setProperty("image" + i, "image", fruits.image[y]);
    showElement("image" + i);
    message += fruits.fruit[y] + ", ";
    fruitFilter(y);
  }

  message += "

Sandwich:
";

  for (var i = 16; i <= 19; ++i) {
    var y;
    if (i == 16) {
      y = randomNumber(0, 4);
      setProperty("image20" , "image", sandwich.image[y]);
      showElement("image20");
    } else {
      y = randomNumber(5, sandwich.toppings.length-1);
    }
    setProperty("image" + i, "image", sandwich.image[y]);
    showElement("image" + i);
    message += sandwich.toppings[y] + ", ";
    sandwichFilter(y);
  }
  setProperty("secretOutput", "text", message.slice(0, -2));
});

// function that will filter the fruits
function fruitFilter(index) {
  var fruit = [];
  var image = [];
  for (var i = 0; i < fruits.fruit.length; ++i) {
    if (i != index) {
      fruit.push(fruits.fruit[i]);
      image.push(fruits.image[i]);
    }
  }
  fruits.fruit = fruit;
  fruits.image = image;
}

// function that will filter the sandwich stuff
function sandwichFilter(index) {
  var toppings = [];
  var image = [];
  for (var i = 0; i < sandwich.toppings.length; ++i) {
    if (i != index) {
      toppings.push(sandwich.toppings[i]);
      image.push(sandwich.image[i]);
    }
  }
  sandwich.toppings = toppings;
  sandwich.image = image;
}