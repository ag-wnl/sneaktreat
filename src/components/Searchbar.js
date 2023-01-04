import React, { useState } from 'react';

function Searchbar() {
  // Declare a state variable for the search query
  const [query, setQuery] = useState('');

  // Declare a state variable for the search results
  const [results, setResults] = useState([]);

  // Event listener for the input field
  const handleInputChange = (event) => {
    // Update the search query in the component's state
    setQuery(event.target.value);

    // Call a function to fetch the search results
    fetchSearchResults(event.target.value);
  }

  // Function to fetch the search results from a server or API
  const fetchSearchResults = (query) => {
    fetch(`http://example.com/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      // Update the search results in the component's state
      setResults(data.results);
    });
  }

  // Render the search bar and results
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;
