//Play a moo sound when the user clicks the cow
onEvent("cowImage", "click", function() {
    playSound("sound://category_animals/moo.mp3");
    setProperty("animalText", "text", "Cow");
});

//Play a rooster sound when the user clicks the rooster
onEvent("pigImage", "click", function() {
    playSound("sound://category_animals/pig.mp3");
    setProperty("appName", "text", "Pig");
});

//Play a pig sound when the user clicks the pig
onEvent("roosterImage", "click", function() {
    playSound("sound://category_animals/rooster.mp3");
    setProperty("animalText", "text", "Rooster");
});