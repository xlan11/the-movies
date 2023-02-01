import React, {useState, useEffect} from "react"
import './App.css';
import Main from "./components/Main"
import Footer from "./components/Footer"
import Search from "./components/Search"


const apiKey = "f9a8200a794828e016db6bb8fca5a95a"

export default function App() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
      fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then (response => response.json()
      .then (data => setMovies(data.results))
      .catch(error => console.error(error)))
  }, []);

let splashStyle = {}
if (movies.length > 0) {
    splashStyle = {
      backgroundImage: `https://image.tmdb.org/t/p/original/${movies[3].backdrop_path}`,
    }
    }


  return (
    <div
      className="container" 
      style={
        {background: `url("${splashStyle.backgroundImage}")`}
        }>
    <div className="container-inner">
    <Search />
    <Main />
    
    <Footer />
    </div>
    </div>
  );
}
