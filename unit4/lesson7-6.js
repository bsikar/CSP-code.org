var clicks = 0;

onEvent("star", "click", function() {
  clicks = clicks + 1;
  setText("numClicks", clicks);

  if(clicks == 0){
  setProperty("star", "icon-color", "black");
  } else if (clicks >= 1 && clicks <= 4) {
  setProperty("star", "icon-color", "red");
  } else {
  setProperty("star", "icon-color", "orange");
  }

});
