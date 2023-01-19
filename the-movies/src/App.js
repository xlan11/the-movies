import React from "react"
import './App.css';
import Header from "./components/Header"
import Popular from "./components/Popular";
import TopMovies from "./components/TopMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import Footer from "./components/Footer";
// import Fetch from "./components/Fetch";


export default function App() {
  return (
    <div className="container">
    <div id="movie_splash" className="movie_splash">
    <Header />
    </div>
    {/* <Fetch /> */}
    <Popular />
    {/* <TopMovies /> */}
    {/* <UpcomingMovies /> */}
    <Footer />
    </div>
  );
}
