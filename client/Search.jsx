import React, { useState } from 'react';

const Search = props => {

  const [destination, setDestination] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [people, setPeople] = useState()

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(destination, startDate, endDate);
    props.getResults([destination, startDate, endDate, people])
  }
  
  const formStyle = {
    display: "flex",
    justifyContent: "space between"
    
  }

  const divStyle = {
    fontFamily: "arial",
    textAlign: "center"
  }
  
  return (
    <div id="search-bar" style={divStyle}>
      <h3>Where would you like to go?</h3>
      <form onSubmit={e => { handleSubmit(e) }} style={formStyle}>
        <input type="text" name="destination" placeholder="destination" onChange={e => setDestination(e.target.value)}/>
        <br></br>
        {/* <button onClick={handleSearchButton}> */}
        <input type="date" name="start-date" placeholder="start date (MM/DD/YYY)" onChange={e => setStartDate(e.target.value)}/>
        <input type="date" name="end-date" placeholder="end date (MM/DD/YYY)" onChange={e => setEndDate(e.target.value)}/>
        <input type="text" name="num-people" placeholder="# of travelers" onChange={e => setPeople(e.target.value)}/>
        <br></br>
        <button type='submit'>
          Search
        </button>
      </form>
    </div>
    )
  }
  
  
  export default Search