import React from 'react';

const Results = props => {
  const boxStyle = {
    backgroundColor: 'black',
    color: 'white',
    height: '1fr',
    width: '1fr',
    margin: "25px",
    textAlign: "center",
    padding: "40px",
    fontSize: "15px",
    fontFamily: "sans-serif"
  }

  const resultStyle = {
    backgroundColor: 'green',
    color: 'white',
    height: '1fr',
    width: '1fr',
    margin: "25px",
    textAlign: "center",
    padding: "40px",
    fontSize: "15px",
    fontFamily: "sans-serif"
  }

  // const containerStyle = {
  //   display: "flex"
  // }
  return (
    <div>
      <h2 style={{fontFamily: "arial", textAlign: "center"}}>Here is your trip info:</h2>
      <div name="flights" style={boxStyle}>
        <strong>Flights Starting At: </strong>
        <p>${props.flightPrice} Per Person</p>
      </div>
      <div name="hotels" style={boxStyle}>
        <strong>Hotels Starting At: </strong>
        <p>*hotel prices passed in from API here*</p>
      </div>
      <div name="results" style={resultStyle}>
        <strong>Your Trip Starts From: </strong>
        <p><strong>${props.flightPrice * props.people}</strong></p>
      </div>
    </div>
  )
}

export default Results

