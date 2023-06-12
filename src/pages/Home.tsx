import React from "react";
import AppHeader from "../components/AppHeader";
interface HomeProps {}

const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid">
        <AppHeader></AppHeader>
      </section>
    </React.Fragment>
  );
};

export default Home;
