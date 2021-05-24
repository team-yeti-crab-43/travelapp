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
  // console.log(req.body)
  const {airportLocation, startDate, endDate} = req.body  //variables have to be renamed according to what you call them in the request data
  console.log('destination :'+ airportLocation, 'flightDate: '+startDate, 'returndate : '+endDate)
  let request = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/"+airportLocation+"/"+startDate);

  // "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/UK/2021-09-01" sample
  // "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/"+airportLocation+"/"+startDate concat

  
  request.query({
    "inboundpartialdate": endDate
  });
  
  request.headers({
    "x-rapidapi-key": "e15b5e2e5dmshc81eceff76fe168p18f7e3jsn43a131d13978",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "useQueryString": true
  });

  request.end(function (response) {
    if (response.error) {
    // throw new Error(response.error);
    return res.status(400)
    }
      // console.log(response.body.Quotes)
      res.status(200).json({info: response.body.Quotes[0].MinPrice});
      // return res.body;
  })
  // return res.status(200).json('hello');
});




// app.post('/api/test', (req, res) => { //make up another variable on front end, city 
//   // console.log(req.body)
//   const {city, startDate, endDate} = req.body  //variables have to be renamed according to what you call them in the request data
//   console.log('destination :'+ city, 'flightDate: '+startDate, 'returndate : '+endDate)
//   let request = unirest("GET", "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?sort_order=PRICE&checkout_date=2021-10-01&locale=en_US&currency=USD&adults_number=1&destination_id=11594&checkin_date=2021-09-01");

//   // "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/UK/2021-09-01" sample
//   // "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/LAX-sky/"+airportLocation+"/"+startDate concat


//   request.query({
//     "sort_order": "PRICE",
//     "checkout_date": endDate,
//     "locale": "en_US",
//     "currency": "USD",
//     "adults_number": "1",
//     "destination_id": "11594", // Dubai London: 549499
//     "checkin_date": startDate
//   });
  
//   req.headers({
//     "x-rapidapi-key": "e15b5e2e5dmshc81eceff76fe168p18f7e3jsn43a131d13978",
//     "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
//     "useQueryString": true
//   });

//   request.end(function (response) {
//     if (response.error) {
//     // throw new Error(response.error);
//     return res.status(400)
//     }
//       // console.log(response.body.Quotes)
//       res.status(200).json({info: response.body.Quotes[0].MinPrice});
//       // return res.body;
//   })
//   // return res.status(200).json('hello');
// }); 


app.listen(3000);