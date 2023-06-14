import React from "react";
import AppHeader from "../components/AppHeader";
import AppHeroSection1 from "../components/AppHeroSection1";
import AppHeroSection2 from "../components/AppHeroSection2";
import AppHeroSection3 from "../components/AppHeroSection3";
import AppFaq from "../components/AppFaq";
import AppFooter from "../components/AppFooter";
import { Container } from "react-bootstrap";
const Home: React.FC = (): JSX.Element => {
  return (
    <Container fluid>
      <AppHeader></AppHeader>
      <AppHeroSection1></AppHeroSection1>
      <section className="spacer my-3 py-2"></section>
      <AppHeroSection2></AppHeroSection2>
      <AppHeroSection3></AppHeroSection3>
      <section className="spacer my-md-4 my-3 py-2"></section>
      <br />
      <AppFaq></AppFaq>

      <section className="spacer my-3 py-2"></section>
      <AppFooter></AppFooter>
    </Container>
  );
};

export default Home;
