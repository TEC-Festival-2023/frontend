import Hero from "./Hero";

function HeroTecFestTalks() {
  return (
    <Hero>
      <div className="font-poppins h-screen flex flex-col items-center justify-center">
        <div className="text-[#FFE99E] flex justify-center text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mt-4 text-shadow-3px md:text-shadow-5px">
          TECFest Talks
        </div>
        <h3 className="mb-3 text-sm md:text-base font-bold">
          Presented by TECFest 2023 ITB
        </h3>
        <h2 className="my-6 text-xl md:text-3xl">In Collaboration With:</h2>
        <div className="flex justify-center w-40 md:w-48 lg:w-96 mb-4 md:mb-6">
          <img src="/assets/images/pembicara.png "></img>
        </div>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
          Rizky Arief Dwi Prakoso
        </h2>
        <ol className="text-xs md:text-base lg:text-xl mt-2 list-disc">
          <li>CEO & Founder HMNS Perfumery</li>
          <li>CEO & Co-founder NAH Project</li>
          <li>Founding Partner in EfektifKreatif</li>
        </ol>
      </div>
    </Hero>
  );
}

export default HeroTecFestTalks;
