import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BrandImage from "./../assets/logo-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const AppFooter: React.FC = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  return (
    <Container className="my-5 py-5">
      <h1
        className=" display-1 text-start text-capitalize brand-heading-text fw-bold my-3 m-0 w-100"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        Build
        <br />
        Way Faster
      </h1>

      <Row className="social-icons-container">
        <Col xs={12} md={10} className="brand-image">
          <img
            src={BrandImage}
            alt="fotograph-logo"
            className="img-fluid  p-0 m-0 fotograph-logo md-md-0 mx-1 "
            height={200}
            width={200}
          />
        </Col>

        <Col
          xs={12}
          md={2}
          className="social-icons d-flex align-items-center justify-content-md-around"
        >
          <Link
            to="https://github.com/Adedoyin-Emmanuel/Fotograph"
            target="_blank"
            className="text-decoration-none"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size={"2x"}
              className="footer-social-icons mx-md-0 mx-3"
              color="#575757"
            ></FontAwesomeIcon>
          </Link>

          <Link
            to="https://twitter.com/Emmysoft_Tm"
            target="_blank"
            className="text-decoration-none"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size={"2x"}
              className="footer-social-icons mx-md-0 mx-3"
              color="#575757"
            ></FontAwesomeIcon>
          </Link>

          <Link
            to="https://linkedin.com/in/Adedoyin-Emmanuel"
            target="_blank"
            className="text-decoration-none"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size={"2x"}
              className="footer-social-icons mx-md-0 mx-3"
              color="#575757"
            ></FontAwesomeIcon>
          </Link>

          <Link
            to="https://facebook.com/adedoyin.emmanuel.180"
            target="_blank"
            className="text-decoration-none"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size={"2x"}
              className="footer-social-icons mx-md-0 mx-3"
              color="#575757"
            ></FontAwesomeIcon>
          </Link>
        </Col>
      </Row>

      <section className="copyright my-5 text-start">
        <p className="text-capitalize fs-6 px-md-2 brand-copyright-text ">
          all rights reserved &copy; {currentYear}
        </p>
      </section>
    </Container>
  );
};

export default AppFooter;
