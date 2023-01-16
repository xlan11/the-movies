import React, { useState, useEffect }  from "react";

export default function Component() {
    const apiKey = "f9a8200a794828e016db6bb8fca5a95a"
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then (response => response.json()
        .then (data => setMovies(data.results))
        .catch(error => console.error(error)))

    }, []);

    
    return (
        <div>
          {movies.map(movie => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.release_date}</p>
              <p>{movie.vote_average}</p>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      );
    }
