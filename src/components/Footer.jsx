import React from "react";
import { Link } from "react-router-dom";
import kitsuAPI2 from "../assets/kitsu_api.png";
import MinhleeLogo from "../assets/logoml.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container">
        {/*  */}
        <div className="footer__container">
          <figure className="footer__img footer__logo--img">
            <img
              className="footer__img--style logo"
              src={MinhleeLogo}
              alt="api-source"
            />
          </figure>

          <div className="footer__icons">
            <FontAwesomeIcon
              icon={faFacebook}
              className="footer__icon no-cursor"
            />
            <a
              href="https://www.linkedin.com/in/minhlee-lam-7a487a23a/"
              target="_"
              class="click"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footer__icon click"
              />
            </a>
            <a
              href="https://github.com/MangGlang"
              target="_"
              class="click"
            >
                <FontAwesomeIcon icon={faGithub} className="footer__icon click" />
            </a>
            <FontAwesomeIcon icon={faTwitter} className="footer__icon no-cursor" />
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer__icon no-cursor"
            />
          </div>

          <div className="footer__list">
            <Link
              to="/"
              className="footer__link link__hover-effect link__hover-effect-white"
            >
              Home
            </Link>
            <span className="footer__link no-cursor link__hover-effect link__hover-effect-white">
              About
            </span>
            <Link
              to="/"
              className="footer__link link__hover-effect link__hover-effect-white"
            >
              Animes
            </Link>
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
          </div>
          <div className="footer__copyright">Copyright &copy; 2023 Minhlee</div>
          <figure className="footer__img">
            <img
              className="footer__img--style"
              src={kitsuAPI2}
              alt="api-source"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Footer;
