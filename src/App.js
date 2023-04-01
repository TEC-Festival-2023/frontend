import "./App.css";
import React from "react";
import Herocomp from "./components/Herocomp";
import Navbar from "./components/Navbar";
import RoutesConfig from "./config/RoutesConfig";
import Background from "./components/Background";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Background /> */}
      <RoutesConfig />
    </div>
  );
}

export default App;
