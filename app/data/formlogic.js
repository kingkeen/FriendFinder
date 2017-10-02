var friends = require("./friends.js");

var answers;
var newestFriend = {};
var name;
var photo;

$("#submit-button").on("click", function(){
	event.preventDefault();
	newestFriend = {

		name: $("#name"),
		photo: $("#photo"),

		answers:[
			$("#q1").val().trim(),
			$("#q2").val().trim(),
			$("#q3").val().trim(),
			$("#q4").val().trim(),
			$("#q5").val().trim(),
			$("#q6").val().trim(),
			$("#q7").val().trim(),
			$("#q8").val().trim(),
			$("#q9").val().trim(),
			$("#q10").val().trim()
		]
	};

	console.log(newestFriend);

	var newFriend = $.post(("/friends"), newestFriend, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			console.log("Friend added to list" + data);
			$("#name").val("");
			$("#link").val("");
			$("#q1").val("");
			$("#q2").val("");
			$("#q3").val("");
			$("#q4").val("");
			$("#q5").val("");
			$("#q6").val("");
			$("#q7").val("");
			$("#q8").val("");
			$("#q9").val("");
			$("#q10").val("");

		}
	});
});