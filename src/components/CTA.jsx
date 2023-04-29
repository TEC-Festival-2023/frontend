import React from "react";

function CTAEvent() {
  return (
    <div
      data-aos="flip-up"
      className="lg:my-20 font-poppins font-bold flex justify-center"
    >
      <a
        href="https://bit.ly/TECForwardRegist"
        target="_blank"
        className="flex justify-center hover:scale-110 transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center bg-blobyellow bg-center bg-contain aspect-[3/4] w-2/3 md:w-1/2 lg:w-2/3 bg-no-repeat">
          {/* <div className="min-h-[500px] hover:scale-110 transition-all duration-300"> */}
          <img
            src={"/assets/register.png"}
            alt="maskGroup"
            className="shrink-[3] self-center w-[10%] min-[400px]:w-[20%]"
          />
          <div className="text-[50%] min-[375px]:text-[60%] min-[300px]:text-[65%] min-[400px]:text-xs sm:text-sm md:text-[0.9rem] shrink-[3] self-center">
            <br />
            Reserve your seat <br /> at the event here!
          </div>
        </div>
      </a>
    </div>
  );
}

function CTACompe() {
  return (
    <div
      data-aos="flip-down"
      className="lg:my-20 font-poppins font-bold flex justify-center"
    >
      <a
        href="https://bit.ly/TECForwardRegist"
        target="_blank"
        className="flex justify-center hover:scale-110 transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center bg-blobred bg-center bg-contain aspect-[3/4] w-2/3 md:w-1/2 lg:w-2/3 bg-no-repeat">
          <img
            src={"/assets/register.png"}
            alt="maskGroup"
            className="shrink-[3] self-center w-[10%] min-[400px]:w-[20%]"
          />
          <div className="text-[50%] min-[375px]:text-[60%] min-[300px]:text-[65%] min-[400px]:text-xs sm:text-sm md:text-[0.9rem] shrink-[3] self-center text-center">
            <br />
            Ready to Compete?
            <br />
            Register Here!
          </div>
        </div>
      </a>
    </div>
  );
}

function CTA({ compe, event }) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-28">
      <div className="max-w-[1140px] flex flex-col lg:flex-row items-center">
        <div className=" text-[#FFE99E] text-2xl md:text-5xl font-poppins font-bold mt-4 mb-7 text-shadow-3px">
          What are you waiting for?
        </div>
        <div className="flex w-full justify-center">
          {compe && <CTACompe />}
          {event && <CTAEvent />}
        </div>
      </div>
    </div>
  );
}

export default CTA;
