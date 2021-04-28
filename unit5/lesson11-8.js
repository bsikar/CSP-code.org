// Create and assign variables and lists
var avgGrade = 0;
var gradesList = [];

onEvent("addGradeButton","click",function(){
  var newGrade = getNumber("gradeInput");
  appendItem(gradesList,newGrade);

  updateScreen();
});

onEvent("averageGradeButton","click",function(){
  // Add code here to make the app show the average grade
  // when the user clicks the average grade button
  for (var i = 0; i < gradesList.length; ++i) {
  avgGrade += gradesList[i];
  }
  avgGrade /= gradesList.length;
  setProperty("averageGradeLabel", "text", avgGrade);
});

function updateScreen(){
  setProperty("gradeInput","text","");
  setProperty("gradesLabel","text",gradesList.join("
"));
}
