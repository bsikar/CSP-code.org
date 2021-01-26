// Create and initialize variables
var dollars = 0;

// When the button is clicked, increase
// the value of dollars by 5. Update the
// text on the screen.
onEvent("addFiveButton", "click", function() {
  dollars = dollars + 5;
  setProperty("dollarsLabel","text","$"+dollars);
  playSound("sound://category_digital/ring_1.mp3");
});

// When the button is clicked, increase
// the value of dollars by 20. Update the
// text on the screen.
onEvent("addTwentyButton","click",function(){
  // Add code here to make the +$20 button work
  dollars += 20;
  setProperty("dollarsLabel","text","$"+dollars);
  playSound("sound://category_digital/ring_2.mp3");
});
