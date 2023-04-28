import "./App.css";
import React, { useEffect } from "react";
import Herocomp from "./components/HeroCompe";
import Navbar from "./components/Navbar";
import RoutesConfig from "./config/RoutesConfig";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ delay: 100, duration: 1000 });
  }, []);
  return (
    <div className="">
      <Navbar />
      <main className="mb-20 ">
        <RoutesConfig />
      </main>
      <Footer />
    </div>
  );
}

export default App;
