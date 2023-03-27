import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import aboutImage from "../assests/2.jpg";
import Footer from "../component/Footer";
import ContactForm from "../component/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImage}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
