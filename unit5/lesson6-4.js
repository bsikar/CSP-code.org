var phrases = ["The quick brown fox jumps over the lazy dog", 
               "To be or not to be, that is the question", 
               "Lorem ipsum dolor sit amet",
               "Try to be a rainbow in someone's cloud"];
               
onEvent("textInput", "input", function( ) {
  for (var i = 0; i < 5; i++) {
    setProperty("text"+i, "text", getText("textInput"));
  }
});
onEvent("fontSizeSlider", "change", function( ) {
  for (var i = 0; i < 5; i++) {
    setProperty("text"+i, "font-size", getNumber("fontSizeSlider"));
  }
  playSound("sound://category_tap/puzzle_game_organic_wood_block_tone_tap_3_app_click.mp3");
});
onEvent("colorDropdown", "input", function( ) {
  for (var i = 0; i < 5; i++) {
    setProperty("text"+i, "text-color", getText("colorDropdown"));
  }
});
onEvent("randomPhraseButton", "click", function( ) {
  var currentPhrase = getText("textInput");
  var randomPhrase = currentPhrase;
  while(randomPhrase == currentPhrase){
    randomPhrase = phrases[randomNumber(0,phrases.length-1)];
  }
  for (var i = 0; i < 5; i++) {
    setProperty("text"+i, "text", randomPhrase);
  }
  setProperty("textInput","text", randomPhrase);

});

