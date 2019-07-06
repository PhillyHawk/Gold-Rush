//globar variables
var winCount = 0
var lossCount = 0
var goldbar = 0
var silverbar = 0
var bronzebar = 0
var counter = 0;
var targetNumber;
//setting target score to a random value
function resetBars() {
  targetNumber = Math.floor(Math.random() * (120-19 + 1) + 19);
$("#targetScore").text(targetNumber)
//setting gold bar values to a random number
 goldbar = Math.floor(Math.random() * (12-1 + 1) + 1);
 silverbar = Math.floor(Math.random() * (12-1 + 1) + 1);
 bronzebar = Math.floor(Math.random() * (12-1 + 1) + 1);
 counter = 0;
}


//resetting target and current score to 0
function restartGame(){
  $("#targetScore").text("0");
  $("#currentScore").text("0");
  resetBars();
}

//funtion adding clicked score to current score
$(".gold").on("click", function() {
  $(".gold").value = goldbar;
  counter = counter + goldbar;
  $("#currentScore").text(counter);
  //checking to see if current score is equal to target score
  //if it is equal alert player they won and add to win score
  if (counter === targetNumber){
    winCount++;
    $("#winCount").text(winCount);
    alert("Jackpot!");
    restartGame();
  
  }
  //if the current score is greater than the target score the alert player they are over and add to loss score
  else if (counter > targetNumber){
    lossCount++;
    $("#lossCount").text(lossCount);
    alert("Bankrupt!");
    restartGame();
  }
  });


$(".silver").on("click", function() {
  counter = counter + silverbar;
  $("#currentScore").text(counter);
  if (counter === targetNumber){
    winCount++;
    $("#winCount").text(winCount);
    alert("Jackpot!");
    restartGame();
  
  }
  
  else if (counter > targetNumber){
    lossCount++;
    $("#lossCount").text(lossCount);
    alert("Bankrupt!");
    restartGame();
  }
  });

  
$(".bronze").on("click", function() {
  counter = counter + bronzebar;
  $("#currentScore").text(counter);
  if (counter === targetNumber){
    winCount++;
    $("#winCount").text(winCount);
    alert("Jackpot!");
    restartGame();
  
  }
  
  else if (counter > targetNumber){
    lossCount++;
    $("#lossCount").text(lossCount);
    alert("Bankrupt!");
    restartGame();
  }
  });

//reset game to start mode
restartGame();















