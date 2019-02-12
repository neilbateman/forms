$(document).ready(function() {
  $('#blanks form').submit(function(event) {
  event.preventDefault();

  var nameInput = $("input#name").val();
  var sexInput = $("#sex").val();
  var orientationInput = $("input:radio[name=sexual-orientation]:checked").val();

  console.log("The name is: " + nameInput );
  alert(nameInput);
  $('.name').text(nameInput);
  $('.sex').text(sexInput);
  $('.radio').text(orientationInput);
  $('#story').show();
  });
});
  //$("#place").submit(function(){
  //  event.preventDefault();
  //    var getFromUser = $(#input).val();
      //console.log(getFromUser);




//submit()
