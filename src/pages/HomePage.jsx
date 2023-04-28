import React from "react";
import Carousel from "../components/Carousel";
import Judges from "../components/Judges";
import FAQ from "../components/FAQ";
import Roadmap from "../components/Roadmap";
import HeroHome from "../components/HeroHome";
import CTA from "../components/CTA";

function HomePage() {
  return (
    <div className="">
      <HeroHome />
      <Carousel />
      <Roadmap />

      <CTA event={true} compe={true} />

      <FAQ />
      {/* <Judges /> */}
    </div>
  );
}

export default HomePage;
