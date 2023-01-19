import React from "react";

export default function TopMovies() {
    return (
        <section id="top_movies_section">
            <div id="section_title">
               <h4>🔥 Top movies</h4>
            </div>
            <div id="movie_top"></div>
        </section>
    )
}

//
// FETCH TOP MOVIES
//
// const apiKey = "f9a8200a794828e016db6bb8fca5a95a"
// fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
//   .then(response => response.json())
//   .then(data => {
//     const movies = data.results;
//     console.log(data)

//     for (let i = 0; i < 4; i++) {
//       const baseImageUrl = 'https://image.tmdb.org/t/p/';
//       const imageSize = 'w185';

//       const posterPath = movies[i].poster_path;
//       const imageUrl = baseImageUrl + imageSize + posterPath;
//       const topMovies = document.getElementById("movie_top");
//       const topMovieItem = document.createElement("div")
      
//       topMovieItem.className="related_movie";

//       topMovies.appendChild(topMovieItem);
//       topMovieItem.innerHTML= 
//       `
//         <img src="${imageUrl}" />
//         <p>${movies[i].title}</p>
//         <p>Rating: ${movies[i].vote_average}</p>
//       `  
//     }
//   })
//   .catch(error => console.error(error))