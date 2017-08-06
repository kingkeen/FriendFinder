// Loading requirements for App
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// loading other JS files
require("./app/routing/htmtRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);





app.listen(PORT, function(){
	console.log("App listening on port "+ PORT);
})