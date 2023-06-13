import React from "react";
import { Container } from "react-bootstrap";
import AppFeatures from "./AppFeatures";
const AppHeroSection2: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Container fluid className="my-5">
        <h1 className="display-6 text-md-center text-start text-capitalize brand-heading-text fw-bold my-3 m-0 w-100">
          All the tools you need, in one place
        </h1>
        <AppFeatures></AppFeatures>
      </Container>
    </React.Fragment>
  );
};

export default AppHeroSection2;
