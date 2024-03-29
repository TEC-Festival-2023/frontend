import React from "react";
import Hero from "./Hero";

const HeroCompe = () => {
  return (
    <Hero>
      {/* Atas */}
      <h1 className="text-5xl discovery">Discovery in</h1>
      <div className="flex items-center justify-center -mt-6">
        <h1 className="text-5xl font-bold z-[1] lg:text-7xl">TECFEST</h1>
        <div className="relative pt-14 -ml-10 w-max text-center">
          <h2 className="italic font-semibold -rotate-[20deg] absolute z-[1] text-[#E26767] lg:text-xl md:text-lg text-md left-0 right-0 ml-2 lg:mt-9 sm:mt-7 mt-8 ">
            2023
          </h2>
          <img src="/assets/Star 1.png" className="lg:w-24 w-20" alt="" />
        </div>
      </div>
      <div className="text-white items-center text-lg py-4 mx-auto lg:text-2xl">
        <div className=" mx-auto text-center bg-[#353A40] w-max -rotate-[4.63deg]">
          <span className="p-1 md:px-3 text-[11px] sm:text-sm md:text-lg lg:text-2xl">
            Catalyzing Indonesia's Future Entrepreneurs
          </span>
        </div>
        <div className=" mx-auto text-center bg-[#353A40] w-max -rotate-[2.77deg]">
          <span className=" p-1 md:px-3 text-[11px] sm:text-sm md:text-lg lg:text-2xl">
            Through Technology and Youth-Led Innovations
          </span>
        </div>
      </div>
      <div className="mx-auto text-center bg-[#353A40] py-2 px-4 md:px-6 md:py-4 rounded-xl ">
        <h1 className="md:text-4xl font-bold text-xl text-transparent bg-gradient-to-b from-[#FFE99E] to-white bg-clip-text">
          COMPS Ed.
        </h1>
      </div>
      {/* Bawah */}
      <div className="mt-20 hover:scale-110 duration-75 cursor-default">
        <div className="text-[#FFE99E] flex justify-center text-3xl md:text-5xl lg:text-6xl font-poppins font-bold mt-4 mb-7 text-shadow-3px lg:text-shadow-5px">
          PRIZE POOL
        </div>
        <div className="text-[#7EA8FF] flex justify-center text-3xl md:text-5xl lg:text-6xl font-poppins font-bold mt-4 mb-7 text-shadow-3px ">
          Rp24.000.000,-
        </div>
      </div>
    </Hero>
  );
};

export default HeroCompe;
