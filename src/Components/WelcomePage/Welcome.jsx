import React from "react";
import background from "../../assets/Background overlay.png";
import overlay from "../../assets/overlay.png";
import frame from "../../assets/Frame 811779.png";
import logo from "../../assets/image 15.png";
import "./Welcome.css";
import mainImage from "../../assets/Section.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      {/* Left Section */}
      <div
        className="welcome-left"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className="welcome-overlay"
          style={{
            backgroundImage: `url(${mainImage}), url(${overlay})`,
          }}
        />
      </div>

      {/* Right Section */}
      <div className="welcome-right">
        <div className="welcome-top-box">
          <div className="d-flex align-items-center justify-content-between">
            <div className="welcome-dna-box">
              <img src={frame} alt="" className="welcome-dna-img" />
              <span className="welcome-dna-logo">DnA</span>
            </div>
            <img src={logo} alt="Logo" className="welcome-logo-img" />
          </div>
        </div>

        <button className="welcome-button">
          <div className="d-flex align-items-center justify-content-center gap-2 w-100 h-100">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z-0oEQz4-w8v6R_z/logos-mi.png"
              alt="Microsoft"
              className="welcome-ms-logo"
            />
            <span className="welcome-button-text">Single Sign-On (SSO)</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Welcome;




