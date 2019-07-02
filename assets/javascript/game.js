alert("hi");
//establish target number
var targetNumber = 50;
$("#number-to-guess").text(targetNumber);
var counter = 0;
//on click event for bars
$("#gold").on("click", function() {
  counter += 10;
  alert("you clicked a crystal");
  if (counter === targetnumber) {
    alert("Jackpot!");
  }
});


$("#silver").on("click", function() {
  counter += 5;
  alert("you clicked a crystal");
});


$("#bronze").on("click", function() {
  counter += 1;
  alert("you clicked a crystal");
});
