import React from "react";
import Herocomp from "../components/Herocomp";
import EventBox from "../components/EventBox";
import Benefits from "../components/Benefits";
import Herocomp2 from "../components/Herocomp2";

function CompetitionsPage() {
  return (
    <div>
      <Herocomp />
      <Herocomp2 />
      <EventBox />
      <Benefits />
    </div>
  );
}

export default CompetitionsPage;
