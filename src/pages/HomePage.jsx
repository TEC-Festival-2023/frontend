import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import CtaCompe from "../components/CtaCompe";
import Judges from "../components/Judges";
import FAQ from "../components/FAQ";
import Roadmap from "../components/Roadmap";
import CtaEvent from "../components/CtaEvent";

function HomePage() {
  return (
    <div className="">
      <Hero />
      <Carousel />
      <Roadmap />
      <div className="flex w-full gap-40 justify-center">
        <CtaEvent />
        <CtaCompe />
      </div>
      <FAQ />
      {/* <Judges /> */}
    </div>
  );
}

export default HomePage;
