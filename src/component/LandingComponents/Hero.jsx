import React from "react";
import HeroImage from "../../assets/hero.png";
import "./LandingComponent.scss";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-container flex">
        <div className="hero-left flexCol ">
          <div className="hero-left__header">
            <div className="primaryHeader">Your Pantry,</div>
            <div className="primaryHeader">Your Feast,</div>
          </div>
          <div className="hero-left-subtxt secondaryText">
            Enter your ingredients and discover recipes tailored just for you.
          </div>
          <div className="hero-right-btn-container flex">
            <div className="btn">Get Started</div>
            <div className="btn">Explore Recipes</div>
          </div>
        </div>
        <div className="hero-right flex">
          <div className="hero-img-container">
            <img src={HeroImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
