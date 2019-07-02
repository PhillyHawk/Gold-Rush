var targetNumber = Math.floor(Math.random() * (120-19 + 1) + 19);
$("#targetScore").text(targetNumber)

var goldbar = Math.floor(Math.random() * (12-1 + 1) + 1);
var counter = 0;

//var numberOptions = [10, 11];
//var increment = numberOptions[Math.floor(Math.random())];//
var winCount = 0
var lossCount = 0

function restartGame(){
  $("targetScore").innerHTML = 0;
  $("currentScore").innerHTML = 0;
}


$(".gold").on("click", function() {
  $(".gold").value = goldbar;
  counter += goldbar;
  $("#currentScore").text(counter);
  });


$(".silver").on("click", function() {
  counter += 5;
  $("#currentScore").text(counter);
  });

  
$(".bronze").on("click", function() {
  counter += 1;
  $("#currentScore").text(counter);
  });

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







console.log(counter);