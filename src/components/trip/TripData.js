import React from "react";
import "./TripStyles.css";
const TripData = ({ img, heading, text }) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={img} alt="tripsImage" />
      </div>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default TripData;
