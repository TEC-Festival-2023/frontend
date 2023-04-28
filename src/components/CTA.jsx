import React from "react";

function CTAEvent() {
  return (
    <div
      data-aos="flip-up"
      className="mt-20 mb-20 font-poppins font-bold flex flex-col sm:flex-row sm:justify-center w-1/2"
    >
      <a
        href="https://bit.ly/TECForwardRegist"
        target="_blank"
        className="flex flex-col min-h-[300px] hover:scale-110 transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center h-[300px] bg-blobyellow bg-center bg-[length:60%_100%] bg-no-repeat">
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
      className="mt-20 mb-20 font-poppins font-bold flex flex-col sm:flex-row sm:justify-center w-1/2"
    >
      <a
        href="https://bit.ly/TECForwardRegist"
        target="_blank"
        className="flex flex-col min-h-[300px] hover:scale-110 transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center h-[300px] bg-blobred bg-center bg-[length:60%_100%] bg-no-repeat">
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
    <div className="w-screen flex flex-col items-center justify-center mt-28">
      <div className="max-w-[1140px] flex items-center">
        <div className=" text-[#FFE99E] pl-8 text-3xl md:text-5xl font-poppins font-bold mt-4 mb-7 text-shadow-3px">
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
