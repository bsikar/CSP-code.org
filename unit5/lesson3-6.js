// Create and assign variables
var index = 0;
var classes = ["Biology", "Algebra", "Social Studies", "Gym"];
updateScreen();

onEvent("leftButton", "click", function() {
    // use the Scroll Pattern to decrease the index
    if (index > 0) {
        --index;
    }
    // call updateScreen()
    updateScreen();
    playSound("sound://category_accent/puzzle_game_accent_small_d_01.mp3");
});


onEvent("rightButton", "click", function() {

    if (index < (classes.length - 1)) {
        index = index + 1;
    }
    updateScreen();
    playSound("sound://category_accent/puzzle_game_accent_small_d_02.mp3");
});

function updateScreen() {
    setText("classLabel", classes[index]);
    setText("periodLabel", "Period: " + (index + 1));
}