import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AppFeatures from "./AppFeatures";
import AOS from "aos";
const AppHeroSection2: React.FC = (): JSX.Element => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <Container fluid className="my-5">
        <h1
          className="display-5 text-center text-capitalize brand-heading-text fw-bold my-3 m-0 w-100"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          All the tools you need, in one place
        </h1>
        <AppFeatures></AppFeatures>
      </Container>
    </React.Fragment>
  );
};

export default AppHeroSection2;
