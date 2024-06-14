
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//allows for sending of data back to server
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
	//console.log(req);
	res.sendFile(__dirname + "/bmiCalculator.html")
});


app.post("/", function(req, res){

	//cast variable to number/int
	var height = Number(req.body.height);
	var weight = Number(req.body.weight);

	console.log("Height:" + height);
	console.log("Weight:" + weight);
	var result = weight / (height * height);
	res.send("Your BMI is: " + result);
});

//logs what port the server is on
app.listen(port, function(){
	console.log("server started on port %d", port)
});