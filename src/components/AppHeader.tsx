import React from "react";
import LogoText from "./../assets/logo-text.png";

import { Link } from "react-router-dom";
const AppHeader: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <nav className={`navbar navbar-expand-lg`} aria-label="Fotograph Header">
        <div className="container-fluid">
          <img
            src={LogoText}
            className="img-fluid"
            height="30"
            width="170"
            alt="site-logo"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#Fotograph"
            aria-controls="Fotograph"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-light"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="Fotograph">
            <ul className="navbar-nav">
              <li className="nav-item mx-md-5 mx-4 my-md-0 my-3">
                <Link
                  aria-current="page"
                  className="text-decoration-none brand-white-text text-capitalize"
                  to="/home"
                >
                  home
                </Link>
              </li>

              <li className="nav-item mx-md-5 mx-4 my-md-0 my-3">
                <Link
                  to="/about"
                  className="text-decoration-none brand-white-text text-capitalize"
                >
                  about
                </Link>
              </li>

              <li className="nav-item mx-md-5 mx-4 my-md-0 my-3">
                <Link
                  to="/support"
                  className="text-decoration-none brand-white-text text-capitalize"
                >
                  support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default AppHeader;
