import React from "react";
import Miniquiz from "../components/Miniquiz";
import HeroTECFestTalks from "../components/HeroTecFestTalks";
import CtaEvent from "../components/CtaEvent";
import FooterTECFestTalks from "../components/FooterTECFestTalks";

function TECFestTalks() {
  return (
    <div>
      <HeroTECFestTalks />
      <Miniquiz />
      <CtaEvent />
      <FooterTECFestTalks />
    </div>
  );
}

export default TECFestTalks;
