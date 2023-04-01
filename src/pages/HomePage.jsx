import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Cta from "../components/Cta";
import Judges from "../components/Judges";
import Accordion from "../components/Accordion";

function HomePage() {
  return (
    <div>
      <Hero />
      <Carousel />
      <Cta />
      <Accordion />
      {/* <Judges /> */}
    </div>
  );
}

export default HomePage;
