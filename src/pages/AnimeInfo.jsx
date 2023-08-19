import React, { useEffect, useState } from "react";
import "../styles/index.css";
import NavBar from "../components/NavBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";

const AnimeInfo = ({ animes, newAnimeList, loading }) => {
  let navigate = useNavigate();
  // Make separate component for originalAnime / newAnime for readability?

  // ********************************************************************
  // "originalAnime" is original animes shown upon mount of webpage
  // "newAnime" is animes searched by input from user
  const [originalAnime, setOriginalAnime] = useState();
  const [newAnime, setNewAnime] = useState();
  // ********************************************************************

  // useParams() => find anime.id value & destructing "id" to target value
  const { id } = useParams();

  // get random animes
  const [randomAnimes, setRandomAnimes] = useState([]);

  // get anime info to access object
  useEffect(() => {
    setNewAnime(newAnimeList.find((anime) => anime.id === id));
    setOriginalAnime(animes.find((anime) => anime.id === id));

    // Fisher-Yates alogorithm: randomly shuffle array before selecting
    const shuffledAnimes = [...animes];
    for (let i = shuffledAnimes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnimes[i], shuffledAnimes[j]] = [
        shuffledAnimes[j],
        shuffledAnimes[i],
      ];
    }
    const randomSubset = shuffledAnimes
      .filter((anime) => anime.id !== id)
      .slice(0, 4);

    setRandomAnimes(randomSubset);
  }, [id, animes, newAnimeList, loading, originalAnime]);

  useEffect(() => {
    window.scrollTo(0, 140);
  });
  return (
    <>
      <div className="container">
        <div className="image-overlay indexShadow">
          <div className="row">
            <NavBar />
          </div>
        </div>
        {/* <h1 className="text-red-500">hello</h1> */}
        <section id="anime-page">
          <div className="anime__body">
            <div className="anime__main">
              <div className="anime__container">
                <div className="row">
                  {/* top portion */}
                  <div className="anime__selected--top slide-in">
                    <Link to="/" className="">
                      <FontAwesomeIcon
                        icon="arrow-left"
                        className="anime__link"
                      ></FontAwesomeIcon>
                    </Link>
                    <Link to="/" className="anime__link">
                      <h2 className="link__hover-effect link__hover-effect-white">
                        Animes
                      </h2>
                    </Link>
                  </div>

                  <div className="anime__selected">
                    {/* Anime Image */}
                    <div className="anime-card anime__selected--container">
                      <div className="anime__card--img-wrapper">
                        <figure className="anime__selected--img-wrapper anime__selected--img-wrapper-style">
                          {loading
                            ? new Array(1)
                                .fill(0)
                                .map((_) => (
                                  <div className="anime--selected--skeleton fade-in"></div>
                                ))
                            : (newAnime && (
                                <img
                                  src={
                                    newAnime &&
                                    newAnime.attributes.posterImage.original
                                  }
                                  alt=""
                                  className="anime__selected--img fade-in anime__style--small"
                                />
                              )) ||
                              (originalAnime && (
                                <img
                                  src={
                                    originalAnime &&
                                    originalAnime.attributes.posterImage
                                      .original
                                  }
                                  alt=""
                                  className="anime__selected--img fade-in"
                                />
                              ))}
                        </figure>
                      </div>
                    </div>
                    {/* Anime Description */}

                    <div className="anime__description--container">
                      {/* Anime Main Title */}
                      <h1 className="anime__title--style white slide-in">
                        {(originalAnime &&
                          originalAnime.attributes.canonicalTitle) ||
                          (newAnime && newAnime.attributes.canonicalTitle)}
                      </h1>

                      <div className="anime__selected--subtitle--container">
                        {/* Anime Released: */}
                        <h4 className="anime__selected--subtitle slide-in">
                          Released:
                          <span className="white--weight">
                            {(originalAnime &&
                              `${" " + originalAnime.attributes.startDate}`) ||
                              (newAnime &&
                                `${" " + newAnime.attributes.startDate}`)}
                          </span>
                        </h4>

                        {/* Anime Age Recommendation: */}
                        <h4 className="anime__selected--subtitle slide-in">
                          Ages:
                          <span className="white--weight">
                            {(originalAnime &&
                              (originalAnime.attributes.ageRatingGuide !==
                              "null"
                                ? `${" " +
                                    originalAnime.attributes.ageRatingGuide}`
                                : originalAnime.attributes.ageRating)) ||
                              (newAnime &&
                                (newAnime.attributes.ageRatingGuide !== "null"
                                  ? `${" " +
                                      newAnime.attributes.ageRatingGuide}`
                                  : `${" " +
                                      newAnime.attributes.ageRating}`)) ||
                              " N/A"}
                          </span>
                        </h4>
                      </div>

                      {/* Anime Ongoing Status: */}
                      <h4 className="anime__selected--subtitle slide-in">
                        Status:
                        <span className="white--weight">
                          {(originalAnime &&
                            `${" " + originalAnime.attributes.status}`) ||
                            (newAnime && `${" " + newAnime.attributes.status}`)}
                        </span>
                      </h4>

                      {(originalAnime && (
                        <div className="video-container fade-in">
                          <iframe
                            title="Anime Trailer"
                            width="100%"
                            height="447px"
                            src={`https://www.youtube.com/embed/${originalAnime.attributes.youtubeVideoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                            allowFullScreen="allowfullscreen"
                          ></iframe>
                        </div>
                      )) ||
                        (newAnime && (
                          <div className="video-container">
                            <iframe
                              title="Anime Trailer"
                              width="100%"
                              height="447px"
                              src={`https://www.youtube.com/embed/${newAnime.attributes.youtubeVideoId}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                              allowFullScreen="allowfullscreen"
                            ></iframe>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="anime__info--container">
                    <h4 className="white fade-in anime__title--style white">
                      Synopsis:
                    </h4>

                    {/* Anime Synopsis: */}
                    <p className="anime__synopsis fade-in">
                      {(originalAnime &&
                        `${originalAnime.attributes.synopsis}`) ||
                        (newAnime && `${newAnime.attributes.synopsis}`) ||
                        (originalAnime &&
                          `${originalAnime.attributes.description}`) ||
                        (newAnime && `${newAnime.attributes.description}`) ||
                        "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="anime__container">
                <div className="row">
                  <div className="anime__recommended">
                    <div className="anime__selected--top slide-in anime__title--style white">
                      Recommended Animes
                    </div>
                    <div className="anime white anime__recommended--style">
                      {loading
                        ? new Array(4).fill(0).map((_, index) => (
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
                        : randomAnimes
                            .filter((anime) => anime.id !== id)
                            .slice(0, 4)
                            .map((anime) => (
                              <div className="anime-card" key={anime.id}>
                                <div className="anime-card__container">
                                  <figure
                                    className="anime__card--img-wrapper"
                                    onClick={() =>
                                      navigate(`/${anime.id}`)
                                    }
                                  >
                                    <img
                                      src={
                                        anime.attributes.posterImage.original
                                      }
                                      alt={anime.attributes.canonicalTitle}
                                      className="anime__card--img"
                                    />
                                  </figure>
                                  <h3 className="anime-title truncate">
                                    {anime.attributes.canonicalTitle}
                                  </h3>
                                  <p className="p__container">
                                    <b>Rank </b>:{" "}
                                    {anime.attributes.popularityRank}
                                  </p>
                                  <p className="p__container">
                                    <b>Score </b>:{" "}
                                    {anime.attributes.averageRating}
                                  </p>
                                  <p className="p__container">
                                    <b>Year </b>: {anime.attributes.startDate}
                                  </p>
                                </div>
                              </div>
                            ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default AnimeInfo;
