import React from "react";

export default function Popular(){
    return (
<section id="header_details">
    <div id="movie_title"></div>        
    <div id="pop_details"></div>
</section>
    )
}

const apiKey = "f9a8200a794828e016db6bb8fca5a95a"
//
// FETCH POPULAR
//
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
  .then(response => response.json())
  .then(data => {
    const popular = data.results;
    console.log(data)

    for (let i = 0; i < 4; i++) {

        const baseImageUrl = 'https://image.tmdb.org/t/p/';
        const popMovies = document.getElementById("pop_details");
        const popMovieTitle = document.getElementById("movie_title");
        const backdropSize = 'original';
        const backdroppath = popular[i].backdrop_path;
        const backdropImageUrl = baseImageUrl + backdropSize + backdroppath;
        const topMovieSplash = document.getElementById("movie_splash")
        topMovieSplash.style.backgroundImage = 
        `linear-gradient(to bottom, rgba(5, 22, 30, 0.01), rgba(5, 22, 30, 1)), url(${backdropImageUrl})`;

        const popMovieItem = document.createElement("div");
        popMovieItem.className="movie_details_box";
        popMovieItem.style.backgroundImage = `url(${backdropImageUrl})`
        popMovieItem.style.backgroundSize = "cover"
        

        let popIcon=""
        if (popular[i].popularity > 10000) {
                popIcon = "🔥🔥🔥"}
            else if (popular[i].popularity > 3000){
                popIcon = "🔥🔥"
            }
            else {(popIcon = "🔥")
        }
        
        popMovieItem.innerHTML= 
        `
        <p>${popIcon}</p>
        `
        popMovies.appendChild(popMovieItem);  

        popMovieTitle.innerHTML=`<h1>${popular[i].title}</h1>`
    }
  })
  .catch(error => console.error(error))