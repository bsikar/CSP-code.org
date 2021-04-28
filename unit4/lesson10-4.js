// Create and assign variables
var apples = 0;
var dollars = 5;

// Function calls to buy apples
buyApple();
buyApple();
buyApple();
buyApple();
buyApple();
buyApple();

// This function spends one dollar to buy one apple
// This if-statement checks that you have enough
// money to buy the apple.
function buyApple(){
  if (dollars > 0){
  console.log("I have " + apples + " apples and " + dollars + " dollars");
  console.log("Let's buy another apple.");
  apples = apples + 1;
  dollars = dollars - 1;
  console.log("Now I have " + apples + " apples.
");
  } else {
  console.log("I don't have any money left");
  }
}
