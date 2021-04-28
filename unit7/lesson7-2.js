var currentState;

newState();

onEvent("newStateButton", "click", function() {
    newState();
});

onEvent("guessButton", "click", function() {
    var guessState = getProperty("stateNameInput", "text");
    if (guessState.toLowerCase() == currentState.toLowerCase()) {
        setProperty("appText", "text", "Correct!");
    } else {
        setProperty("appText", "text", "Nope, that's not it!");
    }
});

function newState() {
    currentState = StateLibrary.randomState();
    setProperty("flagImage", "image", StateLibrary.stateFlag(currentState));

}