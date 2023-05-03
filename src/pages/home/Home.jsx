import React from "react";
import Hero from "../../components/hero/Hero";
import hero from "../../assets/12.jpg";
import Destination from "../../components/destination/Destination";
import Trip from "../../components/trip/Trip";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/Spinner";
const Home = () => {
  const { isLoading } = useSelector((state) => state.auth);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={hero}
        title="Your Journey Your Story"
        text="Choose your Favorite Destination"
        buttonText="Travel Plan"
        url="/account"
        btnClass="show"
      />
      <Destination />
      <Trip />
    </div>
  );
};

export default Home;
