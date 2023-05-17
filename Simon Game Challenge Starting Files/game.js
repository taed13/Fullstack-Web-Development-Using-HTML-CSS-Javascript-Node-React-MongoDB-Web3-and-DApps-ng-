var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

// $("h1").css("color", "red");

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + gamePattern).click(function () {
        var audio = new Audio("sounds/" + gamePattern + ".mp3");
        audio.play();
    });
    $("#" + gamePattern).fadeIn(100).fadeOut(100).fadeIn(100);

    $(".btn").click(function () {

        var buttonPressed = $(this).attr("id");


        var userChosenColour = buttonPressed;

        userClickedPattern.push(userChosenColour);

        console.log(userClickedPattern);
        playSound(userChosenColour);

    });
}
function playSound(name) {
    $("#" + name).click(function () {
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
    });
    // alert(name);
}


nextSequence();


// Path: Simon Game Challenge Starting Files/game.js

// alert(gamePattern);
// console.log(gamePattern);






