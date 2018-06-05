
$(document).ready(function() {
   $("#submitBtn").on("click", function() {
       //form validation
       function validateForm() {
           var isValid = true;
           $('.validate').each(function() {
               if ($(this).val() === ''){
                   isValid = false;
               }
           });
           $('.chosen-select').each(function() {
               if ($(this).val() === ""){
                   isValid = false;
               }
           });
           return isValid;
       }
       //if everything is filled
       if (validateForm() === true) {
           //creates a new friend from the values submitted
           var newFriend = {
               name: $('#name').val().trim(),
               photoUrl: $('#photo').val().trim(),
               scores: [
                   $('#q1').val(),
                   $('#q2').val(),
                   $('#q3').val(),
                   $('#q4').val(),
                   $('#q5').val(),
                   $('#q6').val(),
                   $('#q7').val(),
                   $('#q8').val(),
                   $('#q9').val(),
                   $('#q10').val(),
               ]
           };

           console.log(newFriend);
           //AJAX posts the data to friends API.
           // $.post("/api/friends", newFriend, function(data) {
           //     //Grab the result from the AJAX post so that the best match's name and photo are displayed.
           //     $("#matchName").text(data.name);
           //     $("#matchPic").attr("src", data.photoUrl);
           //     // Show the modal with the best match
           //     $('#results-modal').modal('show');
           //     //clear form after submission
           //     $('#name').val("");
           //     $('#photo').val("");
           //     $('#q1').val("");
           //     $('#q2').val("");
           //     $('#q3').val("");
           //     $('#q4').val("");
           //     $('#q5').val("");
           //     $('#q6').val("");
           //     $('#q7').val("");
           //     $('#q8').val("");
           //     $('#q9').val("");
           //     $('#q10').val("");
           // });


       } else {
         console.log("err")
          // alert("Please fill out ALL fields before submitting survey!")
       }
       // return false;
   });
});
