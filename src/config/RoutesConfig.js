import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CompetitionsPage from "../pages/CompetitionsPage";
import EventsPage from "../pages/EventsPage";
import TECFestTalks from "../pages/TECFestTalks";
import BCC from "../pages/BCC";
import BPC from "../pages/BPC";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/competitions" element={<CompetitionsPage />} />
      <Route path="/competitions/bcc" element={<BCC />} />
      <Route path="/competitions/bpc" element={<BPC />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/tecfest-talks" element={<TECFestTalks />} />
    </Routes>
  );
};

export default RoutesConfig;
