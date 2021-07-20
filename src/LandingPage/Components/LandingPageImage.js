import React from "react";
import Link from "../Image/Image.png";
import './LandingPageImage.css'

const LandingPageImage = () => {
  return (
    <div className="landingpage-image">
      <img className="landingpage-image-image" src={Link} />
    </div>
  );
};

export default LandingPageImage;
