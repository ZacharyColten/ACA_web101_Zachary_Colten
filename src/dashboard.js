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