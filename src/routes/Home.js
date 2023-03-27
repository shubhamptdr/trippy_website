import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import heroImage from "../assests/12.jpg";
import Destination from "../component/Destination";
import Trip from "../component/Trip";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={heroImage}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        btnText="Travel Plan"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
