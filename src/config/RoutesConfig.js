import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CompetitionsPage from "../pages/CompetitionsPage";
import EventsPage from "../pages/EventsPage";
import TECFestTalks from "../pages/TECFestTalks";
import YEL from "../pages/YEL";
import BCC from "../pages/BCC";
import BPC from "../pages/BPC";
import ComingSoon from "../pages/ComingSoon";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/competitions" element={<CompetitionsPage />} />
      {/* <Route path="/competitions/business-case" element={<BCC />} />
      <Route path="/competitions/business-plan" element={<BPC />} /> */}
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/tecfest-talks" element={<TECFestTalks />} />
      <Route path="/events/youth-entrepreneur-lab" element={<YEL />} />
      <Route path="*" element={<ComingSoon />} />
    </Routes>
  );
};

export default RoutesConfig;
