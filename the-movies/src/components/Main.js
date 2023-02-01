import React from "react";
import Moviebox from "./Moviebox";


export default function Main({movieList}){

    console.log("dasdddddddddddddddddddddd " + {movieList}[0])

return (
<div>
    <nav>
                <div id="logo">
                    <h2><sup>The</sup> <strong>Movies</strong></h2>
                </div>
                <div id="search">
                    <input type="text" placeholder="Search for a movie"/>
                </div>
            </nav>
<div className="main_details">
<div className="movie_poster">
    <img src="https://placehold.co/500x750" alt="poster"/>
</div>
<div className="movie_details">
<h1>asd</h1>
    <h2>Subtitle</h2>
    <p>Description</p>
    <h2>Genre</h2>
    
</div>
</div></div>
)

}

