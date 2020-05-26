var express = require('express');
var app = express();
var request = require('request')

request("http://worldtimeapi.org/api/timezone/Asia/Kolkata", function(error, res, body){
    if(!error){
        var parsedData = JSON.parse(body);
        console.log(parsedData["datetime"]);
    }
})
