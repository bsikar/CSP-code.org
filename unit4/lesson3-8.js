// Create and assign variables
// Feel free to change the reminder
var allReminders = "Feed the cats";
var newReminder;

// Put the first reminder on the screen
setProperty("reminderText", "text", allReminders);

// When the button is clicked, add the new reminder
// to the screen on a new line. The reminder
// input box should be cleared out for the next
// reminder.
onEvent("reminderButton", "click", function() {
    newReminder = getText("reminderInput");
    allReminders = allReminders + "
    " +newReminder;
    setProperty("reminderText", "text", allReminders);
    setProperty(" ");
});