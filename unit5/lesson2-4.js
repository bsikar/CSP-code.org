var adjectiveList = ["Sideways", "Time", "Forbidden", "Organized", "Simple", "Wake Up", "Woopsie", "Random", "ett", "tewqtet", "sadfadf"];
var nounList      = ["Monkeys", "Balloons", "Family", "Sandwich", "Puppies", "Rakes", "Turnips", "dfasdfsd", "asdfsdf", "fasdfsd"];

var adjectiveIndex    = 0;
var nounIndex         = 0;

updateScreen();

onEvent("randomizeButton", "click", function( ) {
  nounIndex = randomNumber(0,nounList.length-1);
  adjectiveIndex = randomNumber(0,adjectiveList.length-1);
  playSound("sound://category_bell/notification_4.mp3", false);
  updateScreen();
});

function updateScreen(){
  var adjective = adjectiveList[adjectiveIndex];
  var noun = nounList[nounIndex];
  var bandName = adjective + "\n" + noun;
  setProperty("bandNameLabel","text",bandName);
}

