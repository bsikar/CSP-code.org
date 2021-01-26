// Create variables
var clicks = 0;

// When the star is clicked increase the
// count by 1 and change the star's color
onEvent("star", "click", function() {
  clicks = clicks + 1;
  setText("numClicks", clicks);
  
  // add the Boolean expression to the if-statement
  if(clicks > 5){
    setProperty("star", "icon-color", "red");
   
  }

});
