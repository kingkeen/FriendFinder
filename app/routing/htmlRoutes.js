var path = require("path");


module.exports = function(app){
	app.get("/friend", function(req, res) {
		res.sendfile(path.join(__dirname, "/../public/home.html"));

	});

	app.get("/survey", function(req, res) {
		res.sendfile(path.join(__dirname, "/../public/survey.html"));
	});

	//Route for if nothing is matching to just send to Home. 
	app.use(function(req, res){
		res.sendfile(path.join(__dirname, "/../public/home.html"));
	});
};