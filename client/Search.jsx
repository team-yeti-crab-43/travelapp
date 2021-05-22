import React, { useState } from 'react';
const axios = require('axios').default;

// function makeFetchRequestWithSearchData() {
//   axios.post('/search', {
//     destination: 'sample value' //inputted form value goes here as key
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   })
// }

// function handleSearchButton(e) {
//   e.preventDefault();
//   console.log('the search button was clicked.');
//   // call helper function to fetch get request with search input data here
//   this.makeFetchRequestWithSearchData(); //pass in search bar input data
// }
// const handleSubmit = event => {
//   event.preventDefault();
//   console.log(event.target.elements.destination);
// }

const Search = props => {

  const [destination, setDestination] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(destination, startDate, endDate);
  }
  
  
  return (
    <div id="search-bar">
      <h3>Where would you like to go?</h3>
      <form onSubmit={e => { handleSubmit(e) }}>
        <input type="text" name="destination" placeholder="destination" onChange={e => setDestination(e.target.value)}/>
        <br></br>
        {/* <button onClick={handleSearchButton}> */}
        <input type="date" name="start-date" placeholder="start date (MM/DD/YYY)" onChange={e => setStartDate(e.target.value)}/>
        <input type="date" name="end-date" placeholder="end date (MM/DD/YYY)" onChange={e => setEndDate(e.target.value)}/>
        <input type="text" name="num-people" placeholder="# of travelers" />
        <br></br>
        <button type='submit'>
          Search
        </button>
      </form>
    </div>
    )
  }
  
  
  export default Search