/**
 * Returns x with the first letter of each word in the sentence capitalized.
 * @param {string} x
 * @return {string} x with the first letter of each word in the sentence capitalized.
 */
function capitalize(x) {
  var split = x.split(/\s+/);
  for (var i = 0; i < split.length; ++i) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substr(1);
  }
  return split.join(" ");
}

/** 
 * Returns x without spaces from beginning and end of the string.
 * @param {string} x
 * @return {string} x without spaces from beginning and end of the string.
 */
function trim(x) {
  return x.trim();
}

/**
 * Returns x without all instances of c.
 * @param {string} x The string before.
 * @param {string} c The thing to remove from the string.
 * @return {string} x without all instances of c.
 */
function removeLetter(x, c) {
  return x.split(c).join("");
}

/**
 * Returns the maximum value in the list.
 * @param {Array.<number>} x
 * @return {number} The maximum value in the list.
 */
function max(x) {
  return Math.max.apply(null, x);
}

/**
 * Returns the minimum value in the list.
 * @param {Array.<number>} x
 * @return {number} The minimum value in the list.
 */
function min(x) {
  return Math.min.apply(null, x);
}

/**
 * Returns the average value in the list.
 * @param {Array.<number>} x
 * @return {number} The average value in the list.
 */
function avg(x) {
  var total = 0;
  for (var i = 0; i < x.length; i++) {
    total += x[i];
  }
  return total / x.length;
}

/**
 * Returns how many times a given value appears in a list.
 * @param {Array.<string>} x the list to look through.
 * @param {string} c the value to find in x.
 * @return {number} ct the amount of times c appears in x.
 */
function count(x, c) {
  var ct = 0;
  for (var i = 0; i < x.length; ++i) {
    if (x[i].includes(c)) {
      ct += 1;
    }
  }
  return ct;
}

/**
 * Returns the result of z being concated onto x.
 * @param {Array.} x The first array.
 * @param {Array.} z The second array (this will be added to the end of the first array).
 * @return {Array.} z added to the end of x.
 */
function combine(x, z) {
  return x.concat(z);
}

/**
 * Returns x without o.
 * @param {Array.<number>} x
 * @param {number} o the number to remove from x.
 * @return {Array.<number>} x without o.
 */
function filterNumbers(x, o) {
  var z = [];
  for (var i = 0; i < x.length; ++i) {
    if (x[i] != o) {
      z.push(x[i]);
    }
  }
  return z;
}

/**
 * Returns x without words that start with c.
 * @param {Array.<string>} x
 * @param {string} c the token that if a word starts with will be kept.
 * @return {Array.<string>} x without words that dont start with c.
 */
function filterLetters(x, c) {
  var z = [];
  for (var i = 0; i < x.length; ++i) {
    if (x[i].charAt(0) == c) {
      z.push(x[i]);
    }
  }
  return z;
}

/**
 * Returns x as a numbered list (a string that looks like a number list (e.g. a todo list is a numbered list).
 * @param {Array.<string>} x
 * @return {string} x as a string with each element in x listed as a numbered list.
 */
function numberedList(x) {
  var s = "";
  for (var i = 0; i < x.length; ++i) {
    s += (i+1) + ". " + x[i] + "\n";
  }
  return s;
}

/**
 * Returns the 3 largest values found in x.
 * @param {Array.<number>} x
 * @return {Array.<number>} the 3 largest values found in x.
 */
function topThree(x) {
  return x.sort().reverse().slice(0, 3);
}

/**
 * Returns x without dublicates.
 * @param {Array.} x
 * @return {Array.} x without dublicates.
 */
function unique(x) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  return x.filter(onlyUnique);
}

/**
 * Returns x in sorted order, smallest to largest.
 * @param {Array.} x
 * @return {Array.} x in sorted order, smallest to largest.
 */
function sort(x) {
  return x.sort();
}

/**
 * Returns x with every element replaced with a string of "a"s each with a random length 1 to 100000.
 * @param {Array.} x
 * @return {Array.} x with every element replaced with a string of "a"s each with a random length 1 to 100000.
 */
