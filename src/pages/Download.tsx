import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Container } from "react-bootstrap";
import WindowsLogo from "./../assets/windows-logo.png";
import AppleLogo from "./../assets/apple-logo.png";
import LinuxLogo from "./../assets/linux-logo.png";
import Swal from "sweetalert2";

const Download: React.FC = (): JSX.Element => {
  const handleWindowsDownload = () => {
    window.location.href =
      "https://github.com/Adedoyin-Emmanuel/FotoGraph/releases/download/v0.1.0-alpha/Fotograph.Setup.1.0.0.exe";
  };

  const handleLinuxDownload = () => {
    window.location.href =
      "https://github.com/Adedoyin-Emmanuel/FotoGraph/releases/download/v0.1.0-alpha/Fotograph_1.0.0_amd64.deb";
  };

  const handleMacDownload = () => {
    Swal.fire({
      toast: true,
      position: "top",
      showConfirmButton: false,
      text: "Not available for MacOS.",
      icon: "info",
      timer: 3000,
    });
  };
  return (
    <Container fluid>
      <AppHeader />

      <h1 className=" display-5 text-center text-capitalize brand-heading-text fw-bold my-3 m-0 w-100 animate__animated animate__bounceIn">
        Download fotograph desktop application
      </h1>

      <Container className="os-categories d-flex flex-column flex-md-row  align-items-center justify-content-around m-auto py-4">
        <section
          className="download-for-windows brand-dark-color rounded-3 shadow-sm  d-flex align-items-center justify-content-center flex-column mx-md-5 os-logo-container my-5"
          data-aos="zoom-in"
          data-aos-duration="500"
          onClick={handleWindowsDownload}
        >
          <img
            src={WindowsLogo}
            alt="windows-logo"
            className="img-fluid"
            width={"150"}
            height={"150"}
          />
        </section>

        <section
          className="download-for-mac brand-dark-color rounded-3 shadow-sm  d-flex align-items-center justify-content-center flex-column mx-md-5 os-logo-container my-5"
          data-aos="fade-up"
          data-aos-duration="500"
          onClick={handleMacDownload}
        >
          <img
            src={AppleLogo}
            alt="windows-logo"
            className="img-fluid"
            width={"220"}
            height={"220"}
          />
        </section>

        <section
          className="download-for-linux brand-dark-color rounded-3 shadow-sm  d-flex align-items-center justify-content-center flex-column mx-md-5 os-logo-container my-5"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          onClick={handleLinuxDownload}
        >
          <img
            src={LinuxLogo}
            alt="windows-logo"
            className="img-fluid"
            width={"120"}
            height={"120"}
          />
        </section>
      </Container>
      <br />
      <br />
      <section className="spacer my-md-5 py-md-5"></section>
      <AppFooter />
    </Container>
  );
};

export default Download;
