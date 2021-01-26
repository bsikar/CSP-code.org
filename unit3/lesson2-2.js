onEvent("blueButton", "click", function() {
  setProperty("colorswatch", "background-color", "blue");
  playSound("Blue.mp3", false);
});
onEvent("purpleButton", "click", function() {
  setProperty("colorswatch", "background-color", "purple");
  playSound("Purple.mp3", false);
});
onEvent("redButton", "click", function() {
  setProperty("colorswatch", "background-color", "red");
  playSound("Red.mp3", false);
});
onEvent("nextButton", "click", function() {
  setScreen("trashScreen");
});
onEvent("recycleBin", "click", function() {
  setText("pictureInfo", "Recycling Bin: Put in here any items that can be recycled.");
});
onEvent("trashCan", "click", function() {
  setText("pictureInfo", "Trash Can: Throw away all trash in the blue bins.");
});
onEvent("flowerBasket", "click", function() {
  playSound("sound://category_digital/power_down_2.mp3", false);
  setText("pictureInfo", "New flower baskets: No trash belongs here!");
});
onEvent("lastButton", "click", function() {
  setScreen("gardenScreen");
});
onEvent("homeButton", "click", function() {
  setScreen("homeScreen");
});

