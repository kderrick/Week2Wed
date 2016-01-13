$(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name1", "name2", "adjective1", "verb1", "noun1"];

    for (var index=0; index <= blanks.length; index +=1) {
      var userInput = $("input#" + blanks[index]).val();
      $("." + blanks[index]).text(userInput);

    }

    $("#letter").show();
    event.preventDefault();
  });
});
