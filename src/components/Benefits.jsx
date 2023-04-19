import React from "react";

const Blob = ({ image, children }) => {
  return (
    <div className="flex justify-content">
      <button className="hover:scale-110 transition-all duration-300">
        <div className="flex flex-col items-center justify-center bg-blob_benefits bg-center bg-[length:100%_100%] lg:w-[250px] lg:h-[160px] w-[200px] h-[120px] bg-no-repeat">
          <img src={image} alt="People" className="w-[30%]" />
          <p>{children}</p>
        </div>
      </button>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="mt-20">
      <div className="text-[#7EA8FF] flex justify-center text-6xl lg:text-7xl font-poppins font-bold mt-4 text-shadow-3px md:text-shadow-4px ">
        BENEFITS
      </div>
      <div className="flex justify-center">
        <div className="mt-20 font-poppins font-bold flex flex-col md:flex-row max-w-[1140px] gap-12">
          <Blob image={"/assets/images/People.png"}>Coaching 3x</Blob>
          <Blob image={"/assets/images/People.png"}>Company Visit</Blob>
          <Blob image={"/assets/images/People.png"}>Gala Dinner</Blob>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
