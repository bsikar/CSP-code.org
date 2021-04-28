var clicks = 0;

onEvent("star", "click", function() {
    clicks = clicks + 1;
    setText("numClicks", clicks);

    if (clicks == 0) {
        setProperty("star", "icon-color", "black");
    } else if (clicks >= 1 && clicks <= 4) {
        setProperty("star", "icon-color", "red");
    } else if (clicks >= 5 && clicks <= 9) {
        setProperty("star", "icon-color", "orange");
    } else if (clicks >= 10 && clicks <= 14) {
        setProperty("star", "icon-color", "yellow");
    } else if (clicks >= 15 && clicks <= 19) {
        setProperty("star", "icon-color", "green");
    } else if (clicks >= 20 && clicks <= 24) {
        setProperty("star", "icon-color", "blue");
    } else if (clicks >= 25 && clicks <= 29) {
        setProperty("star", "icon-color", "violet");
    } else {
        setProperty("star", "icon-color", "pink");
    }

});