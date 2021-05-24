const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var unirest = require("unirest");

var req = unirest("GET", "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search");

req.query({
	"sort_order": "PRICE",
	"checkout_date": "2021-10-01",
	"locale": "en_US",
	"currency": "USD",
	"adults_number": "1",
	"destination_id": "11594", // Dubai London: 549499
	"checkin_date": "2021-09-01"
});

req.headers({
	"x-rapidapi-key": "e15b5e2e5dmshc81eceff76fe168p18f7e3jsn43a131d13978",
	"x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body.searchResults.results[0].ratePlan.price.current);
});



// https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?sort_order=PRICE&checkout_date=2021-10-01&locale=en_US&currency=USD&adults_number=1&destination_id=11594&checkin_date=2021-09-01

// x.searchResults.results[0].ratePlan.price.current