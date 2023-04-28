import { useState } from "react";
import Event from "./EventSwiper";

function Carousel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* >= md */}
      <div className="hidden md:flex justify-center items-center bg-wavePhone bg-[length:100%_100%] sm:bg-vector11 sm:overflow-hidden h-[650px]">
        <div className="grid md:grid-cols-2 sm:justify-items-center mx-[5%] gap-10 font-poppins max-w-[1250px] h-full">
          {/* Kiri */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center sm:mt-20 sm:mb-0 mb-20 overflow-y-scroll h-[100%] sm:overflow-hidden basis-[100%] shrink-[1] grow-[1]"
          >
            <h1 className="font-bold text-lg md:text-xl xl:text-2xl ">
              TEC'S Annual Festival
            </h1>
            <h4 className="font-semibold text-md lg:text-lg xl:text-xl">
              Presented by TEC ITB
            </h4>
            <hr className="max-w-[100%] h-[2px] bg-black border-0 dark:bg-black" />
            <p className="text-xs lg:text-md xl:text-lg mt-2">
              TEC Festival 2023 merupakan{" "}
              <span className="italic">entrepreneurial festival</span> tahunan
              yang diadakan oleh Techno Entrepreneur Club Institut Teknologi
              Bandung. TEC Festival (TECFest) dimulai pada tahun 2019 dan kini
              menginjakkan kaki pada TECFest yang ke-5. Mengusung visi
              "Catalyzing Indonesia's Future Entrepreneurs Through Technology
              and Youth-Led Innovations, TECFest 2023 berkomitmen mengembangkan
              calon wirausahawan sukses melalui 4-national scale event dan 2
              national-scale competition
            </p>
            <div className="flex flex-col justify-center group">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-[#FFE99E] rounded-xl text-md px-2 py-1 max-w-[150px] text-xs md:text-sm lg:text-base self-center font-poppins font-semibold mt-4 hover:bg-[#F8D660] hover:scale-110 transition-all duration-300 shadow-button group"
              >
                Learn More !
              </button>
              <img
                src={"/assets/arrow3.png"}
                alt="arrow"
                className={`min-[640px]:block mt-[2%] w-[70%] self-center max-w-[200px] transition-all duration-300 ${
                  isHovered
                    ? "group-hover:animate-none scale-110 "
                    : "animate-scale"
                } `}
              />
            </div>
          </div>
          {/* Kanan */}
          <div
            data-aos="fade-left"
            className="md:mt-24 flex flex-col xs:w-3/4 sm:w-4/5 basis-[100%] shrink-[1] grow-[1]"
          >
            <div className="mb-4 font-poppins font-bold text-center text-xl md:text-2xl lg:text-3xl shrink-[1]">
              Current Event
            </div>
            <a
              href="/events/tecfest-talks"
              className="flex justify-center self-center hover:scale-110 transition ease-in-out duration-500"
            >
              <img
                src={"/assets/posterTFT1.jpg"}
                alt="current event"
                className="rounded-2xl w-[80%] md:w-[90%] max-w-[20rem]"
              />
            </a>
          </div>
        </div>
      </div>
      {/* < md */}
      <div className="md:hidden flex justify-center items-center sm:overflow-hidden">
        <div className="grid sm:justify-items-center  gap-10 font-poppins max-w-[1250px] h-full">
          {/* Kiri */}
          <div
            // data-aos="fade-right"
            className="flex flex-col justify-center bg-wavePhone bg-[length:100%_100%] h-[600px] px-[5%] pb-20 sm:mb-0 overflow-y-scroll sm:overflow-hidden basis-[100%]"
          >
            <h1 className="font-bold text-lg xl:text-2xl ">
              TEC'S Annual Festival
            </h1>
            <h4 className="font-semibold text-md lg:text-lg xl:text-xl">
              Presented by TEC ITB
            </h4>
            <hr className="max-w-[100%] h-[2px] bg-black border-0 dark:bg-black" />
            <p className="text-xs lg:text-md xl:text-lg mt-2">
              TEC Festival 2023 merupakan{" "}
              <span className="italic">entrepreneurial festival</span> tahunan
              yang diadakan oleh Techno Entrepreneur Club Institut Teknologi
              Bandung. TEC Festival (TECFest) dimulai pada tahun 2019 dan kini
              menginjakkan kaki pada TECFest yang ke-5. Mengusung visi
              "Catalyzing Indonesia's Future Entrepreneurs Through Technology
              and Youth-Led Innovations, TECFest 2023 berkomitmen mengembangkan
              calon wirausahawan sukses melalui 4-national scale event dan 2
              national-scale competition
            </p>
            <div className="flex flex-col justify-center group">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-[#FFE99E] rounded-xl text-md px-2 py-1 max-w-[150px] text-xs lg:text-base self-center font-poppins font-semibold mt-4 hover:bg-[#F8D660] hover:scale-110 transition-all duration-300 shadow-button group"
              >
                Learn More !
              </button>
              <img
                src={"/assets/arrow3.png"}
                alt="arrow"
                className={`min-[640px]:block mt-[2%] w-[70%] self-center max-w-[200px] transition-all duration-300 ${
                  isHovered
                    ? "group-hover:animate-none scale-110 "
                    : "animate-scale"
                } `}
              />
            </div>
          </div>
          {/* Kanan */}
          <div
            data-aos="fade-left"
            className="flex flex-col xs:w-3/4 sm:w-4/5 basis-[100%] shrink-[1] grow-[1]"
          >
            <div className="mb-4 font-poppins font-bold text-center text-xl lg:text-3xl shrink-[1]">
              Current Event
            </div>
            <a
              href="/events/tecfest-talks"
              className="flex justify-center self-center hover:scale-110 transition ease-in-out duration-500"
            >
              <img
                src={"/assets/posterTFT1.jpg"}
                alt="current event"
                className="rounded-2xl w-[80%] max-w-[20rem]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
