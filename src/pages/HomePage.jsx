import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Carousel2 from "../components/Carousel2";
import Cta from "../components/Cta";
import Judges from "../components/Judges";
import Accordion from "../components/Accordion";
import Roadmap from "../components/Roadmap";
import Miniquiz from "../components/Miniquiz";
import HeroTECFestTalks from "../components/HeroTECFestTalks";
import CtaTECFestTalks from "../components/CtaTECFestTalks";
import FooterTECFestTalks from "../components/FooterTECFestTalks";

function HomePage() {
  return (
    <div className="">
      {/* <Hero />
      <Carousel />
      <Roadmap />
      <Cta />
      <Accordion />
      <Carousel2 />
      <Judges /> */}
      <HeroTECFestTalks />
      <Miniquiz />
      <CtaTECFestTalks />
      <FooterTECFestTalks />
    </div>
  );
}

export default HomePage;
