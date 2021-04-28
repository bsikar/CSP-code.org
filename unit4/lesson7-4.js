var fruitServings = 3;
var vegServings = 5;
var grainServings = 4;

// Predict how the first three questions will be answered. Then run the code
// to check your predictions.
console.log("Q1: Am I eating more than 3 fruitservings AND more than 5 vegetable servings?");
console.log((fruitServings > 3) && (vegServings > 5));
console.log("False");

console.log("Q2: Am I eating 4 or fewer grain servings AND 4 or fewer fruit servings?");
console.log((grainServings <= 4) && (fruitServings <= 4));
console.log("True");

console.log("Q3: Am I eating exactly 5 grainServings OR any amount besides 2 fruitServings");
console.log((grainServings == 5) || (fruitServings != 2));
console.log("True");

// Add code to answer questions 4 and 5.
console.log("Q4: Am I eating exactly 3 grain servings OR exactly 3 fruit servings?");
console.log((grainServings == 3) || (fruitServings == 3));
console.log("True");

console.log("Q5: Am I eating 5 or fewer vegetable servings AND any amount besides 5 grain servings?");
console.log((vegServings <= 5) && (grainServings != 5));
console.log("True");