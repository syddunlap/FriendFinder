// LOAD DATA
const path = require("path");
const friendsArray = require("../data/friends");

// ROUTING 

module.exports = function (app) {
    // API GET requests
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    })

    // API POST requests
    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        // console.log(newFriend);
        let newFriendAnswers = newFriend.scores;
        // console.log(newFriendAnswers);
        let closestMatch;
        let closestMatchImage;
        let totalDifference = 10000;

        // Loop through all existing friends
        for (let i = 0; i < friendsArray.length; i++) {
            let diff = 0;
            for (let j = 0; j < newFriendAnswers.length; j++) {
                diff += Math.abs(friendsArray[i].scores[j] - newFriendAnswers[j]);
            }

            // Find closest match
            if (diff < totalDifference) {
                totalDifference = diff;
                closestMatch = friendsArray[i].name;
                closestMatchImage = friendsArray[i].photo;
            }
        }

        friendsArray.push(newFriend);
        console.log(closestMatch);
        res.json({ status: "OK", name: closestMatch, photo: closestMatchImage });
    });
};