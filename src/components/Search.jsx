import "../styles/index.css";
import { useNavigate } from "react-router-dom";

const Search = ({ animes, newAnimeList, searchQuery, loading, 
  setAnimes, setNewAnimeList }) => {
  let navigate = useNavigate();

  function filterAnime(filter) {
    console.log(filter);
    // Rank
    if (filter === "LOW_TO_HIGH") {
      // sort originalAnimeList
      const sortedAnimes = 
      (animes.slice().sort(
        (a,b) => 
        (a.attributes.popularityRank) - (b.attributes.popularityRank)
      ))
      setAnimes(sortedAnimes);

      const sortedNewAnimeList =
      (newAnimeList.slice().sort(
        (a,b) => 
        (a.attributes.popularityRank) - (b.attributes.popularityRank)
      ))
      setNewAnimeList(sortedNewAnimeList);
    }

    // // Rank
    if (filter === "HIGH_TO_LOW") {
      const sortedAnimes = 
      (animes.slice().sort(
        (a,b) => 
        (b.attributes.popularityRank) - (a.attributes.popularityRank)
      ))
      setAnimes(sortedAnimes);

      const sortedNewAnimeList =
      (newAnimeList.slice().sort(
        (a,b) => 
        (b.attributes.popularityRank) - (a.attributes.popularityRank)
      ))
      setNewAnimeList(sortedNewAnimeList);
    }

    // // Score
    if (filter === "SCORE") {
  
      const sortedAnimes = 
      (animes.slice().sort(
        (a,b) => 
        (a.attributes.averageRating) - (b.attributes.averageRating)
      ))
      setAnimes(sortedAnimes);

      const sortedNewAnimeList =
      (newAnimeList.slice().sort(
        (a,b) => 
        (a.attributes.averageRating) - (b.attributes.averageRating)
      ))
      setNewAnimeList(sortedNewAnimeList);
    }
  }

  return (
    <div className="bg-gradient-to-b lg:h-[140vh]">
      <section id="search">
        <div className="container">
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="row">
            <div className="filter">
              <div className="filter__result">
                <h1 className="filter__result--text slide-in">
                  Search results:{" "}
                  <span className="white font-normal">{searchQuery}</span>
                </h1>
              </div>

              <div className="filter__result--year slide-in">
                <select
                id="filter__container"
                defaultValue="DEFAULT"
                onChange={(event) => filterAnime(event.target.value)}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Rank, High to Low</option>
                  <option value="HIGH_TO_LOW">Rank, Low to High</option>
                  <option value="SCORE">Score</option>
                </select>
              </div>

            </div>
            <div className="search__result--loading">
              <i className="fas fa-spinner"></i>
            </div>
          </div>
        </div>

        {/* TODO: React Carousel for Imgs? */}

        {/* TODO: Loading States */}

        <div className="container">
          <div className="row">
            <div className="anime-list">
              <div className="anime">
                {/* Use conditional to print out newAnimeList */}
                {loading
                  ? new Array(10).fill(0).map((_, index) => (
                      <div className="anime-card fade-in" key={index}>
                        <div className="anime-card__container">
                          <div className="anime__card--skeleton"></div>
                          <div className="skeleton anime__title--skeleton"></div>
                          <p className="skeleton anime__rank--skeleton"></p>
                          <p className="skeleton anime__score--skeleton"></p>
                          <p className="skeleton anime__year--skeleton"></p>
                        </div>
                      </div>
                    ))
                  : newAnimeList.length > 0
                  ? newAnimeList.map((anime) => (
                      <div className="anime-card" key={anime.id}>
                        <div className="anime-card__container">
                          <figure
                            className="anime__card--img-wrapper"
                            // direct user to page w/ anime info
                            onClick={() => navigate(`${anime.id}`)}
                          >
                            <img
                              src={anime.attributes.posterImage.original}
                              alt={anime.attributes.canonicalTitle}
                              className="anime__card--img"
                            />
                          </figure>
                          <h3 className="anime-title truncate">
                            {anime.attributes.canonicalTitle}
                          </h3>
                          <p className="p__container">
                            <b>Rank </b>: {anime.attributes.popularityRank}
                          </p>
                          <p className="p__container">
                            <b>Score </b>: {anime.attributes.averageRating}
                          </p>
                          <p className="p__container">
                            <b>Year </b>: {anime.attributes.startDate}
                          </p>
                        </div>
                      </div>
                    ))
                  : animes.map((anime) => (
                      <div className="anime-card" key={anime.id}>
                        <div className="anime-card__container">
                          <figure
                            className="anime__card--img-wrapper"
                            onClick={() => navigate(`${anime.id}`)}
                          >
                            <img
                              src={anime.attributes.posterImage.original}
                              alt={anime.attributes.canonicalTitle}
                              className="anime__card--img"
                            />
                          </figure>
                          <h3 className="anime-title truncate">
                            {anime.attributes.canonicalTitle}
                          </h3>
                          <p className="p__container">
                            <b>Rank </b>: {anime.attributes.popularityRank}
                          </p>
                          <p className="p__container">
                            <b>Score </b>: {anime.attributes.averageRating}
                          </p>
                          <p className="p__container">
                            <b>Year </b>: {anime.attributes.startDate}
                          </p>
                        </div>
                      </div>
                    ))}
                {/* if search-bar input empty,  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
