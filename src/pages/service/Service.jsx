import React from "react";
import Hero from "../../components/hero/Hero";
import image from "../../assets/night.jpg";
import Trip from "../../components/trip/Trip";
import Navbar from "../../components/navbar/Navbar";
const Service = () => {
  return (
    <>
      <Navbar />
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
