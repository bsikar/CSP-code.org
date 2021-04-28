// Global Variables
var hasTimeNow; // bool
var hasTimeLater; // string
var currentGrade; // int

// If any values in the app change, update the screen
onEvent("currentGradeSlider", "change", updateScreen);
onEvent("hasTimeLaterDropdown", "change", updateScreen);
onEvent("hasTimeNowDropdown", "change", updateScreen);

// updateScreen function that will update the screen
function updateScreen() {
    // update the variables accordantly
    getText("hasTimeNowDropdown") == "Yes" ? hasTimeNow = true : hasTimeNow = false;
    getText("hasTimeLaterDropdown") == "Yes" ? hasTimeLater = "true" : hasTimeLater = "false";
    currentGrade = getNumber("currentGradeSlider");
    setProperty("currentGradeOutput", "text", "Current Grade: " + currentGrade + "%");

    // output if they should do their homework or not
    if (hasTimeNow || currentGrade < 70) { // if they have time or if they are failing make tell them to do the homework
        setProperty("dontDoHomeworkOutput", "hidden", true);
        setProperty("otherDoHomeworkOutput", "hidden", true);
        setProperty("doHomeworkOutput", "hidden", false);
    } else if (!hasTimeNow && hasTimeLater == "true") { // if they don't have time now, but they do later tell them to not do the homework
        setProperty("doHomeworkOutput", "hidden", true);
        setProperty("otherDoHomeworkOutput", "hidden", true);
        setProperty("dontDoHomeworkOutput", "hidden", false);
    } else { // else tell them that you do not know and to make up their own mind
        setProperty("dontDoHomeworkOutput", "hidden", true);
        setProperty("doHomeworkOutput", "hidden", true);
        setProperty("otherDoHomeworkOutput", "hidden", false);
    }
}