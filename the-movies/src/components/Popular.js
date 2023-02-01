import React, { useState, useEffect }  from "react";
import Moviebox from "./Moviebox";



export default function Popular({movies}){
    
    const movieItems = movies.slice(0,3).map((movie, index) => (
        <Moviebox 
            key = {index}
            backgroundImage={movie.backdrop_path}
            title={movie.title}
            poster={movie.poster_path}
        />)
    
        
        )
        console.log(movies[0] + "++++++++")

    return (        
        <div>
            <section id="header_details">
                <h1>Popular movies</h1>
                <div id="movie_top">{movieItems}</div>
                    {movies.length > 0 && (
                        <div id="movie_selected">
                            <h1>{movies[0].title}</h1>
                            <img src={`https://image.tmdb.org/t/p/w500/${movies[0].poster_path}`} alt="poster"/>
                        </div>
                    )}
            </section>      
        </div>
      );
    }