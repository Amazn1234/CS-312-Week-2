//jshint esversion:6

const express = require('express')
const bodyParser = require("body-parser");

const app = express()
const port = 3000

//parse data from an htlm form "urlencoded"
//extended = true: post nested objects, required by bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//the "function" is  run when a browser requests the directory '/' 
app.get("/", function(req, res){
	//console.log(req);
	//__dirname is the value of the current directory
	res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){

	//logs value of num1 in html
	console.log(req.body.num1);
	//cast variable to number/int
	var num1 = Number(req.body.num1);
	var num2 = Number(req.body.num2);
	var result = num1 + num2;
	res.send("The result of the calculation is: " + result);
});


app.get("/bmicalculator", function(req, res){
	res.sendFile(__dirname + "/bmiCalculator.html")
});


app.post("/bmiCalculator", function(req, res){

	//cast variable to number/int
	var height = parseFloat(req.body.height);
	var weight = parseFloat(req.body.weight);

	console.log("Height:" + height);
	console.log("Weight:" + weight);
	var result = weight / (height * height);

	res.send("<h2>Your BMI is: " + result + "</h2>");
});


//logs what port the server is on
app.listen(port, function(){
	console.log("server started on port %d", port)
});