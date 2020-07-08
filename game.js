  var buttonColours = ["red", "blue", "green", "yellow"];
  var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];


  gamePattern.push(randomChosenColour);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  $("#" + randomChosenColour).fadeTo(100, 0.1).fadeTo(200, 1.0);
}
nextSequence();
