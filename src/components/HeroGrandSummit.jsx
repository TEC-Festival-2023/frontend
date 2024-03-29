function HeroGrandSummit() {
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
        <div className="font-poppins h-screen flex flex-col items-center justify-center min-[1028px]:mt-11 -translate-y-[80px]">
          <div className="text-[#FFE99E] flex justify-center text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mt-4 text-shadow-3px md:text-shadow-5px">
            Start-Up Expo
          </div>
          <h3 className="mb-3 text-sm md:text-base font-bold">
            Presented by TECFest 2023 ITB
          </h3>
          <h2 className="my-6 text-xl md:text-3xl">In Collaboration With:</h2>
          <div className="flex justify-center w-40 md:w-48 lg:w-96 mb-4 md:mb-6">
            <img src="/assets/images/blank_photo.png "></img>
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Lorem ipsum dolor sit amet.
          </h2>
          <ol className="text-xs md:text-base lg:text-xl mt-2 list-disc">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ol>
        </div>
      </div>
    );
  }
  
  export default HeroGrand;
  