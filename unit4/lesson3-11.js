// Create and assign values to variables
var dollars = 0;
var tickets = 0;
var adultPrice = 12.50;
var childPrice = 8.50;
var seniorPrice = 10;

// Use the code in this button to guide how you
// add code to the others.
onEvent("adultButton","click",function(){
  // Increase tickets sold
  tickets = tickets + 1;
  // Increase dollars collected
  dollars = dollars + adultPrice;
  setProperty("dollarsLabel", "text", "$" + dollars);
  setProperty("ticketsLabel", "text", tickets + " tickets");
  playSound("sound://category_digital/coin_2.mp3");
});

// Add code to make this button work
onEvent("childButton","click",function(){
// Increase tickets sold
  tickets = tickets + 1;
  // Increase dollars collected
  dollars = dollars + childPrice;
  setProperty("dollarsLabel", "text", "$" + dollars);
  setProperty("ticketsLabel", "text", tickets + " tickets");
  playSound("sound://category_digital/coin_2.mp3");
});

// Add code to make this button work
onEvent("seniorButton","click",function(){
// Increase tickets sold
  tickets = tickets + 1;
  // Increase dollars collected
  dollars = dollars + seniorPrice;
  setProperty("dollarsLabel", "text", "$" + dollars);
  setProperty("ticketsLabel", "text", tickets + " tickets");
  playSound("sound://category_digital/coin_2.mp3");
});
