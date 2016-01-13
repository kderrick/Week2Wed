$(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name", "street", "city", "state"]; //creates array "blanks"

    blanks.forEach(function(blank) { //for each value in "blanks", we call them blank.
      var userInput = $("input#" + blank).val(); //creates variable "userInput" which takes each blank and inserts "input#" before it. ex input#name
      $("." + blank).text(userInput); //insert userInput variable into each class.
    });
    $("#letter").show();
    event.preventDefault();
  });
});