function theEvanIsSpecial(x) {
  for (var i = 0; i < x.length; ++i) {
    x[i] = "";
    for (var o = 0; o < randomNumber(1, 100000); ++o) {
      x[i] += "a"; 
    }
  }
  
  return x;
}

// helper code that will make input into an array
function toNumberArray(x) {
  return x.replace(/\s+/g, "").split(",").map(function(i){
    return parseInt(i, 10);
  });
}

function toStringArray(x) {
  return x.trim().split(",");
}

// These are tests:
console.log("Evan is special\nInput: [\"q\", \"w\", \"e\", \"r\", \"t\", \"y\"]\nOutput: " + theEvanIsSpecial(["q", "w", "e", "r", "t", "y"]));
console.log("Sort\nInput: [10, 8, 4, 7, 1, 2, 3, 9, 5]\nOutput: " + sort([10, 8, 4, 7, 1, 2, 3, 9, 5]));
console.log("Unique\nInput: [1, 1, 1, 2, 2, 3, 4, 5, 9, 9, 7, 6]\nOutput: " + unique([1, 1, 1, 2, 2, 3, 4, 5, 9, 9, 7, 6]));
console.log("Top Three\nInput: [10, 8, 4, 7, 1, 2, 3, 9, 5]\nOutput: " + topThree([10, 8, 4, 7, 1, 2, 3, 9, 5]));
console.log("Numbered List\nInput: [\"Apples\", \"Oranges\", \"Bannanas\"]\nOutput: " + numberedList(["Apples", "Oranges", "Bannanas"]));
console.log("Filter Letters\nInput: ([\"abcd\", \"bcde\", \"adddd\"], \"a\")\nOutput: " + filterLetters(["abcd", "bcde", "adddd"], "a"));
console.log("Filter Numbers\nInput: ([1, 2, 3, 4, 2, 2, 2, 4], 2)\nOutput: " + filterNumbers([1, 2, 3, 4, 2, 2, 2, 4], 2));
console.log("Combine\nInput: ([\"a\", \"b\"], [\"c\", \"d\"])\nOutput: " + combine(["a", "b"], ["c", "d"]));
console.log("Count\nInput: ([\"a\", \"b\", \"c\", \"d\", \"a\", \"c\", \"a\", \"a\", \"adsf\", \"a\", \"4b\"], \"a\")\nResult: " +  count(["a", "b", "c", "d", "a", "c", "a", "a", "adsf", "a", "4b"], "a"));
console.log("Average\nInput: [1, 2, 3, 4, 5, 6, 7, 8, 1231231, 0, 3]\nResult: " +  avg([1, 2, 3, 4, 5, 6, 7, 8, 1231231, 0, 3]));
console.log("Minumum\nInput: [1, 2, 3, 4, 5, 6, 7, 8, 1231231, 0, 3]\nResult: " +  min([1, 2, 3, 4, 5, 6, 7, 8, 1231231, 0, 3]));
console.log("Maximum\nInput: [1, 2, 3, 4, 5, 6, 7, 8, 1231231, 0, 3]\nResult: " +  max([1, 2, 3, 4, 5, 6, 7, 8, 1231231, 0, 3]));
console.log("Remove Letter\nBefore: \"cthiccsccc iscc accc teccscct\"\nAfter: " + removeLetter("cthiccsccc iscc accc teccscct", "c"));
console.log("Trim\nBefore:\"     this is a test    \"\nAfter: " + trim("     this is a test     "));
console.log("Capitalize\nBefore \"this is a test sentence\"\nAfter: " + capitalize("this is a test sentence"));

// Home screen clicking buttons
onEvent("capitalizeButton", "click", function() {
  setScreen("capitalizeScreen");
});
onEvent("trimButton", "click", function() {
  setScreen("trimScreen");
});
onEvent("removeLetterButton", "click", function() {
  setScreen("removeLetterScreen");
});
onEvent("maxButton", "click", function() {
  setScreen("maxScreen");
});
onEvent("minButton", "click", function() {
  setScreen("minScreen");
});
onEvent("avgButton", "click", function() {
  setScreen("avgScreen");
});
onEvent("countButton", "click", function() {
  setScreen("countScreen");
});
onEvent("combineButton", "click", function() {
  setScreen("combineScreen");
});
onEvent("filterNumbersButton", "click", function() {
  setScreen("filterNumbersScreen");
});
onEvent("filterLettersButton", "click", function() {
  setScreen("filterLettersScreen");
});
onEvent("numberedListButton", "click", function() {
  setScreen("numberedListScreen");
});
onEvent("topThreeButton", "click", function() {
  setScreen("topThreeScreen");
});
onEvent("uniqueButton", "click", function() {
  setScreen("uniqueScreen");
});
onEvent("sortButton", "click", function() {
  setScreen("sortScreen");
});

