import React from "react";
import Miniquiz from "../components/Miniquiz";
import HeroTECFestTalks from "../components/HeroTecFestTalks";
import CTA from "../components/CTA";

function TECFestTalks() {
  return (
    <div>
      <HeroTECFestTalks />

      <Miniquiz />
      <CTA compe={false} event={true} />
    </div>
  );
}

export default TECFestTalks;
