// Create and assign variables
var score = 0;
var lives = 3;
var userName;
var password;

// Button to start the game
onEvent("playButton", "click", function() {
  
  // Set starting values for variables and properties
  score = 0;
  lives = 3;
  setProperty("scoreLivesLabel","text","Score: " + score + " Lives: " + lives);
  // Get user name and password 
  userName = getText("nameDropdown");
  password = getText("passwordInput");
  // Check login information
  if((userName == "Lemonhead") && (password == "lemon123")){
    setScreen("gameScreen");
    playSound("sound://category_alerts/vibrant_game_carton_start_game_2_long.mp3", false);
  } else if ((userName == "Mellow Yellow") && (password == "iLoveLemons")){
    setScreen("gameScreen");
    playSound("sound://category_alerts/vibrant_game_carton_start_game_2_long.mp3", false);
  } else if ((userName == "b") && (password == "s")){
    setScreen("gameScreen");
    playSound("sound://category_alerts/vibrant_game_carton_start_game_2_long.mp3", false);
  } else {
    playSound("sound://category_instrumental/harpe_downscale_1.mp3");
  }
});

// Event handler for when the mouse touches a lemon
onEvent("lemon", "mouseover", function( ) {
  playSound("sound://category_collect/collect_item_bling_1.mp3");
  
  // Increase the score
  score = score + 1;
  
  // Set the size of the lemon based on the score
  if (score > 15){
    setProperty("lemon","width",60);
    setProperty("lemon","height",60);
  } else if (score > 10) {
    setProperty("lemon","width", 100);
    setProperty("lemon","height", 100);    
  } else {
    setProperty("lemon","width", 140);
    setProperty("lemon","height", 140); 
  }
  
  // Move the lemon and lime to random locations
  setProperty("lemon","x", randomNumber(50,220));
  setProperty("lemon","y", randomNumber(50,320));
  setProperty("lime","x", randomNumber(50,220));
  setProperty("lime","y", randomNumber(50,320));
  
  // Update screen text
  setProperty("scoreLivesLabel","text", "Score: " + score + " Lives: " + lives);
});

// Event handler for when the mouse touches a lime
onEvent("lime", "mouseover", function() {
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  
  // Decrease lives
  lives = lives - 1;

  // Move the lemon and lime to random locations
  setProperty("lemon","x",randomNumber(50,220));
  setProperty("lemon","y", randomNumber(50,320));
  setProperty("lime","x", randomNumber(50,220));
  setProperty("lime","y", randomNumber(50,320));
  
  // Update screen text
  setProperty("scoreLivesLabel","text","Score: " + score + " Lives: " + lives);

  // End game when you run out of lives
  if(lives == 0){
    setScreen("startScreen"); 
    setProperty("startLabel","text","You collected " + score + " lemons! Play again?");
  }
});

