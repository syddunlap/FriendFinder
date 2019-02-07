// LOAD DATA

const friends = require("../data/friends");

// ROUTING

module.exports = function(app) {
    // API GET requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })
    
    // API POST requests
    app.post("api/friends", function(req, res) {
        // BUILD LOGIC HERE
        // THINGS TO DO HERE
        // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    });
};