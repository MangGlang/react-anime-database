import React from "react";
import malLogo from "../assets/malLogo.png";
import animeLogo from "../assets/anime-list-logo.png";
import { Link } from "react-router-dom";

const NavBar = ( { redirectToSearchBar } ) => {

  return (
    <>
      <nav>
        <figure className="figure__container">
          <Link to="/">
          <img id="anime-logo" src={malLogo} alt="MAL-logo" />
          </Link>
          <img id="personal-logo" src={animeLogo} alt="anime-logo" />

        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <Link
              to="/"
              className="nav__link--anchor link__hover-effect link__hover-effect-white
                      hidden lg:inline small-style"
            >
              Home
            </Link>
          </li>
          <li className="nav__link">
            {/* TODO: Fix onClick function and convert to react */}
            <Link
              to="/"
              className="nav__link--anchor link__hover-effect link__hover-effect-white small-style"
              onClick={redirectToSearchBar}
            >
              Find an anime
            </Link>
          </li>
          <li className="nav__link">
            <a
              href="mailto:minhleenl@gmail.com"
              target="_"
              className="nav__link--anchor button"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
