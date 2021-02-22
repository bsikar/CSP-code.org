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

onEvent("calculateButton", "click", function() {
  /*
  * if its the weekend then everyone pays the same unless they are older than 65 then they pay $5
  * else if its Friday and someone uses the discount code 'FREEFRIDAY' then they pay nothing
  * else if its Monday and someone uses the discount code 'Garfield' then they pay $2
  * else if they are 18 or younger or if they are 65 or older they pay $5
  * else they pay $10
  */
  if (getText("dayDropdown") == "Saturday" || getText("dayDropdown") == "Sunday") {
    if (getText("ageDropdown") < 65){
      setText("ticketOutput", "Day: " + getText("dayDropdown") + "
Age: " + getText("ageDropdown") + "
Price: $10");
    }
    else {
      setText("ticketOutput", "Day: " + getText("dayDropdown") + "
Age: " + getText("ageDropdown") + "
Price: $5");
    }
  } else if (getText("dayDropdown") == "Friday" && getText("discountInput") == "FREEFRIDAY") {
    setText("ticketOutput", "Day: " + getText("dayDropdown") + "
Age: " + getText("ageDropdown") + "
Price: $0");
  } else if (getText("dayDropdown") == "Monday" && getText("discountInput") == "Garfield") {
    setText("ticketOutput", "Day: " + getText("dayDropdown") + "
Age: " + getText("ageDropdown") + "
Price: $2");
  } else if (getText("ageDropdown") <= 18 || getText("ageDropdown") >= 65) {
    setText("ticketOutput", "Day: " + getText("dayDropdown") + "
Age: " + getText("ageDropdown") + "
Price: $5");
  } else {
    setText("ticketOutput", "Day: " + getText("dayDropdown") + "
Age: " + getText("ageDropdown") + "
Price: $10");
  }
});