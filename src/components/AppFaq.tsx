import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
const AppFaq: React.FC = (): JSX.Element => {
  return (
    <Container
      className="width-toggle-5 my-4"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <h1 className="display-5 text-center text-capitalize brand-heading-text fw-bold my-3 m-0 w-100">
        FAQ
      </h1>

      <Accordion
        defaultActiveKey={"0"}
        className={`app-accordion bg-transparent 3 my-4 shadow`}
      >
        <Accordion.Item eventKey={"0"} className="brand-primary-bg-color">
          <Accordion.Header className="bg-transparent brand-white-text text-capitailize p-2 brand-small-text-3">
            What is Fotograph?
          </Accordion.Header>

          <Accordion.Body className="brand-small-text">
            Fotograph is an open source cross platform desktop application for
            image manipulation
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        defaultActiveKey={"0"}
        className={`app-accordion bg-transparent 3 my-4 shadow`}
      >
        <Accordion.Item eventKey={"1"} className="brand-primary-bg-color">
          <Accordion.Header className="bg-transparent brand-white-text text-capitailize p-2 brand-small-text-3">
            What makes Fotograph different?
          </Accordion.Header>

          <Accordion.Body className="brand-small-text">
            Great question chief, now unlike most online image manipulation
            tools, they don't support batch processing, meaning you can't edit
            more than 2 or max 12 pictures at once, but with Fotograph, you can
            process multiple images at once, no limitations, coupled with the
            fact Fotograph works offline.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion
        defaultActiveKey={"0"}
        className={`app-accordion bg-transparent 3 my-4 shadow`}
      >
        <Accordion.Item eventKey={"2"} className="brand-primary-bg-color">
          <Accordion.Header className="bg-transparent brand-white-text text-capitailize p-2 brand-small-text-3">
            Why should I use Fotograph?
          </Accordion.Header>

          <Accordion.Body className="brand-small-text">
            Nice question, you should use Fotograph because it is free, it comes
            with most of the tools you need for image manipulation, it has a
            simple yet powerful user interface and it is open source, meaning
            other developers can collaborate and improve this application.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        defaultActiveKey={"0"}
        className={`app-accordion bg-transparent 3 my-4 shadow`}
      >
        <Accordion.Item eventKey={"3"} className="brand-primary-bg-color">
          <Accordion.Header className="bg-transparent brand-white-text text-capitailize p-2 brand-small-text-3">
            Is Fotograph free?
          </Accordion.Header>

          <Accordion.Body className="brand-small-text">
            Yes it is absolutely free.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        defaultActiveKey={"0"}
        className={`app-accordion bg-transparent 3 my-4 shadow`}
      >
        <Accordion.Item eventKey={"4"} className="brand-primary-bg-color">
          <Accordion.Header className="bg-transparent brand-white-text text-capitailize p-2 brand-small-text-3">
            Is Fotograph open source?
          </Accordion.Header>

          <Accordion.Body className="brand-small-text">
            Yes fotograph is open source which means you can view the codes of
            this project, star the project, find bugs and contribute a fix. You
            can also suggest pickup development of new feature
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion
        defaultActiveKey={"0"}
        className={`app-accordion bg-transparent 3 my-4 shadow`}
      >
        <Accordion.Item eventKey={"5"} className="brand-primary-bg-color">
          <Accordion.Header className="bg-transparent brand-white-text text-capitailize p-2 brand-small-text-3">
            How can i contribute to the project?
          </Accordion.Header>

          <Accordion.Body className="brand-small-text">
            Simple, just star or sponsor the project on{" "}
            <Link
              className="brand-white-text"
              to="https://github.com/Adedoyin-Emmanuel/Fotogaph"
              target="_blank"
            >
              Github
            </Link>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AppFaq;
