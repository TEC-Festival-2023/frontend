import React from "react";
import HeroCompe from "../components/HeroCompe";
import EventBox from "../components/EventBox";
import Benefits from "../components/Benefits";
import EventSwiper, { Card } from "../components/EventSwiper";
import CtaCompe from "../components/CtaCompe";

const compeCollection = [
  {
    month: "May",
    year: "2023",
    date: "1",
    event: "Business Plan Competition",
    price: "",
    link: "/competitions/business-plan",
  },
  {
    month: "May",
    year: "2023",
    date: "1",
    event: "Business Case Competition",
    price: "",
    link: "/competitions/business-case",
  },
];
function CompetitionsPage() {
  return (
    <div>
      <HeroCompe />
      <div className="max-w-7xl mx-auto">
        <div className="text-[#FFE99E] flex justify-center text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mt-4 mb-7 text-shadow-3px">
          FEATURED
        </div>
        <div className="flex mt-10 w-[100%] gap-12 justify-center">
          {compeCollection &&
            compeCollection.map((compe) => <Card event={compe} />)}
        </div>
      </div>
      <Benefits />
      <CtaCompe />
    </div>
  );
}

export default CompetitionsPage;
