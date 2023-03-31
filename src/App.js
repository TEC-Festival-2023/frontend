import React from "react";
import Hero from "./component/Hero";
import Herocomp from "./component/Herocomp";
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Herocomp></Herocomp>
    </div>
  );
}

export default App;
