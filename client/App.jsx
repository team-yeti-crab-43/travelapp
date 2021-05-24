import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Results from './Results.jsx';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {flights: null};
    this.getResults = this.getResults.bind(this);
  }

  
  getResults(data) {
    const searchInfo = {airportLocation: `${data[0]}`, startDate: `${data[1]}`, endDate: `${data[2]}`}
    fetch('/api/test', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchInfo)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({flights: data.info});
  })
  .catch(e=>{
    console.log('error', e)  // returns this if error
  })
  }

  render(){
      return(
      <div>
          <h2>Welcome to Travelwire</h2>
          <Search getResults={this.getResults}/>
          <Results flightPrice={this.state.flights} />
      </div>
      );
   }
}

export default App;

