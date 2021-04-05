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

// Displays information about three different people in the console.
nameAndAge("Lenora", 15, "March");
nameAndAge("Tan", 3, "July");
nameAndAge("Laquan", 9, "October");

// Displays information about a person in the console.
// name {string} - the person's name
// age {number} - the person's age in years
// birthMonth {string} - a month of the year, e.g. "January"
function nameAndAge(name, age, birthMonth){
  console.log(name + " is " + age + " years old and is " + ageToDescription(age));
  console.log(name + " was born in " + birthMonth + " which is in the " + monthToSeason(birthMonth));
}

// Translates an age in years into a text description
// years {number} - the age in years
// return {string} - a text description of the age as "an infant", "a preschooler", "a grade schooler", "a teenager", "an adult"
function ageToDescription(years){
  var description = "";
  if (years <= 1) {
    description = "an infant";
  } else if (years <= 3){
    description = "a toddler";
  } else if (years <= 5){
    description = "a preschooler";
  } else if (years <= 12){
    description = "a grade schooler";
  } else if (years <= 19){
    description = "a teenager";
  } else {
    description = "an adult";
  }
  return description;
}

// Converts a month to the season of the year
// month {string} - a month of the year, "January", "February", ...., "December"
// return {string} - a season of the year, "Spring", "Summer", "Fall", "Winter"
function monthToSeason(month){
  switch (month) {
  case "March":
  case "April":
  case "May": return "Spring";
  case "June":
  case "July":
  case "August": return "Summer";
  case "September":
  case "October":
  case "November": return "Fall";
  default:
    return "Winter";
  }
}

