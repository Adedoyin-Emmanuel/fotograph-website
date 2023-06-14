import React from "react";
import { Container } from "react-bootstrap";
import AppVideoSection from "./AppVideoSection";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
interface AppHeroSection1Props {
  children?: JSX.Element | JSX.Element[];
}
const AppHeroSection1: React.FC = ({
  children,
}: AppHeroSection1Props): JSX.Element => {
  const navigateTo = useNavigate();

  const handleDownloadClick = () => {
    navigateTo("/download");
  };
  return (
    <React.Fragment>
      <Container fluid className="m-auto py-4">
        <h1 className=" display-3 text-center text-capitalize brand-heading-text fw-bold my-3 m-0 w-100 animate__animated animate__bounceIn">
          A tool for image manipulation
        </h1>

        <section className="text-container m-auto width-toggle  text-center d-flex align-items-center justify-content-center">
          <p className="text-center brand-text-muted brand-small-text-3 my-4 px-md-1 px-2">
            FotoGraph brings most image manipulation tools we use online to a
            single offline application.
          </p>
        </section>

        <section className="explore-button m-auto d-flex align-items-center justify-content-center p-4">
          <Button
            className="brand-download-button border-0 width-toggle-6 text-muted fs-5"
            onClick={handleDownloadClick}
          >
            <Link to="download" className="text-decoration-none text-muted">
              <FontAwesomeIcon icon={faDownload} /> Download
            </Link>{" "}
          </Button>
        </section>
        <AppVideoSection />

        {children}
      </Container>
    </React.Fragment>
  );
};

export default AppHeroSection1;
