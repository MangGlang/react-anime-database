import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import "./styles/index.css";
import AnimeInfo from "./pages/AnimeInfo";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [animes, setAnimes] = useState([]);
  const [newAnimeList, setNewAnimeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState();

  // *** Fetch original anime list
  useEffect(() => {
    getAnimeResponse();
  }, []);

  async function getAnimeResponse() {
    setLoading(true);
    // on mount, loading = true
    const { data } = await axios.get(
      `https://kitsu.io/api/edge/trending/anime`
      
    );
    setAnimes(data.data);

    // after data has been fetched, loading = false
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
  // ***
  console.log(animes);

  // *** Search for new anime list
  async function searchNewAnime(event) {
    setLoading(true);
    // get value of anime searched & store as variable to pass as a prop
    setSearchQuery(event);

    const animeList = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[text]=${event}`
    );

    const newAnimeList = animeList.data.data;
    // log newAnimeList
    setNewAnimeList(newAnimeList);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
  // ***
  // console.log(newAnimeList);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Index 
        searchNewAnime={searchNewAnime}
        animes={animes}
        newAnimeList={newAnimeList}
        searchQuery={searchQuery}
        loading={loading}
        setAnimes={setAnimes}
        setNewAnimeList={setNewAnimeList}
        />}></Route>
        <Route path="/:id" exact element={<AnimeInfo 
         animes={animes}
         newAnimeList={newAnimeList}
         loading={loading}
        />} />
      </Routes>
    </Router>
  );
}

export default App;
