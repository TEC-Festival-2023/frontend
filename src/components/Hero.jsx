import React from "react";

function Hero(props) {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/bg-hero.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="font-poppins h-screen flex flex-col items-center justify-center -translate-y-[80px]"
    >
      {props.children}
    </div>
  );
}

export default Hero;
