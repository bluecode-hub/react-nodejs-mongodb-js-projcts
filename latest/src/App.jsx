// src/App.jsx
import React from "react";
import Row from "./Row";
import './App.css';
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";


function App() {
  return (
    <div className="App">
     <Banner/>
      <Nav/>
     <h1></h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Movies" fetchURL={requests.fetchTrending} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}  />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaies" fetchURL={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;
