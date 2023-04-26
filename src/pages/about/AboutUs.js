import React from "react";
import "./AboutUsStyles.css";
const AboutUs = ({ heading, text }) => {
  return (
    <div className="about-container">
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
};

export default AboutUs;
