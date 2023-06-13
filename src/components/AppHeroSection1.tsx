import React from "react";
import { Container } from "react-bootstrap";
import AppVideoSection from "./AppVideoSection";

import DemoImg from "./../assets/img-1.png";
const AppHeroSection1: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Container fluid className="m-auto py-4">
        <h1 className=" display-3 text-center text-capitalize brand-heading-text fw-bold my-3 m-0 w-100">
          A tool for image manipulation
        </h1>

        <section className="text-container m-auto width-toggle  text-center d-flex align-items-center justify-content-center">
          <p className="text-center brand-text-muted brand-small-text-3 my-4 px-md-1 px-4">
            FotoGraph brings most image manipulation tools we use online to a
            single offline application.
          </p>
        </section>

        <section className="m-auto d-flex align-items-center justify-content-center my-4 shadow-lg p-2 brand-dark-color rounded-3 width-toggle-5">
          <img
            src={DemoImg}
            alt="fotograph-features"
            className="img-fluid rounded-3 shadow brand-dark-color"
          />
        </section>
      </Container>
    </React.Fragment>
  );
};

export default AppHeroSection1;
