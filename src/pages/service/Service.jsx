import React from "react";
import Hero from "../../components/hero/Hero";
import image from "../../assets/night.jpg";
import Trip from "../../components/trip/Trip";
const Service = () => {
  return (
    <>
      <Hero
        cName="hero-about"
        heroImg={image}
        title="Service"
        btnClass="hide"
      />
      <Trip />
    </>
  );
};

export default Service;
