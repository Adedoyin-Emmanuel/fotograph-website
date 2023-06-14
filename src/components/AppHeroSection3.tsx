import React from "react";
import { Container } from "react-bootstrap";
import WorldImage from "./../assets/world.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const AppHeroSection3: React.FC = (): JSX.Element => {
  return (
    <Container className="my-4 py-4">
      <h1
        className="display-6 text-center text-capitalize brand-heading-text fw-bold my-5 m-0 w-100"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        a free, open source software built just for you
      </h1>

      <section
        className="image-section m-auto d-flex aling-items-center justify-content-center world-image-container"
        data-aos="zoom-in-down"
        data-aos-duration="2500"
      >
        <img
          src={WorldImage}
          alt="free-open-source"
          className="img-fluid world-image"
        />
      </section>

      <section className="spacer my-4 py-2"></section>

      <section className="explore-button m-auto d-flex align-items-center justify-content-center p-md-0 p-3">
        <Button className="brand-explore-button border-0 width-toggle p-3 text-muted fs-5">
          <Link
            to="https://github.com/Adedoyin-Emmanuel/fotograph"
            target="_blank"
            className="text-decoration-none text-muted"
          >
            Explore
          </Link>{" "}
        </Button>
      </section>
    </Container>
  );
};

export default AppHeroSection3;
