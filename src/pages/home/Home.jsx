import React from "react";
import Hero from "../../components/hero/Hero";
import hero from "../../assets/12.jpg";
import Destination from "../../components/destination/Destination";
import Trip from "../../components/trip/Trip";
const Home = () => {
  return (
    <div>
      <Hero
        cName="hero"
        heroImg={hero}
        title="Your Journey Your Story"
        text="Choose your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
    </div>
  );
};

export default Home;
