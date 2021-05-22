const path = require('path'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var unirest = require("unirest");

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/api/test', (req, res) => {
  let request = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/UK/2021-09-01");
  
  request.query({
    "inboundpartialdate": "2021-12-01"
  });
  
  request.headers({
    "x-rapidapi-key": "e15b5e2e5dmshc81eceff76fe168p18f7e3jsn43a131d13978",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "useQueryString": true
  });

  request.end(function (response) {
    if (response.error) throw new Error(response.error);
      console.log(response.body)
      res.status(200).json({info: response.body.Quotes[0].MinPrice});
      // return res.body;
  })
  // return res.status(200).json('hello');
}); 





// function apiResponse(){
// let result; 

// var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/UK/2021-09-01");

// req.query({
// 	"inboundpartialdate": "2021-12-01"
// });

// req.headers({
// 	"x-rapidapi-key": "e15b5e2e5dmshc81eceff76fe168p18f7e3jsn43a131d13978",
// 	"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
// 	"useQueryString": true
// });


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 		console.log(res.body)
// 	 result = res.body;
// })

// return result; 

// }

app.listen(3000);