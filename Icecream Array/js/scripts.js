// $(function() {
//   var flavors = ["Vanilla", "Chocolate", "Peppermint", "Pistachio"]
//
//   flavors.forEach(function(flavor) {
//    alert("I love " + flavor + " ice cream")
//   });
// });


$(function() {
  var flavors = ["Vanilla", "Chocolate", "Peppermint", "Pistachio"]

  $("#button").click(function() {
    $(".output").empty();
    for(var index = 0; index < flavors.length; index += 1) {
      $(".output").append("<li>I love " + flavors[index] + " ice cream!</li>");
    }
  });
});
