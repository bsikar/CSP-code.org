// Create and assign variables
var clicks = 0;

onEvent("addOneButton", "click", function() {
  // This line creates the scope issue.
  // You should only create variables once,
  // and at the start of your program.
  clicks = clicks + 1;
  setProperty("counter","text",clicks);
});
