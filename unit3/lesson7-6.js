playSound("sound://category_loops/vibrant_game_harping_down_forever_loop_1.mp3", true);
//Take the user to the details screen
onEvent("detailsButton", "click", function( ) {
  setScreen("detailsScreen");
});
onEvent("goBackButton", "click", function( ) {
  setScreen("homeScreen");
});
