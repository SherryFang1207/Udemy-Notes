const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
$(document).keydown(function(){
    if (!started){
        // alert("someone has pressed a key!");
        $("#" + "level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function(event) {
    var userChosenCoclour = event.currentTarget.id;
    userClickedPattern.push(userChosenCoclour);
    console.log("User has entered: " + userClickedPattern);
    makeSound(userChosenCoclour);
    animatePress(userChosenCoclour);
    // $("#" + "level-title").text("Level " + level);
    // level ++;
    checkAnswer(userClickedPattern.length -1);
    
});

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("Current Game pattern is: " + gamePattern);
    var nextButton = $("#" + randomChosenColour);
    nextButton.fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColour);


    
}

function makeSound(sound){
    var chosenSounds = new Audio("sounds/" + sound + ".mp3");
    chosenSounds.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("Correct!");
        if (userClickedPattern.length == gamePattern.length){
            setTimeout(function() {
                nextSequence();
            },1000)
        }
        
    }else{
        console.log("wrong!");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#" + "level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

