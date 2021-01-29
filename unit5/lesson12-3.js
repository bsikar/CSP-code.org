// Build the Random Forecaster app
// global variable
var info = {
  city: getColumn("Daily Weather", "City"),
  high: getColumn("Daily Weather", "High Temperature"),
  low: getColumn("Daily Weather", "Low Temperature"),
  condition: getColumn("Daily Weather", "Condition Description"),
  icon: getColumn("Daily Weather", "Icon"),
};

// if someone clicks the "Get Forecast" Button
onEvent("forecastButton", "click", function() {
  var x = randomNumber(0, 600);
  setProperty("cityOutput", "text", info.city[x]);
  setProperty("highTempOutput", "text", info.high[x]);
  setProperty("lowTempOutput", "text", info.low[x]);
  setProperty("conditionOutput", "text", info.condition[x]);
  setProperty("iconOutput", "image", info.icon[x]);
});
