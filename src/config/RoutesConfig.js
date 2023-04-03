import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CompetitionsPage from "../pages/CompetitionsPage";
import EventsPage from "../pages/EventsPage";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/competitions" element={<CompetitionsPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
};

export default RoutesConfig;
