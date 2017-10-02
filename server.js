// Loading requirements for App
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//setup the express server
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/nvd.api+json"}));





app.listen(PORT, function(){
	console.log("App listening on port "+ PORT);
});


// loading other JS files
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



//Things to build: 
// 1.) Constructors for the profiles, survey will provide the inputs. 
// 2.) HTML for the surveys. 
// 3.) Logic for the received surveys and outcome of a found friend. 
// 4.) data should be saved into array of objects (within a separate JS file...). 
// 5.) Pop-up modals for the results. 