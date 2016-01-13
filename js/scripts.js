$(function() {
  var animalType = prompt("Which animal would you like to learn about? Choose from 'snakes', 'insects', or 'turtles'.");

  if (animalType.toLowerCase() === "snakes") {
    $(".snakes").show();
  } else if (animalType.toLowerCase() === "insects") {
    $(".insects").show();
  } else if (animalType.toLowerCase() === "turtles") {
    $(".turtles").show();
  } else { var animalType = prompt("Please choose from the following 'snakes', 'insects', or 'turtles'.");
  }

  if (animalType.toLowerCase() === "snakes") {
    $(".snakes").show();
  } else if (animalType.toLowerCase() === "insects") {
    $(".insects").show();
  } else if (animalType.toLowerCase() === "turtles") {
    $(".turtles").show();
  }


  $("#start-button").click(function(){
    var animalType = prompt("Which animal would you like to learn about? Choose from 'snakes', 'insects', or 'turtles'.");
    if (animalType.toLowerCase() === "snakes") {
      $(".snakes").show();
    } else if (animalType.toLowerCase() === "insects") {
      $(".insects").show();
    } else { (animalType.toLowerCase() === "turtles")
      $(".turtles").show();
    }

  });
});
