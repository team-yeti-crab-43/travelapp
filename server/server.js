const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/api/test', (req, res) => {
  
  console.log(req.body);
  return res.status(200).json('hello');
}); 

app.listen(3000);