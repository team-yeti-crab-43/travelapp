import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Results from './Results.jsx';

class App extends Component{

  componentDidMount() {
    const data = {location: "New York", startDate: "2021-03-04", endDate: "2021-3-05"};
    fetch('/api/test', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res =>  res.json())
    .then(data => console.log("Data parsed ", data))
    .catch(e=>{
      console.log('error', e)  // returns this if error
    })
  } 

  render(){
      return(
      <div>
          <h2>Welcome to Travelwire</h2>
          <Search />
          <Results />
      </div>
      );
   }
}

export default App;

