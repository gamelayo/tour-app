import React from "react";
import image from "../../assets/2.jpg";
import Hero from "../../components/hero/Hero";
import ContactForm from "../../components/contactForm/ContactForm";
import Navbar from "../../components/navbar/Navbar";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={image}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
    </>
  );
};

export default Contact;
