// LOAD DATA
const path = require("path");
const friendData = require("../data/friends");

// ROUTING

module.exports = function(app) {
    // API GET requests
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    })
    
    // API POST requests
    app.post("/api/friends", function(req, res) {
        let newFriend = req.body;
        console.log(newFriend);
        let newFriendAnswers = newFriend.scores;
        console.log(newFriendAnswers);

        //Matching Logic

        // BUILD LOGIC HERE
        // THINGS TO DO HERE
        // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

        friendData.push(newFriend);
        res.json({status: "OK", name: name, photo: photo});
    });
};