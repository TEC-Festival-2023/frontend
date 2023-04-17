import React from 'react'

const HeroEvent = () => {
  return (
    
    <div className="p-10 font-poppins text-center">
      <h1 className="text-5xl discovery">Discovery in</h1>
      <div className="flex mx-10 items-center justify-center pl-10">
        <h1 className="text-7xl font-bold z-[1]">TECFEST</h1>
        <div className="relative pt-10 -ml-10 w-max">
          <h2 className="italic font-semibold -rotate-[20deg] absolute z-[1] mx-7 m-9 text-[#E26767] text-xl">
            2023
          </h2>
          <img src="/assets/Star 1.png" className="lg:w-24 w-20" alt="" />
        </div>
      </div>
      <div className="text-white items-center text-lg py-10 mx-auto lg:text-2xl">
        <div className=" mx-auto lg:mb-1 text-center bg-[#353A40] w-max -rotate-[4.63deg]">
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
      <div className="items-center">
        <div className="mx-auto text-center bg-[#353A40] w-fit h-fit rounded-xl ">
          <h1 className="text-4xl font-bold p-4 text2">EVENTS Ed.</h1>
        </div>
      </div>
    </div>
  )
}

export default HeroEvent