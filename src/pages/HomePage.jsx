import React from "react";
import Carousel from "../components/Carousel";
import CtaCompe from "../components/CtaCompe";
import Judges from "../components/Judges";
import FAQ from "../components/FAQ";
import Roadmap from "../components/Roadmap";
import CtaEvent from "../components/CtaEvent";
import HeroHome from "../components/HeroHome";

function HomePage() {
  return (
    <div className="">
      <HeroHome />
      <Carousel />
      <Roadmap />
      <div className="flex w-full gap-5 min-[800px]:gap-40 justify-center">
        <CtaEvent />
        <CtaCompe />
      </div>
      <FAQ />
      {/* <Judges /> */}
    </div>
  );
}

export default HomePage;
