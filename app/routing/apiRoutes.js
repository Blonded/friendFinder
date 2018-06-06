


var friendsData = require("../data/friends");


// ROUTING:
module.exports = function(app) {
  // API GET Requests
  // handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

app.post("/api/friends", function(req, res){
  //grabs the new friend's scores to compare with friends in friendList array
   var newFriendScores = req.body.scores;
   var scoresArray = [];
   var friendCount = 0;
   var bestMatch = 0;

   //runs through all current friends in list
   for(var i = 0; i < friendList.length; i++){
     var scoresDiff = 0;
     //run through scores to compare friends
     for(var x = 0; x < newFriendScores.length; x++){
       scoresDiff += (Math.abs(parseInt(friendList[i].scores[x]) - parseInt(newFriendScores[x])));
     }

     //push results into scoresArray
     scoresArray.push(scoresDiff);
   }

   //after all friends are compared, find best match
   for(var i=0; i<scoresArray.length; i++){
     if(scoresArray[i] <= scoresArray[bestMatch]){
       bestMatch = i;
     }
   }

   //return bestMatch data
   var bff = friendList[bestMatch];
   res.json(bff);

   //pushes new submission into the friendsList array
   friendList.push(req.body);
 });
};


  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];

    console.log(friendsData);
  });
