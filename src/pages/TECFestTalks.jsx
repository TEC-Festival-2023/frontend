import React from "react";
import Miniquiz from "../components/Miniquiz";
import HeroTECFestTalks from "../components/HeroTecFestTalks";
import CtaTECFestTalks from "../components/CtaTECFestTalks";
import FooterTECFestTalks from "../components/FooterTECFestTalks";

function TECFestTalks() {
  return (
    <div>
      <HeroTECFestTalks />
      <Miniquiz />
      <CtaTECFestTalks />
      <FooterTECFestTalks />
    </div>
  );
}

export default TECFestTalks;
