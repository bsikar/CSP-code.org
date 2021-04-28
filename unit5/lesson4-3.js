// defining global variables (the reminderList)
var reminderList = [];
var countOutput = 0;

// show "Add Reminders!" when the app is ran,
// but do not show "Add Reminders!" when the app
// hasn't been ran
setProperty("reminderOutput", "text", "Add Reminders!");

// if the button "Add" is clicked then
// add an item to the reminderList
// increase the count (if its zero meaning you wont see the screen that says "Add Reminders!")
// and update screen
onEvent("addButton", "click", function() {
  appendItem(reminderList, getText("reminderInput"));
  // console.log(reminderList); // this is for debugging
  setProperty("reminderInput", "text", "");
  if (countOutput == 0) {
  ++countOutput;
  updateScreen();
  }
});

// if the right button is clicked then show the next text from the reminderList
onEvent("rightButton", "click", function() {
  if (countOutput < reminderList.length) {
  ++countOutput;
  updateScreen();
  }
});

// if the left button is clicked then show the previous text from the reminderList
onEvent("leftButton", "click", function() {
  if (countOutput > 1) {
  --countOutput;
  updateScreen();
  }
});

// display the text from the reminderList as well as what it is
function updateScreen() {
  setProperty("countOutput", "text", countOutput);
  setProperty("reminderOutput", "text", reminderList[countOutput-1]);
}
