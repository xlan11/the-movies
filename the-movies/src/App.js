import React from "react"
import './App.css';
import Header from "./components/Header"
import Popular from "./components/Popular";
import TopMovies from "./components/TopMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div class="container">
    <div id="movie_splash" class="movie_splash">
    <Header />
    </div>
    
    <Popular />
    <TopMovies />
    <UpcomingMovies />
    <Footer />
    </div>
  );
}
