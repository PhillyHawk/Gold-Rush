alert("hi");
//establish target number

var targetNumber = 50;
$("#number-to-guess").text(targetNumber);

var counter = 0;

var numberOptions = [10, 11];
var increment = numberOptions[Math.round(Math.random())];

//on click event for bars


$("#gold").on("click", function() {
  counter += incremnts;
  alert("New Score: " + coounter);
  if (counter === targetnumber) {
    alert("Jackpot!");
  }
  else if (counter >= targetNumber){
    alert("you loose");
}
});


//$("#silver").on("click", function() {
 // counter += 5;
  //alert("New Score: " + counter);
  //if (counter === targetnumber) {
   // alert("Jackpot!")
  //}
//});


//$("#bronze").on("click", function() {
  //counter += 1;
  //alert("New Score " + counter);
  //if (counter === targetnumber) {
    //alert("Jackpot!")
  //}
//});
