console.log("Starting my program!");
onEvent("bigButton", "click", function() {
    setProperty("bigButton", "background-color", "blue");
    setProperty("bigButton", "height", 200);
    setProperty("bigButton", "text", "Now it's a bigger button!");
    console.log("You clicked the button!");
    setProperty("bigButton", "width", 50);
});
console.log("Ending my program!");
setProperty("screen1", "background-color", rgb(255, 0, 0, 0.5));
setProperty("screen1", "image", "https://code.org/images/logo.png");