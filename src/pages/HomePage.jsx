import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Cta from "../components/Cta";
import Judges from "../components/Judges";
import FAQ from "../components/FAQ";
import Roadmap from "../components/Roadmap";

function HomePage() {
  return (
    <div className="mb-20">
      <Hero />
      <Carousel />
      <Roadmap />
      <Cta />
      <FAQ />
      {/* <Judges /> */}
    </div>
  );
}

export default HomePage;
