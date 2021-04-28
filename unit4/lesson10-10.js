// Create and assign values to variables
var dollars = 0;
var tickets = 0;
var adultPrice = 12.50;
var childPrice = 8.50;
var seniorPrice = 10;

// This button already works
onEvent("adultButton","click",function(){
  // Increase tickets sold and dollars collected
  tickets = tickets + 1;
  dollars = dollars + adultPrice;

  // Update screen
  updateScreen();
});

// Add code to make this button work
onEvent("childButton","click",function(){
  dollars += childPrice;
  tickets = tickets + 1;
});

// Add code to make this button work
onEvent("seniorButton","click",function(){
  dollars += seniorPrice;
  tickets = tickets + 1;
});

function updateScreen() {
   if(tickets >= 20){
  setProperty("soldOutLabel","hidden",false);
  }
  setProperty("dollarsLabel", "text", "$" + dollars);
  setProperty("ticketsLabel", "text", tickets + " tickets");
  playSound("sound://category_digital/coin_2.mp3");
}
