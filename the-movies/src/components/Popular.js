import React from "react";




export default function Popular(){
    const [popMovies, setPopMovies] = React.useState([])
    
    React.useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setPopMovies(data.results))
            
            
            }, [])
            console.log(popMovies[2].title)
    return (
        <section id="header_details">
            <div id="movie_title" className="movie_details_box"></div>        
            <div id="pop_details"></div>
        </section>
    )
}


const apiKey = "f9a8200a794828e016db6bb8fca5a95a"


// FETCH POPULAR


//     const popular = data.results;
//     console.log(data)

//     for (let i = 0; i < 6; i++) {

//         const baseImageUrl = 'https://image.tmdb.org/t/p/';
//         const popMovies = document.getElementById("pop_details");
//         const popMovieTitle = document.getElementById("movie_title");
//         const backdropSize = 'original';
//         const backdroppath = popular[i].backdrop_path;
//         const backdropImageUrl = baseImageUrl + backdropSize + backdroppath;
//         const topMovieSplash = document.getElementById("movie_splash")
//         topMovieSplash.style.backgroundImage = 
//         `linear-gradient(to bottom, rgba(5, 22, 30, 0.01), rgba(5, 22, 30, 1)), url(${backdropImageUrl})`;

//         const popMovieItem = document.createElement("div");
//         popMovieItem.className="movie_details_box";
//         popMovieItem.style.backgroundImage = `url(${backdropImageUrl})`
//         popMovieItem.style.backgroundSize = "cover"
        

//         let popIcon=""
//         if (popular[i].popularity > 10000) {
//                 popIcon = "🔥🔥🔥"}
//             else if (popular[i].popularity > 3000){
//                 popIcon = "🔥🔥"
//             }
//             else {(popIcon = "🔥")
//         }
        
//         popMovieItem.innerHTML= 
//         `<a href="
//         <p>${popIcon}</p>
//         `
//         popMovies.appendChild(popMovieItem);  

//         popMovieTitle.innerHTML=`<h1>${popular[i].title}</h1>`
//     }
//   })
//   .catch(error => console.error(error))