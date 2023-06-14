import React from "react";
import AppHeader from "../components/AppHeader";
import AppHeroSection1 from "../components/AppHeroSection1";
import AppHeroSection2 from "../components/AppHeroSection2";
import AppHeroSection3 from "../components/AppHeroSection3";
import AppFaq from "../components/AppFaq";

const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid">
        <AppHeader></AppHeader>
        <AppHeroSection1></AppHeroSection1>
        <section className="spacer my-3 py-2"></section>
        <AppHeroSection2></AppHeroSection2>
        <AppHeroSection3></AppHeroSection3>
        <section className="spacer my-md-4 my-3 py-2"></section>
        <br />
        <AppFaq></AppFaq>

        <section className="spacer my-3 py-2"></section>
      </section>
    </React.Fragment>
  );
};

export default Home;
