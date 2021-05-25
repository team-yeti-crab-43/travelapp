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






app.post('/api/flights', (req, res) => {
  // console.log(req.body)
  const {airportLocation, startDate, endDate} = req.body  //variables have to be renamed according to what you call them in the request data
  // console.log('destination :'+ airportLocation, 'flightDate: '+startDate, 'returndate : '+endDate)
  // let destination; 

  // if (airportLocation === 'LHR') {
  //   destination = 'LHR-sky';
  // } else if (airportLocation === 'DXB') {
  //   destination = 'DXB-sky';
  // }

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

app.post('/api/hotels', (req, res) => {
  
  const {airportLocation, startDate, endDate} = req.body  //variables have to be renamed according to what you call them in the request data
  // let airportLocation = 'LHR';
  // let startDate = '2021-09-01';
  // let endDate = '2021-10-01';
  // console.log('airportLocation :'+ airportLocation, 'flightDate: '+startDate, 'returndate : '+endDate)


  //LHR for airportLocation, convert to destination ID of London which is 549499
  //DXB for airportLocation, convert to destination ID of Dubai which is 11594
  //DME for airportLocation, convert to destination ID of Moscow which is 1708350

  let destination; 

  if (airportLocation === 'LHR') {
    destination = '549499';
  } else if (airportLocation === 'DXB') {
    destination = '11594';
  } else if (airportLocation === 'DME') {
    destination = '1708350';
  }

  console.log('destination :'+ destination, 'flightDate: '+startDate, 'returndate : '+endDate)

  let request = unirest("GET", "https://hotels-com-provider.p.rapidapi.com/v1/hotels/search?sort_order=PRICE&checkout_date="+endDate+"&locale=en_US&currency=USD&adults_number=1&destination_id="+destination+"&checkin_date="+startDate);
  
  request.headers({
    "x-rapidapi-key": "e15b5e2e5dmshc81eceff76fe168p18f7e3jsn43a131d13978",
    "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
    "useQueryString": true
  });
  
  request.end(function (response) {
    if (response.error) {
      console.log("Error here", response.error)
    // throw new Error(response.error);
    return res.status(400)
    }
      // console.log(response.body.Quotes)
      console.log(response.body);
      res.status(200).json({info: response.body.searchResults.results[0].ratePlan.price.current});
      // return res.body;
  })
});







app.listen(3000);