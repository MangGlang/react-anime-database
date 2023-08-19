import Header from "../components/Header";
import { Helmet } from "react-helmet";
import Search from "../components/Search";
import "../styles/index.css";
import { useEffect } from "react";
import Footer from "../components/Footer";

const TITLE = "Anime Database";

export default function Index( { searchNewAnime, animes, newAnimeList, searchQuery, loading, setAnimes, setNewAnimeList } ) {
  
  
  useEffect(() => {
    window.scrollTo(0,0);
  })
  return (
    <div className="relative h-[140vh]">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <Header searchNewAnime={searchNewAnime}/>
      <main>
        <Search animes={animes}
        newAnimeList={newAnimeList}
        searchQuery={searchQuery}
        setAnimes={setAnimes}
        setNewAnimeList={setNewAnimeList}
        loading={loading}
        />
        <Footer />
      </main>
    </div>
  );
}
