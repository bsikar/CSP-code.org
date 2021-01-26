onEvent("calculateButton", "click", function() {
  /*
  * if its the weekend then everyone pays the same unless they are older than 65 then they pay $5
  * else if its Friday and someone uses the discount code 'FREEFRIDAY' then they pay nothing
  * else if its Monday and someone uses the discount code 'Garfield' then they pay $2
  * else if they are 18 or younger or if they are 65 or older they pay $5
  * else they pay $10
  */
  if (getText("dayDropdown") == "Saturday" || getText("dayDropdown") == "Sunday") {
    if (getText("ageDropdown") < 65){
      setText("ticketOutput", "Day: " + getText("dayDropdown") + "\nAge: " + getText("ageDropdown") + "\nPrice: $10");
    }
    else {
      setText("ticketOutput", "Day: " + getText("dayDropdown") + "\nAge: " + getText("ageDropdown") + "\nPrice: $5");
    }
  } else if (getText("dayDropdown") == "Friday" && getText("discountInput") == "FREEFRIDAY") {
    setText("ticketOutput", "Day: " + getText("dayDropdown") + "\nAge: " + getText("ageDropdown") + "\nPrice: $0");
  } else if (getText("dayDropdown") == "Monday" && getText("discountInput") == "Garfield") {
    setText("ticketOutput", "Day: " + getText("dayDropdown") + "\nAge: " + getText("ageDropdown") + "\nPrice: $2");
  } else if (getText("ageDropdown") <= 18 || getText("ageDropdown") >= 65) {
    setText("ticketOutput", "Day: " + getText("dayDropdown") + "\nAge: " + getText("ageDropdown") + "\nPrice: $5");
  } else {
    setText("ticketOutput", "Day: " + getText("dayDropdown") + "\nAge: " + getText("ageDropdown") + "\nPrice: $10");
  }
});

