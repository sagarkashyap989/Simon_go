
var buttonColor = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern =[];

var started = false;
var level = 0;



$(document).ready(function () {
     $("body").one('click', function (event) {
           event.preventDefault();
           //do something
           $(this).prop('disabled', true);
     });
});




$("#refresh").click(function(){
level=0;
gamePattern=[];
    nextsequence();

});

$("body").click(function(){

  if (!started) {
        $("#level-title").text("Level " + level);
    nextsequence();
    started = true;
  }



});

// white list
$(document).keypress(function() {
  if (!started) {
        $("#level-title").text("Level " + level);
        alert("sate");
    nextsequence();
    started = true;
  }
});

$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");

lol(userChosenColour);

});

$(document).keypress(function(event) {
  console.log(event.key);
  switch (event.key) {

    case "q":var key="green";
    lol(key);

    break;

    case "w":
    key="red";
    lol(key);

    break;

    case "a":
    key="yellow";
    lol(key);

    break;

    case "s":
    key="blue";
    lol(key);

    break;
    default:
    console.log("hi");
  }

  console.log("key"+key);
});

function lol(xyz){
  userClickedPattern.push(xyz);

  playSound(xyz);
  animatePress(xyz);


  checkKarBSDK(userClickedPattern.length-1);
}

function checkKarBSDK(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".



        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]  ){
      console.log("success");
var t= gamePattern.length;
var b = userClickedPattern.length;
      console.log(b);
      console.log(t);

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
if (b === t){        //5. Call nextSequence() after a 1000 millisecond delay.

        setTimeout(function () {

          nextsequence();
        }, 1000);

      }

    } else {
      var g=false;
        $("body").addClass("game-over");
        $("body").removeClass("background");

        var audio = new Audio("wrong.mp3");
        audio.play();
      setTimeout(function () {
        $("body").removeClass("game-over");
        $("body").addClass("background");

      }, 200);
  $("#level-title").text("Game Over, Click restart key, to Restart");
dou();

    }

}

function nextsequence(){


  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4) ;
  var randomColorChosen = buttonColor[randomNumber];
  gamePattern.push(randomColorChosen);

  $("#"+randomColorChosen).fadeOut(100).fadeIn(100);
  var ad =randomColorChosen+".mp3";

  var audio = new Audio(ad);
  audio.play();

}
function playSound(name){

  var ad =name +".mp3";
  var audio = new Audio(ad);
  audio.play();

}

function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");
  setTimeout(function (){
    $("."+currentColor).removeClass("pressed");
  }, 100);

}

function dou(){
  $(document).keypress(function(event) {
    if(event.key="r"){

          level=0;
          gamePattern=[];
            nextsequence();
}
else{console.log("s");
}
          });

}





// sfdafdsadF
$(document).ready(function(){
    animateDiv();
});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });

};


function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
