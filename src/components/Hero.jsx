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
      className="font-poppins h-screen -translate-y-[80px]"
    >
      <div
        data-aos="zoom-in-up"
        className="flex flex-col items-center justify-center -translate-y-[80px] h-full"
      >
        {props.children}
      </div>
    </div>
  );
}

export default Hero;
