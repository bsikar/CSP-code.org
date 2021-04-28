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
