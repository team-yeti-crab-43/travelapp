import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Results from './Results.jsx';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {flights: null};
  }

  componentDidMount() {
    const data = {airportLocation: "LHR-sky", startDate: "anytime", endDate: "anytime"};
    //data retrieved from input: Country (UK), Inbound Date, Outbound Date 
    fetch('/api/test', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
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
          <h2>CUT BUNDLE</h2>
          <Search />
          <Results flightPrice={this.state.flights}/>
      </div>
      );
   }
}

export default App;

