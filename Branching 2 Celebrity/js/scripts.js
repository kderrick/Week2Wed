$(function() {
  $("form#celebDating").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var celeb = "celeb";
    var celeb2 = "celeb2";
    var celeb3 = "celeb3";
    var celeb4 = "celeb4";

      if (age <= 21 && gender === "male") {
        $("#match").text(celeb);
    } else if (age >= 22 && gender === "male") {
        $("#match").text(celeb2);
    } else if (age <= 21 && gender === "female") {
        $("#match").text(celeb3);
    } else {
        $("#match").text(celeb4);
    }

    $("#output").show();
    event.preventDefault();
  });
});