// capitalize screen
onEvent("capitalizeBackButton", "click", function() {
  setScreen("homeScreen");
  setProperty("capitalizeParamXInput", "text", "");
  setProperty("capitalizeOutput", "text", "");
});

onEvent("capitalizeParamXInput", "input", function() {
  setProperty("capitalizeOutput", "text", capitalize(getText("capitalizeParamXInput")));
});

// trim screen
onEvent("trimBackButton", "click", function() {
  setScreen("homeScreen");
  setProperty("trimParamXInput", "text", "");
  setProperty("trimOutput", "text", "");
});

onEvent("trimParamXInput", "input", function() {
  setProperty("trimOutput", "text", capitalize(getText("trimParamXInput")));
});

// removeLetter screen
onEvent("removeLetterBackButton", "click", function() {
  setScreen("homeScreen");
  setProperty("removeLetterParamXInput", "text", "");
  setProperty("removeLetterParamCInput", "text", "");
  setProperty("removeLetterOutput", "text", "");
});

onEvent("removeLetterParamXInput", "input", function() {
  setProperty("removeLetterOutput", "text", removeLetter(getText("removeLetterParamXInput"), getText("removeLetterParamCInput")));
});

onEvent("removeLetterParamCInput", "input", function() {
  setProperty("removeLetterOutput", "text", removeLetter(getText("removeLetterParamXInput"), getText("removeLetterParamCInput")));
});

// max screen
onEvent("maxBackButton", "click", function() {
  setScreen("homeScreen");
  setProperty("maxParamXInput", "text", "");
  setProperty("maxOutput", "text", "");
});

onEvent("maxParamXInput", "input", function() {
  setProperty("maxOutput", "text", max(toNumberArray(getText("maxParamXInput"))));
});

// min screen
onEvent("minBackButton", "click", function() {
  setScreen("homeScreen");
  setProperty("minParamXInput", "text", "");
  setProperty("minOutput", "text", "");
});

onEvent("minParamXInput", "input", function() {
  setProperty("minOutput", "text", min(toNumberArray(getText("minParamXInput"))));
});

// avg screen
onEvent("avgBackButton", "click", function() {
  setScreen("homeScreen");
  setProperty("avgParamXInput", "text", "");
  setProperty("avgOutput", "text", "");
});

onEvent("avgParamXInput", "input", function() {
  setProperty("avgOutput", "text", avg(toNumberArray(getText("avgParamXInput"))));
});

// count screen
onEvent("countBackButton", "click", function() {
  setScreen("homeScreen");
  setProperty("countParamXInput", "text", "");
  setProperty("countParamCInput", "text", "");
  setProperty("countOutput", "text", "");
});

onEvent("countParamXInput", "input", function() {
  setProperty("countOutput", "text", count(toStringArray(getText("countParamXInput")), getText("countParamCInput")));
});

onEvent("countParamCInput", "input", function() {
  setProperty("countOutput", "text", count(toStringArray(getText("countParamXInput")), getText("countParamCInput")));
});

// combine screen
onEvent("combineBackButton", "click", function() {
  setScreen("homeScreen");
  setProperty("combineParamXInput", "text", "");
  setProperty("combineParamZInput", "text", "");
  setProperty("combineOutput", "text", "");
});

onEvent("combineParamXInput", "input", function() {
  setProperty("combineOutput", "text", (combine(toStringArray(getText("combineParamXInput")), toStringArray(getText("combineParamZInput"))).join(", ")));
});

onEvent("combineParamZInput", "input", function() {
  setProperty("combineOutput", "text", (combine(toStringArray(getText("combineParamXInput")), toStringArray(getText("combineParamZInput"))).join(", ")));
});

// filterNumbers screen
