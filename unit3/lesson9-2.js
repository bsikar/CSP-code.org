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

var i=0;
// choice screen
onEvent("choiceCLogo", "click", function() {
    setScreen("mainScreenC");
    if (i == 0) {
    	playSound("sound://category_music/clear_evidence_loop1.mp3", true);
    	i=2;
    }
    console.log("Sending you to the c home page!");
});

onEvent("choiceC++Logo", "click", function() {
    setScreen("mainScreenC++");
    if (i == 0) {
    	playSound("sound://category_music/clear_evidence_loop1.mp3", true);
    	i=2;
    }
    console.log("Sending you to the c++ home page!");
});

// c++:
// main screen:
// setup button
onEvent("setupButtonC++", "click", function() {
    setScreen("setupScreenC++");
    console.log("Sending you to the c++ setup page!");
});
// header button
onEvent("headerButtonC++", "click", function() {
    setScreen("headerScreenC++");
    console.log("Sending you to the c++ header page!");
});
// final button
onEvent("finalResultButtonC++", "click", function() {
    setScreen("finalScreenC++");
    console.log("Sending you to the c++ final page!");
});
// start button
onEvent("startButtonC++", "click", function() {
    setScreen("setupScreenC++");
    console.log("App has started!");
});
// c++ button
onEvent("cButtonC++", "click", function() {
    setScreen("mainScreenC");
    console.log("Sending you to the c home page");
});
// setup screen:
// back button
onEvent("setupBackButtonC++", "click", function() {
    setScreen("mainScreenC++");
    console.log("Sending you to the c++ home page!");
});
// next button
onEvent("setupNextButtonC++", "click", function() {
    setScreen("headerScreenC++");
    console.log("Sending you to the c++ header and function page!");
});
// header screen:
// back button
onEvent("headerBackButtonC++", "click", function() {
    setScreen("setupScreenC++");
    console.log("Sending you to the c++ setup page!");
});
// next button
onEvent("headerNextButtonC++", "click", function() {
    setScreen("finalScreenC++");
    console.log("Sending you to the c++ final page!");
});
// final screen:
// back button
onEvent("finalBackButtonC++", "click", function() {
    setScreen("headerScreenC++");
    console.log("Sending you to the c++ header and function page!");
});
// next button:
onEvent("finalNextButtonC++", "click", function() {
    setScreen("mainScreenC++");
    console.log("Sending you to the c++ home page!");
});




// c:
// main screen:
// setup button
onEvent("setupButtonC", "click", function() {
    setScreen("setupScreenC");
    console.log("Sending you to the c setup page!");
});
// header button
onEvent("headerButtonC", "click", function() {
    setScreen("headerScreenC");
    console.log("Sending you to the c header page!");
});
// final button
onEvent("finalResultButtonC", "click", function() {
    setScreen("finalScreenC");
    console.log("Sending you to the c final page!");
});
// start button
onEvent("startButtonC", "click", function() {
    setScreen("setupScreenC");
    console.log("App has started!");
});
// c++ button
onEvent("c++ButtonC", "click", function() {
    setScreen("mainScreenC++");
    console.log("Sending you to the c++ home page");
});  
// setup screen:
// back button
onEvent("setupBackButtonC", "click", function() {
    setScreen("mainScreenC");
    console.log("Sending you to the c home page!");
});
// next button
onEvent("setupNextButtonC", "click", function() {
    setScreen("headerScreenC");
    console.log("Sending you to the c header and function page!");
});
// header screen:
// back button
onEvent("headerBackButtonC", "click", function() {
    setScreen("setupScreenC");
    console.log("Sending you to the c setup page!");
});
// next button
onEvent("headerNextButtonC", "click", function() {
    setScreen("finalScreenC");
    console.log("Sending you to the c final page!");
});
// final screen:
// back button
onEvent("finalBackButtonC", "click", function() {
    setScreen("headerScreenC");
    console.log("Sending you to the c header and function page!");
});
// next button:
onEvent("finalNextButtonC", "click", function() {
    setScreen("mainScreenC");
    console.log("Sending you to the c home page!");
});