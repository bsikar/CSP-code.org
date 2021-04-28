var peopleList = ["You", "Me", "Another Person", "Joe", "bob", "jack", "jeff", "reee"];

updateScreen();

function updateScreen() {
    setProperty("peopleLabel", "text", peopleList.join("
                "));
                setProperty("peopleDropdown", "options", peopleList);
            }

            onEvent("addPersonButton", "click", function() {
                var newPerson = getText("personInput");
                insertItem(peopleList, 0, newPerson);
                setProperty("personInput", "text", "");
                updateScreen();
            });

            onEvent("removePersonButton", "click", function() {
                var personIndex = getProperty("peopleDropdown", "index");
                removeItem(peopleList, personIndex);
                updateScreen();
            });

            onEvent("randomAssignButton", "click", function() {
                if ((peopleList.length >= 3)) {
                    var randomIndex1 = randomNumber(0, peopleList.length - 1);
                    var randomPerson1 = peopleList[randomIndex1];
                    removeItem(peopleList, randomIndex1);

                    var randomIndex2 = randomNumber(0, peopleList.length - 1);
                    var randomPerson2 = peopleList[randomIndex2];
                    removeItem(peopleList, randomIndex2);

                    var randomIndex3 = randomNumber(0, peopleList.length - 1);
                    var randomPerson3 = peopleList[randomIndex3];
                    removeItem(peopleList, randomIndex3);

                    setProperty("pairLabel", "text", randomPerson1 + " and " + randomPerson2 + " and " + randomPerson3);

                } else {
                    setProperty("pairLabel", "text", "Add more people to make a pair");
                }
                updateScreen();
            });