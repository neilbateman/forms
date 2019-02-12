$(document).ready(function() {
  $('#blanks form').submit(function(event) {
  event.preventDefault();

  var nameInput = $("input#name").val();


  console.log("The name is: " + nameInput );
  alert(nameInput);
  $('.name').text(nameInput);
  $('#story').show();
  });
});
  //$("#place").submit(function(){
  //  event.preventDefault();
  //    var getFromUser = $(#input).val();
      //console.log(getFromUser);




//submit()
