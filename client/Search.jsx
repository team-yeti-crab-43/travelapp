import React from 'react';
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

const Search = props => {
  return (
    <div id="search-bar">
      <h3>Where would you like to go?</h3>
      <form>
        <input type="text" id="destination" placeholder="destination"></input>
        <br></br>
        {/* <button onClick={handleSearchButton}> */}
        <input type="text" id="start-date" placeholder="start date (MM/DD/YYY)"></input>
        <input type="text" id="end-date" placeholder="end date (MM/DD/YYY)"></input>
        <input type="text" id="num-people" placeholder="# of travelers"></input>
        <br></br>
        <button>
          Search
        </button>
      </form>
    </div>
    )
}

export default Search