import "./App.css";
import React from "react";
import Herocomp from "./components/HeroCompe";
import Navbar from "./components/Navbar";
import RoutesConfig from "./config/RoutesConfig";
import Background from "./components/Background";

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <Background /> */}
      <main className="mb-20">
        <RoutesConfig />
      </main>
    </div>
  );
}

export default App;
