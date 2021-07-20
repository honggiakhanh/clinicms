import React from "react";
import "./LandingPageDescription.css";
import PhoneIcon from "@material-ui/icons/Phone";

const LandingPageDescription = () => {
  return (
    <div className="landingpage-description">
      <h1 className="landingpage-title">
        Phòng khám bác sĩ <span>TRUNG</span>
      </h1>
      <h2 className="landingpage-subtitle">
        Chuyên trị các bệnh về tâm lý, nội tiết tố, mập, các vấn đề về cân nặng,
        các vấn đề lag não hay quên
      </h2>

      <h2 className="landingpage-phonenumber">0.96.62.376.133</h2>
      <div className="landingpage-button">
        <button>
          <span className="landingpage-button-logo">
            <PhoneIcon className="landingpage-button-logo-icon"/>
          </span>
          <span className="landingpage-button-text">Liên hệ ngay</span>
        </button>
      </div>
    </div>
  );
};

export default LandingPageDescription;
