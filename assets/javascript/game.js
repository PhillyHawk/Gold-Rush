var targetNumber = Math.floor(Math.random() * (120-19 + 1) + 19);
$("#targetScore").text(targetNumber)

var goldbar = Math.floor(Math.random() * (12-1 + 1) + 1);
var silverbar = Math.floor(Math.random() * (12-1 + 1) + 1);
var bronzebar = Math.floor(Math.random() * (12-1 + 1) + 1);
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
  counter += silverbar;
  $("#currentScore").text(counter);
  });

  
$(".bronze").on("click", function() {
  counter += bronzebar;
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


// var targetNumber =Math.floor(Math.random() * (120 - 19) + 19);
// $("#targetScore").text(targetNumber)

// // var test2=$("#targetScore").html();



// var goldbar = Math.floor(Math.random() * (12-1 + 1) + 1);
// var silverbar = Math.floor(Math.random() * (12-1 + 1) + 1);
// var bronzebar = Math.floor(Math.random() * (12-1 + 1) + 1);
// var counter = 0;


// var winCount = 0
// var lossCount = 0

// $(".gold").on("click", function() {
//   $(".gold").value = goldbar;
//   counter += goldbar;
//   $("#currentScore").text(counter);
//   });


// $(".silver").on("click", function() {
//   counter += silverbar;
//   $("#currentScore").text(counter);
//   });

  
// $(".bronze").on("click", function() {
//   counter += bronzebar;
//   $("#currentScore").text(counter);
//   });
  
  
//   function restartGame(){
//     $("targetScore").innerHTML = 0;
//     $("currentScore").innerHTML = 0;
  
//   }
//    function checkGame(){
//      if (counter ===  Number(test2)){
//        winCount++;
//        $("#winCount").text(winCount);
//        alert("Jackpot!");
  
//        restartGame();
    
//      }
//    else {
//      lossCount++;
//      $("#lossCount").text(lossCount);
//      alert("Bankrupt!");
//      restartGame();
//    }
//  }


// var test=$("#targetScore").val()
// let test3 = $("#currentScore").html();
// console.log("This is test2:" + Number(test2));
// console.log("This is counter: " + Number(test3));


// console.log("This is the type of counter: " + typeof Number(test3));
// console.log("This is the type of test2: " + typeof Number(test2));


// console.log(counter === Number(test2))
// console.log(counter > Number(test2));

// if (counter ===  Number(test2)){
//   winCount++;
//   $("#winCount").text(winCount);
//   alert("Jackpot!");
//   $("targetScore").innerHTML = 0;
//   $("currentScore").innerHTML = 0;

// }

// else {
//   lossCount++;
//   $("#lossCount").text(lossCount);
//   alert("Bankrupt!");
//   $("targetScore").innerHTML = 0;
//   $("currentScore").innerHTML = 0;
// }







