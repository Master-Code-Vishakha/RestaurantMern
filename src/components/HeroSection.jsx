
import React from "react";
import "./HeroSection.css";
import { Navbar } from "./Navbar";

export const HeroSection = () => {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Home page content below navbar */}
      <section className="heroSection" id="heroSection">
        <div className="container">
          <div className="heroContent">

            {/* Left image */}
            <div className="heroImage leftImage">
              <img src="/hero1.webp" alt="Delicious food" />

              <div className="imageText leftText">
                <h1>Delicious</h1>
                <h1>Food</h1>
              </div>
            </div>

            {/* Center text */}
            <div className="centerText">
              <h1>Food</h1>
              <h1 className="orangeText">Dishes</h1>
              <p>Fresh, tasty and made with love.</p>
            </div>

            {/* Right image */}
            <div className="heroImage rightImage">
              <img src="/hero2.webp" alt="Tasty dishes" />

              <div className="imageText rightText">
                <h1>Tasty</h1>
                <h1>Dishes</h1>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
