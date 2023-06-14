import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const NotFound: React.FC = (): JSX.Element => {
  const navigateTo = useNavigate();

  const navigateHome = () => {
    navigateTo("/");
  };
  return (
    <section className="not-found-container">
      <section className="text-section ">
        <h1 className=" display-5 text-center text-capitalize brand-heading-text fw-bold my-3 m-0 w-100">
          Page Not found!
        </h1>

        <p className="text-capitalize brand-small-text-3 brand-text-muted text-center">
          the page you requested for was not found{" "}
        </p>
      </section>
    <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
      <section className="button-container d-flex align-items-center justify-content-center w-100 p-md-0 p-5">
        <Button
          className="brand-route-home-button border-0 width-toggle-6 text-muted fs-5"
          onClick={navigateHome}
        >
          Home
        </Button>
      </section>
    </section>
  );
};

export default NotFound;
