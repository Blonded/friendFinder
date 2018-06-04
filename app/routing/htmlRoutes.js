
// var path = require("path");
var path = require("path");

// ROUTING: 
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

// A GET Route to /survey which should display the survey page.
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // A default, catch-all route that leads to home.html which displays the home page.
  // If no matching route is found default to home:
  app.get("*", function(req, res, next) {
    if(req.url.indexOf('/api') == 0) return next();
    if(req.url.indexOf('/assets') == 0) return next();
    if(req.url.indexOf('/css') == 0) return next();
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};







