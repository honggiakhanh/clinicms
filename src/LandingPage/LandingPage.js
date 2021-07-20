import React from "react";
import LandingPageDescription from "./Components/LandingPageDescription";
import LandingPageImage from "./Components/LandingPageImage";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="landingpage-about">
        <LandingPageDescription />
        <LandingPageImage />
      </div>
    </div>
  );
};

export default LandingPage;
