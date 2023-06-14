import React from "react";
import { Container } from "react-bootstrap";
import WorldImage from "./../assets/world.png";

interface AppHeroSection3Props {}

const AppHeroSection3: React.FC = (): JSX.Element => {
  return (
    <Container className="my-4 py-4">
      <h1 className="display-6 text-center text-capitalize brand-heading-text fw-bold my-5 m-0 w-100">
        a free, open source software built just for you
      </h1>

      <section className="image-section m-auto d-flex aling-items-center justify-content-center world-image-container">
        <img
          src={WorldImage}
          alt="free-open-source"
          className="img-fluid world-image"
        />
      </section>

      <section className="spacer my-4 py-2"></section>
    </Container>
  );
};

export default AppHeroSection3;
