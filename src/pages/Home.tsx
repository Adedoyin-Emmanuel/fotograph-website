import React from "react";
import AppHeader from "../components/AppHeader";
import AppHeroSection1 from "../components/AppHeroSection1";


const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid">
        <AppHeader></AppHeader>
        <AppHeroSection1></AppHeroSection1>
      </section>
    </React.Fragment>
  );
};

export default Home;
