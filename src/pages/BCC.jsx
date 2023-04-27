import React from "react";
import HeroBCC from "../components/HeroBCC";
import Timeline from "../components/Timeline";
import Hero from "../components/Hero";

function BCC() {
  return (
    <div>
      <Hero>
        <div className="font-poppins h-screen flex flex-col items-center justify-center -translate-y-[80px]">
          <div className="text-[#FFE99E] flex justify-center text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mt-4 text-shadow-3px md:text-shadow-5px">
            BUSINESS CASE COMPETITION
          </div>
          <h3 className="mb-3 text-sm md:text-base font-bold">
            Presented by TECFest 2023
          </h3>
          <h2 className=" p-6 text-3xl">In Collaboration With:</h2>
          <div className="w-20 h-20 border-8 border-black mx-auto"></div>
          <p className="p-10 text-lg text-center max-w-[1140px]">
            {" "}
            Business Case Competition (BCC) adalah kompetisi yang membutuhkan
            daya analisis guna memecahkan masalah aktual yang terjadi dalam
            perusahaan. Barangkali, permasalahan tersebut sulit dipecahkan
            dengan hanya berpikir satu kali. Maka karena itu, BCC dihadirkan
            dengan mengangkat kasus hasil kerja sama dengan perusahaan terkait.
            Peserta akan berkompetisi dalam solusi yang dapat ditawarkan
            mengenai cara terefektif dan terinovatif agar dapat terselesaikan.
            Mengangkat tema Environmental, Social, and Governance (ESG) yang
            sedang marak belakangan ini, diharapkan kehadiran BCC mampu
            memperkenalkan isu tersebut menuju era Society 5.0 ke pelajar dan
            mahasiswa, melatih peserta dalam melakukan analisis dan menciptakan
            inovasi dari permasalahan, mendapatkan solusi inovatif, serta
            membangun jiwa entrepreneur di Indonesia.
          </p>
        </div>
      </Hero>
      <Timeline />
    </div>
  );
}

export default BCC;
