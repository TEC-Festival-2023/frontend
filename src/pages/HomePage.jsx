import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Cta from "../components/Cta";
import Judges from "../components/Judges";
import Accordion from "../components/Accordion";
import Roadmap from "../components/Roadmap";

function HomePage() {
  return (
    <div className="">
      <Hero />
      <Carousel />
      <Roadmap />
      <Cta />
      <Accordion />
      {/* <Judges /> */}
    </div>
  );
}

export default HomePage;
