const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var unirest = require("unirest");

var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/UK/2021-09-01");

req.query({
	"inboundpartialdate": "2021-12-01"
});

req.headers({
	"x-rapidapi-key": "e15b5e2e5dmshc81eceff76fe168p18f7e3jsn43a131d13978",
	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

