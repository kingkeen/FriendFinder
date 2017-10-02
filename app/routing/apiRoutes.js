var path = require("path");

// Need to link & Load the data here
var friends = require("../data/friends.js");

var friendsCompare = 

module.exports = function(app){

	app.get("/friends", function(req, res){
		res.json(friends);
	});

	app.get("/friend", function(req, res){
		res.json(data);
	});

	app.post("/friend", function(req, res){
		console.log("posting friends here");
		var addFriend = req.body;
		addFriend.routeName = addFriend.name.replace(/\s+/g, "").toLowerCase();

		console.log(addFriend);
		friends.push(addFriend);

	});

};