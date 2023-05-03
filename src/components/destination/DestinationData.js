import "./DestinationStyles.css";
import React from "react";

const DestinationData = ({ heading, text, img1, img2, cName }) => {
  return (
    <div className={cName}>
      <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={img1} alt="mountain" />
        <img src={img2} alt="mountain" />
      </div>
    </div>
  );
};

export default DestinationData;
