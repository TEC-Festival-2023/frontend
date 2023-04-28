import React from "react";
import HeroCompe from "../components/HeroCompe";
import EventBox from "../components/EventBox";
import Benefits from "../components/Benefits";
import EventSwiper, { Card } from "../components/EventSwiper";
import CTA from "../components/CTA";

const compeCollection = [
  {
    event: "Business Plan Competition",
    month: "May",
    year: "2023",
    date: "1",
    price: "",
    desc: "Business Plan Competition merupakan sebuah kompetisi perancangan bisnis yang memanfaatkan kemampuan peserta dalam mengeksplorasi dan mengimplementasikan ide-ide inovatif dan/atau solutif bernilai jual.",
    link: "/competitions/business-plan",
  },
  {
    event: "Business Case Competition",
    month: "May",
    year: "2023",
    date: "1",
    price: "",
    desc: "Business Case Competition merupakan sebuah kompetisi berskala nasional yang membutuhkan daya analisis guna memecahkan masalah aktual di dalam perusahaan yang sulit dipecahkan dengan hanya berpikir satu kali.",
    link: "/competitions/business-case",
  },
];
function CompetitionsPage() {
  return (
    <div>
      <HeroCompe />
      <EventBox list={compeCollection} />
      {/* <div className="max-w-7xl mx-auto">
        <div className="text-[#FFE99E] flex justify-center text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mt-4 mb-7 text-shadow-3px">
          FEATURED
        </div>
        <div className="flex mt-10 w-[100%] gap-12 justify-center">
          {compeCollection &&
            compeCollection.map((compe) => <Card event={compe} />)}
        </div>
      </div> */}
      <Benefits />
      {/* <CTA compe={true} event={false} /> */}
      <div className="my-48">
        <div className="text-[#E26767] flex justify-center text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mt-4 text-shadow-3px md:text-shadow-4px ">
          COMING SOON!
        </div>
      </div>
    </div>
  );
}

export default CompetitionsPage;
