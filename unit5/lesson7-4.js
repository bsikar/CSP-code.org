// Create and assign variable
var counter = 0;
var coinFlips = [];

while (counter < 10) {
    appendItem(coinFlips, randomNumber(0, 1));
    // Increase counter by 1 every time
    // through the loop
    counter++;
}

console.log("Here's 10 random coin flips");
console.log(coinFlips);

// Create and assign variable
var counter2 = 0;
var diceRolls = [];
while (counter2 < 10) {
    appendItem(diceRolls, randomNumber(1, 6));
    // Increase counter by 1 every time
    // through the loop
    counter2++;
}
// In the space below write a while loop that
// will roll 10 dice. Use the code above to help.



console.log("Here's 10 random dice rolls");
console.log(diceRolls);