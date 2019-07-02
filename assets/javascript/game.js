
//establish target number

var targetNumber = Math.floor(Math.random() * (120-19 + 1) + 19);
$("#number-to-guess").text(targetNumber);

var goldbar = MAth.floor(Math.random() * (12-1 + 1) + 1);
var counter = 0;

//var numberOptions = [10, 11];
//var increment = numberOptions[Math.round(Math.random())];
var winCount = 0;
var lossCount = 0;

function restartGame(){
  $("targetScore").innerHTML = 0;
  $("currentScore").innerHTML = 0;
}

//on click event for bars


$("#gold").on("click", function() {
  $("#gold").value = goldbar;
  counter += goldbar;
  $("#currentScore").text(counter);
 
});


$("#silver").on("click", function() {
  $("#silver").value = goldbar;
  counter += goldbar;
  $("#currentScore").text(counter);

});


$("#bronze").on("click", function() {
  $("#silver").value = goldbar;
  counter += goldbar;
  $("#currentScore").text(counter);


});
if (counter === targetnumber) {
  winCount++;
  $("#winCount").text(winCount);
  alert("Jackpot!");
}
else if (counter >= targetNumber){
  lossCount++;
  $("#lossCount").text(lossCount);
  alert("Bankrupt!");
}