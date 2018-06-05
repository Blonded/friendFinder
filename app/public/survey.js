$(document).ready(function(){
  console.log('we are all linked up!!!');



$('#submitbtn').on('click', function(){
  console.log('we got clicked!!!');
  var surveyResults = {
    name: $('#nameINput').val(),
    photo: $('#photoUrl').val(),
    scores: [
      parseInt($('#q1 option:selected').val()),
      parseInt($('#q2 option:selected').val()),
      parseInt($('#q3 option:selected').val())
    ]

  }
  console.log('this is our survey results' , surveyResults);

  $.ajax({
    url: '/api/friends',
    type: 'post',
    data: surveyResults,
    dataType: 'application/json'
  }).then(function(responseFromBackend) {
    console.log('this is what we got back from the backend!!', responseFromBackend)
  })
  //ajax
})



})
