onEvent("complimentButton", "click", function(){
  updateScreen();
});


// Combines a random greeting in various languages with a name
// name {string} - the name of a person
// return {string} - the complete greeting which combines the random greeting with a name
function randomGreeting(name){
  var greetings = ["Good day, ", "Bonne journée, ", "Buenos dias, ", "Magandang araw, ", "美好的一天, "];
  var statement = greetings[randomNumber(0, greetings.length-1)] + name + ".";
  return statement;
}

// Combines a random compliment a name
// name {string} - the name of a person
// return {string} - the complete compliment which combines the random compliment with a name
function randomCompliment(name){
  var compliments = [", you have incredible hair!", ", you are astonishingly smart!",
  ", your fashion sense is unmatched!", ", your smile lights up the room!",
  ", you are uncommonly talented!", ", you are ridiculously funny!"];
  var statement = name + compliments[randomNumber(0, compliments.length-1)];
  return statement;
}

function updateScreen(){
  setText("output", randomGreeting(getText("nameInput")) + '\n' + randomCompliment(getText("nameInput")));
}

