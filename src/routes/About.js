import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import aboutImage from "../assests/night.jpg";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImage}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
