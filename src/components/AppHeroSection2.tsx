import React from "react";
import { Container } from "react-bootstrap";
const AppHeroSection2: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Container fluid className="my-5">
        <h1 className="display-6 text-md-center text-start text-capitalize brand-heading-text fw-bold my-3 m-0 w-100">
          Your new favorite tool and so much more.
        </h1>
      </Container>
    </React.Fragment>
  );
};

export default AppHeroSection2;
