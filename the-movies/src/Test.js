import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [background, setBackground] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: 'f9a8200a794828e016db6bb8fca5a95a',
        },
      })
      .then((res) => {
        setPopularMovies(res.data.results);
        setBackground(res.data.results[0]);
        setSelectedMovie(res.data.results[0]);
      });
  }, []);

  const handleMovieSelect = (movie) => {
    setBackground(movie);
    setSelectedMovie(movie);
  };

  return (
    <div>
      <div
        style={{
          height:`500`,
          backgroundImage: `url(https://image.tmdb.org/t/p/original${background.backdrop_path})`,
        }}
      >
        <h1>{selectedMovie.title}</h1>
      </div>
      <div>
        {popularMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleMovieSelect(movie)}
            onMouseEnter={() => handleMovieSelect(movie)}
          >
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
