var express = require('express')
var app = express()
var request = require('request');

  var config = {
  	serverip:"127.0.0.1",
 	serverport:"8080",
 	}

	function randomNumber(){
		return Math.floor((Math.random() * 10) + 1);
	}

	function requestCalcualtion(){

	var myJSONObject = {values:{value1:randomNumber(),value2:randomNumber()}};
	console.log("-----------------------------------------------------------------------")

	console.log("")
	console.log("SENT "+ myJSONObject.values.value1+" + "+myJSONObject.values.value2)
	console.log("")

	request({
	    url: "http://localhost:8000/rest_test/",
	    method: "POST",
	    json: true,  
	    body: myJSONObject
	}, function (error, response, body){

		console.log("")
	    console.log("FROM DJANGO SERVER: ",body)
	    console.log("")

	     setTimeout(function(){
			requestCalcualtion();
		},3000)
	});
	}

	requestCalcualtion()

app.listen(config.serverport, config.serverip, function () {
  console.log("Running @ http://" + config.serverip + ":" + config.serverport);
})