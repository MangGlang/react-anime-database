import { useRef } from "react";
import "../styles/index.css";
import NavBar from "./NavBar";

export default function Header({ searchNewAnime }) {
  const searchResultRef = useRef(null);

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type === "mousedown") {
      const inputValue = searchResultRef.current.value
      searchNewAnime(inputValue);
      // console.log('enter')
    }
  };

  function redirectToSearchBar() {
    // Access ref of searchBar & target current of obj
    // console.log(searchResultRef);
    searchResultRef.current.focus();
  }

  const handleClick = () => {
    // get input value from search bar based on ref
    const inputValue = searchResultRef.current.value
    searchNewAnime(inputValue)
    console.log('clicked');
  }

  return (
    <header>
      <section id="landing-page">
        <div className="container">
          <div className="image-overlay">
            <div className="row">
              <NavBar redirectToSearchBar={redirectToSearchBar}/>
              <div className="header__container fade-in">
                <div className="popUpWord">
                  <div className="header__content  slide-in">
                    {/* TODO: Fix onClick function and convert to react */}
                    <h1
                      className="header__content--gradient slide-in"
                      onClick={redirectToSearchBar}
                    >
                      Browse for an Anime
                    </h1>
                  </div>
                </div>
                <div className="header__searchbar">
                  {/* TODO: Fix onClick function and convert to react */}
                  <input
                    className="demo-text"
                    type="text"
                    placeholder="Search Anime by Name or Keyword"
                    id="searchResult"
                    ref={searchResultRef}
                    onKeyDown={(e) => handleSubmit(e)}
                    required
                  />
                  <div className="svg">
                    <svg
                    onClick={handleClick}
                      data-v-390ceb07=""
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="svg-inline--fa fa-search fa-w-16"
                    >
                      <path
                        data-v-390ceb07=""
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
