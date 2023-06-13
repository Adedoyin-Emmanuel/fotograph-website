import React from "react";
import DemoImg from "./../assets/img-1.png";

interface AppVideoSectionProps {
  className?: string;
}

const AppVideoSection = ({ className }: AppVideoSectionProps): JSX.Element => {
  return (
    <section className={`m-auto d-flex align-items-center justify-content-center my-4 shadow-lg p-2 brand-dark-color rounded-3 width-toggle-5`}>
      <img
        src={DemoImg}
        alt="fotograph-features"
        className="img-fluid rounded-3 shadow brand-dark-color"
      />
    </section>
  );
};

export default AppVideoSection;
