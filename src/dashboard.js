$(document).ready(function () {

  // This adds the class .checked to the list items when clicked on.

  $("li").click(function () {
    $(this).addClass("checked");
  });


  // This button appends a new <li> element to the unordered list with id #myUL. The value is the text input from the #myInput field.

  $(".addBtn").click(function () {
    $("#myUL").append($('<li>', {
      text: $('#myInput').val()
    }));
  });


})

//variable starting value of clicks
var clicks = 0;
//click function and adds number of clicks to p tag with id set to "clicks"
function countClicks() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = "clicks: " + clicks;
};
//timer variable how long the timer is set
var count = 30;

//1000 will  run it every 1 second
var counter = setInterval(timer, 1000);

//timer function
function timer() {
  count--;
  if (count <= -1) {
    clearInterval(counter);
    return;
  }
  // an attempt to get a popup to occur when the timer hits zero.
  // function myFunction() {
  //   if (count = 0) {
  //     alert("Hello! I am an alert box!");
  //   }
  // }

  document.getElementById("timer").innerHTML = count + " secs";

}
