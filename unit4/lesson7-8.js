var clicks = 0;

onEvent("star", "click", function() {
    clicks = clicks + 1;
    setText("numClicks", clicks);

    if (clicks < 5) {
        setProperty("star", "icon-color", "red");
    } else if (clicks < 15) {
        setProperty("star", "icon-color", "yellow");
    } else if (clicks < 10) {
        setProperty("star", "icon-color", "orange");
    } else if (clicks < 20) {
        setProperty("star", "icon-color", "green");
    } else if (clicks < 25) {
        setProperty("star", "icon-color", "blue");
    } else if (clicks < 30) {
        setProperty("star", "icon-color", "violet");
    } else {
        setProperty("star", "icon-color", "pink");
    }

});