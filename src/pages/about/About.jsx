import React from "react";
import Hero from "../../components/hero/Hero";
import image from "../../assets/night.jpg";
import AboutUs from "./AboutUs";
const About = () => {
  return (
    <div>
      <Hero cName="hero-about" heroImg={image} title="About" btnClass="hide" />
      <AboutUs
        heading="Our History"
        text="Tour is owned and managed by Gamel Ltd, a leading brand in web designing services and e-commerce solutions. Gamel Ltd is counted for its expertise in web solutions and its top rankin business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Tour is alive paradigm of our work excellence"
      />
      <AboutUs
        heading="Our Mission"
        text="Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients that too with ultimate transparency and cost-effectiveness"
      />
      <AboutUs
        heading="Our Vision"
        text="To sow the seeds of par-excellence service with customer centric approach and reap the trust of worldwide clients"
      />
    </div>
  );
};

export default About;
