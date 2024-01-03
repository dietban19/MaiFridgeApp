import React from "react";
import "./landing.scss";
import Hero from "../../component/LandingComponents/Hero";
import RecipeLanding from "../../component/LandingComponents/RecipeLanding";
import SearchLanding from "../../component/LandingComponents/SearchLanding";
import Footer from "../../component/LandingComponents/Footer";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <RecipeLanding />
      <SearchLanding />
      <Footer />
    </div>
  );
};

export default LandingPage;
