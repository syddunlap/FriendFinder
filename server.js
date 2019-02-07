// Your server.js file should require the basic npm packages we've used in class: express and path.

var express = require("express");
var app = express();

// Sets an initial port. 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// require("./routing/apiRoutes")(app);
// require("./routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
