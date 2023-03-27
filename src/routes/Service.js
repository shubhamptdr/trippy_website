import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import aboutImage from "../assests/2.jpg";
import Footer from "../component/Footer";
import Trip from "../component/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={aboutImage}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
