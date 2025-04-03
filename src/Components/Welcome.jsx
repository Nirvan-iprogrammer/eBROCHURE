import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../assets/imageBackground.png";
import overlaySec from "../assets/overlay.png";
import frame from "../assets/Frame 811779.png";
import logo from "../assets/image 15.png";

const welcomeStyles = {
  container: {
    display: "flex",
    height: "100vh",
    backgroundColor: "white",
    padding: 0,
    width: "100%",
  },
  leftSection: {
    width: "60%",
    position: "relative",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  },
  contentContainer: {
    position: "relative",
    padding: "0 5rem",
    maxWidth: "672px",
    margin: "246px 0",
    zIndex: 1,
  },
  title: {
    fontSize: "72px",
    fontWeight: 500,
    letterSpacing: "-1.44px",
    lineHeight: "90px",
    textAlign: "justify",
    color: "white",
  },
  description: {
    marginTop: "1rem",
    fontSize: "16px",
    lineHeight: "30px",
    fontFamily: "Arial",
    textAlign: "justify",
    maxWidth: "600px",
    color: "gray",
  },
  rightSection: {
    width: "40%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem 4rem",
  },
  topBox: {
    marginBottom: "1rem",
    width: "400px",
  },
  dnaBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    padding: "0.5rem",
    gap: "1rem",
    height: "58px",
  },
  dnaLogo: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#ffc107",
  },
  button: {
    backgroundColor: "#1c1c1c",
    border: "1px solid #7f56d9",
    borderRadius: "8px",
    width: "400px",
    height: "44px",
    padding: 0,
    transition: "all 0.3s ease",
    color: "white",
  },
  buttonText: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
  },
};

const Welcome = () => {
  return (
    <div style={welcomeStyles.container}>
      {/* Left Section */}
      <div style={{ ...welcomeStyles.leftSection, backgroundImage: `url(${background})` }}>
        <div style={{ ...welcomeStyles.overlay, backgroundImage: `url(${overlaySec})` }} />

        <div style={welcomeStyles.contentContainer}>
          <h1 style={welcomeStyles.title}>Utec - Data and Analytics</h1>
          <p style={welcomeStyles.description}>
            The Utec DnA platform is a comprehensive tool designed to monitor and assess the performance of Utec systems.
            It provides in-depth insights into various performance metrics, helping users track operational efficiency,
            identify potential issues, and ensure that Utec technologies are functioning at their optimal capacity.
            The platform allows for real-time performance analysis, detailed reporting, and continuous monitoring.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div style={welcomeStyles.rightSection}>
        <div style={welcomeStyles.topBox}>
          <div className="d-flex align-items-center justify-content-between">
            <div style={welcomeStyles.dnaBox}>
              <img src={frame} alt="" style={{ height: "45px", width: "46px" }} />
              <span style={welcomeStyles.dnaLogo}>DnA</span>
            </div>
            <img src={logo} alt="Logo" style={{ width: "102.46px", height: "58px" }} />
          </div>
        </div>

        <button style={welcomeStyles.button}>
          <div className="d-flex align-items-center justify-content-center gap-2 w-100 h-100">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z-0oEQz4-w8v6R_z/logos-mi.png"
              alt="Microsoft"
              style={{ width: "24px", height: "23px" }}
            />
            <span style={welcomeStyles.buttonText}>Single Sign-On (SSO)</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Welcome;


