import React from "react";
import "./HeroStyles.css";
import { Link } from "react-router-dom";
const Hero = ({ cName, heroImg, title, text, url, btnClass, buttonText }) => {
  return (
    <div className={cName}>
      <img alt="HeroImg" src={heroImg} />
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={url} className={btnClass}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
