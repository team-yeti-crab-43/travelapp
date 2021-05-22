import React from 'react';

const Results = props => {
  const boxStyle = {
    backgroundColor: 'black',
    color: 'white',
    height: '100px',
    width: '400px',
    margin: "50px",
    textAlign: "center",
    padding: "40px",
    fontSize: "25px",
    fontFamily: "sans-serif"
  }

  const resultStyle = {
    backgroundColor: 'green',
    color: 'white',
    height: '100px',
    width: '400px',
    margin: "50px",
    textAlign: "center",
    padding: "40px",
    fontSize: "25px",
    fontFamily: "sans-serif"
  }

  const containerStyle = {
    display: "flex"
  }
  return (
    <div style={containerStyle}>
      <h2>Results</h2>
      <div name="flights" style={boxStyle}>
        <strong>Flights Starting At: </strong>
        <p>*flight prices passed in from API here*</p>
      </div>
      <div name="hotels" style={boxStyle}>
        <strong>Hotels Starting At: </strong>
        <p>*hotel prices passed in from API here*</p>
      </div>
      <div name="results" style={resultStyle}>
        <strong>Your Trip Starts From: </strong>
        <p><strong>*flight price + (days * hotel price)*</strong></p>
      </div>
    </div>
  )
}

export default Results

