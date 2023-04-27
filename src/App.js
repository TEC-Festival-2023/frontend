import "./App.css";
import React from "react";
import Herocomp from "./components/HeroCompe";
import Navbar from "./components/Navbar";
import RoutesConfig from "./config/RoutesConfig";
import Background from "./components/Background";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      {/* <Background /> */}
      <main className="mb-20 ">
        <RoutesConfig />
      </main>
      <Footer />
    </div>
  );
}

export default App;
