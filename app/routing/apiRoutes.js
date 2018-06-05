

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friendsData
// ===============================================================================



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
  console.log('this is our new friend to save!', req.body);

  // console.log(req.body);
  var newestFriend = req.body;
  friendsData.push(newestFriend); // person that just filled in survey that is looking for a match
  var bestMatch;



  // do logic to compare new friend again all friends in friend data array
  // find match

  // then add new fried to friend data array after a match is made
  // friendsData.push(newestfriend);
  // res.json the matched friend back
  res.json(friendsData);



});
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.


  // app.post("/api/friends", function(req, res) {
  //   // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
  //   // It will do this by sending out the value "true" have a table
  //   // req.body is available since we're using the body-parser middleware


//INACCURATE RN, example:   ----------------------

    // if (friendsData.length < 5) {
    //   friendsData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   friendsData.push(req.body);
    //   res.json(false);
    // }

// -------



  // this below code clears out the table while working with the functionality.

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];

    console.log(friendsData);
  });
};
