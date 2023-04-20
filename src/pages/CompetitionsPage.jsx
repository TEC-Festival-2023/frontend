import React from "react";
import HeroCompe from "../components/HeroCompe";
import EventBox from "../components/EventBox";
import Benefits from "../components/Benefits";
import EventSwiper from "../components/EventSwiper";
import CtaCompe from "../components/CtaCompe";

function CompetitionsPage() {
  return (
    <div>
      <HeroCompe />
      <EventSwiper />
      <Benefits />
      <CtaCompe />
    </div>
  );
}

export default CompetitionsPage;
