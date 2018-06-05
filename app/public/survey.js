$(document).ready(function(){
  console.log('connected and linked');



$('#submitbtn').on('click', function(){
  console.log('we got clicked!');
  var surveyResults = {
    name: $('#nameInput').val(),
    photo: $('#photoUrl').val(),
    scores: [
      parseInt($('#q1 option:selected').val()),
      parseInt($('#q2 option:selected').val()),
      parseInt($('#q3 option:selected').val()),
      parseInt($('#q4 option:selected').val()),
      parseInt($('#q5 option:selected').val()),
      parseInt($('#q6 option:selected').val()),
      parseInt($('#q7 option:selected').val()),
      parseInt($('#q8 option:selected').val()),
      parseInt($('#q9 option:selected').val()),
      parseInt($('#q10 option:selected').val())
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
