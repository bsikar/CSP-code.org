var age = 0;
var money = 0;

onEvent("adoptButton", "click", function() {
    // resets the images each time adoptButton is clicked
    hideElement("yesCat");
    hideElement("noCat");

    // update the variables here
    age = getText("ageNumber");
    money = getText("moneyNumber");

    // write Expression below that checks if age is over 14 and money equals 40
    if (age > 14 && age < 19 && money >= 40) {
        showElement("yesCat");
    } else {
        showElement("noCat");
    }
});