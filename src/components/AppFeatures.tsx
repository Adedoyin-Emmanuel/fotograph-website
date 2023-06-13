import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecycle,
  faEraser,
  faMagnifyingGlass,
  faGear,
  faGift,
  faMinimize,
  faCompress,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";

interface AppFeaturesProps {
  className?: string;
}

const AppFeatures: React.FC = ({
  className,
}: AppFeaturesProps): JSX.Element => {
  return (
    <Container className={`my-5 py-3 ${className}`}>
      <Row className="justify-content-md-center">
        <Col md={4} xs={12} className="mb-4 mb-md-0 pb-md-0 pb-4">
          <section className="box box1">
            <section className="feature-icon brand-icon-gradient-color p-3 px-4 rounded-3 shadow brand-icon-container m-auto d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faRecycle}
                className="text-muted shadow-lg"
                size={"xl"}
              />
            </section>

            <h4 className="text-capitalize text-center fs-4 mt-5 mb-3 fw-semibold">
              image converter
            </h4>

            <p className="brand-small-text text-center py-2 app-feature-text">
              Effortlessly convert images between formats with our intuitive
              application, ensuring quality and convenience in a few clicks
            </p>
            <section className="spacer my-4"></section>
          </section>
        </Col>
        <Col md={4} xs={12} className="mb-4 pb-md-0 pb-4">
          <section className="box box2">
            <section className="feature-icon brand-icon-gradient-color p-3 px-4 rounded-3 shadow brand-icon-container m-auto d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faEraser}
                className="text-muted shadow-lg"
                size={"xl"}
              />
            </section>

            <h4 className="text-capitalize text-center fs-4 mt-5 mb-3 fw-semibold">
              background removal
            </h4>

            <p className="brand-small-text text-center py-2 app-feature-text">
              Easily remove image backgrounds with our powerful application,
              saving you time and effort in achieving professional results
            </p>
            <section className="spacer my-4"></section>
          </section>
        </Col>
        <Col md={4} xs={12} className=" pb-md-0 pb-4">
          <section className="box box3">
            <section className="feature-icon brand-icon-gradient-color p-3 px-4 rounded-3 shadow brand-icon-container m-auto d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-muted shadow-lg"
                size={"xl"}
              />
            </section>

            <h4 className="text-capitalize text-center fs-4 mt-5 mb-3 fw-semibold">
              Bulk download
            </h4>

            <p className="brand-small-text text-center py-2 app-feature-text">
              Effortlessly search and download multiple images in bulk with
              Fotograph, streamlining your workflow and empowering you to access
              a vast collection of visuals at your fingertips.
            </p>
            <section className="spacer my-4"></section>
          </section>
        </Col>
        <section className="spacer my-3"></section>
        <Col md={4} xs={12} className="mb-4 mb-md-0 pb-md-0 pb-4">
          <section className="box box1">
            <section className="feature-icon brand-icon-gradient-color p-3 px-4 rounded-3 shadow brand-icon-container m-auto d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faMinimize}
                className="text-muted shadow-lg"
                size={"xl"}
              />
            </section>

            <h4 className="text-capitalize text-center fs-4 mt-5 mb-3 fw-semibold">
              Resize Images
            </h4>

            <p className="brand-small-text text-center py-2 app-feature-text">
              Effortlessly resize and crop images for your specific needs.
              Perfectly adjust dimensions and customize compositions with
              Forograph.
            </p>
            <section className="spacer my-4"></section>
          </section>
        </Col>
        <Col md={4} xs={12} className="mb-4 pb-md-0 pb-4">
          <section className="box box2">
            <section className="feature-icon brand-icon-gradient-color p-3 px-4 rounded-3 shadow brand-icon-container m-auto d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faCompress}
                className="text-muted shadow-lg"
                size={"xl"}
              />
            </section>

            <h4 className="text-capitalize text-center fs-4 mt-5 mb-3 fw-semibold">
              Compress Images
            </h4>

            <p className="brand-small-text text-center py-2 app-feature-text">
              Easily compress images without compromising quality. Reduce file
              sizes for faster loading websites and efficient storage.
            </p>
            <section className="spacer my-4"></section>
          </section>
        </Col>
        <Col md={4} xs={12} className="pb-md-0 pb-4">
          <section className="box box3">
            <section className="feature-icon brand-icon-gradient-color p-3 px-4 rounded-3 shadow brand-icon-container m-auto d-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faBoltLightning}
                className="text-muted shadow-lg"
                size={"xl"}
              />
            </section>

            <h4 className="text-capitalize text-center fs-4 mt-5 mb-3 fw-semibold">
              AI Image-Generation
            </h4>

            <p className="brand-small-text text-center py-2 app-feature-text">
              Unleash your creativity with AI-powered image generation. Create
              stunning and unique visuals with the power of artificial
              intelligence at your fingertips
            </p>
            <section className="spacer my-4"></section>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default AppFeatures;
