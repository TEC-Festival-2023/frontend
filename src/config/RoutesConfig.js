import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CompetitionsPage from "../pages/CompetitionsPage";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/competitions" element={<CompetitionsPage />} />
    </Routes>
  );
};

export default RoutesConfig;
