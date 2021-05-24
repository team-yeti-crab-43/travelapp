import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Results from './Results.jsx';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {flights: null, showResults: false, numPeople: 0};
    this.getResults = this.getResults.bind(this);
  }

  
  getResults(data) {
    const searchInfo = {airportLocation: `${data[0]}`, startDate: `${data[1]}`, endDate: `${data[2]}`}
    this.setState({numPeople: Number(data[3])});
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
    this.setState({flights: data.info, showResults: true});
  })
  .catch(e=>{
    console.log('error', e)  // returns this if error
  })
  }

  appContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"

  }

  render(){
      return(
      <div style={this.appContainerStyle}>
          <h2 style={{fontFamily: "arial"}}>Welcome to Travelwire</h2>
          <Search getResults={this.getResults}/>
          {this.state.showResults && <Results flightPrice={this.state.flights} people={this.state.numPeople}/>}
      </div>
      );
   }
}

export default App;

