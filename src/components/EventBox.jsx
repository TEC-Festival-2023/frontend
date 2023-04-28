import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
// import required modules
import { Navigation, EffectCards } from "swiper";

function EventBox({ list }) {
  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage: "url('/assets/eventbox-wave.png')",
          backgroundSize: "100% 100%",
        }}
        alt=""
        className="h-40 w-full translate-y-1"
      />
      <div className="bg-[#7EA8FF]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          cardsEffect={{ slideShadows: false, rotate: 0 }}
          navigation={true}
          className="mySwiper max-w-[1250px]"
        >
          {list &&
            list.map((el) => (
              <SwiperSlide>
                <div className="w-3/4 lg:w-[1000px] m-auto border-2 bg-white rounded-3xl md:rounded-[120px] px-8 py-6 md:px-20 md:py-16 flex flex-col justify-center min-h-[350px] md:min-h-[400px]">
                  <div className="flex flex-col items-center text-center">
                    <h5 className="md:text-2xl lg:text-4xl font-bold text-center pb-10 text-xl">
                      {el.event}
                    </h5>
                    <p className="text-sm md:text-base lg:text-xl">{el.desc}</p>
                    <a
                      href={el.link}
                      className="button py-2 px-4 bg-[#ffe99e] mt-10 rounded-2xl font-[600] text-base md:text-xl cursor-pointer hover:scale-110 transition-all duration-300"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div
        style={{
          backgroundImage: "url('/assets/eventbox-wave.png')",
          backgroundSize: "100% 100%",
        }}
        alt=""
        className="h-40 w-full rotate-180 -translate-y-1"
      />
    </div>
  );
}
export default EventBox;
