// Create and assign variables
var dollars = 5;
var apples = 0;

onEvent("appleImage", "click", function() {
    buyApple();
});

function buyApple() {
    setText("info", "I had " + apples + " apples.");
    dollars = dollars - 1;
    apples = apples + 1;
    setText("results", "Now I have " + apples + ".");
    setText("dollarsLabel", dollars);
}