import React from "react";
import LogoText from "./../assets/logo-text.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const AppHeader: React.FC = (): JSX.Element => {
  const navigateTo = useNavigate();

  const handleLogoImgClick = () => {
    navigateTo("/");
  };
  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg p-0`}
        aria-label="Fotograph Header"
      >
        <div className="container-fluid p-0">
          <img
            src={LogoText}
            className="img-fluid p-0 m-0 fotograph-header-logo"
            height={170}
            width={170}
            alt="site-logo"
            onClick={handleLogoImgClick}
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
                  to="/download"
                  className="text-decoration-none brand-white-text text-capitalize"
                >
                  download
                </Link>
              </li>

              <li className="nav-item mx-md-5 mx-4 my-md-0 my-3">
                <Link
                  to="https://github.com/Adedoyin-Emmanuel/Fotograph"
                  target="_blank"
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
