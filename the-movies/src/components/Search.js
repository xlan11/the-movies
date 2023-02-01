import React, { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const apiKey = 'f9a8200a794828e016db6bb8fca5a95a';
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search for a movie..." />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.slice(0,5).map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;