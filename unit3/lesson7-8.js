// Button to update screen to excited image, text, and song
onEvent("calmButton", "click", function( ) {
  setProperty("calmButton","border-width",2);
  setProperty("tiredButton","border-width",0);
  setProperty("excitedButton","border-width",0);

  setProperty("mainImage","image","https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg");
  setProperty("mainText","text","Your mind is clear. Breathe deeply and enjoy the calm.");
  stopSound();
  playSound("sound://category_loops/stabilizing_breath_loop1.mp3", true);
});

// Button to update screen to tired image, text, and song
onEvent("tiredButton", "click", function( ) {
  setProperty("tiredButton","border-width",2);
  setProperty("calmButton","border-width",0);
  setProperty("excitedButton","border-width",0);

  setProperty("mainImage","image","https://cdn.pixabay.com/photo/2016/03/27/20/51/bed-1284238_960_720.jpg");
  setProperty("mainText","text","Let yourself rest and save your energy.");
  stopSound();
  playSound("sound://category_loops/vibrant_game_harping_down_forever_loop_1.mp3", false);
});

onEvent("excitedButton", "click", function( ) {
  setProperty("tiredButton","border-width",0);
  setProperty("calmButton","border-width",0);
  setProperty("excitedButton","border-width",2);

  setProperty("mainImage","image","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgflip.com%2Fs%2Fmeme%2FExcited-Cat.jpg&f=1&nofb=1");
  setProperty("mainText","text","Let yourself rest and save your energy.");
  stopSound();
  playSound("https://www.youtube.com/watch?v=B1lNhNHdoPI", true);
});


