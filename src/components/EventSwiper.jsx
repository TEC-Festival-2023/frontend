import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import UnderlineAnimation from "./UnderlineAnimation";

export const Card = ({ event }) => {
  return (
    <div className="p-4 w-64 h-96 flex flex-col justify-between bg-radial-card font-poppins font-bold">
      <div className="">
        <div className="text-sm md:text-base lg:text-xl">{event.month}</div>
        <div className="md:text-xl lg:text-2xl">{event.date}</div>
      </div>

      <div className="md:text-xl lg:text-2xl underline underline-offset-4 decoration-2">
        {event.event}
      </div>
      <div className="text-sm md:text-base lg:text-xl ">COMING SOON!</div>

      <div className="">
        <UnderlineAnimation href={event.link} text={"More details"} />
      </div>
    </div>
  );
};
export default function EventSwiper({ collections }) {
  return (
    <div className="max-w-7xl m-auto">
      <div className="text-[#FFE99E] flex justify-center text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mt-4 mb-7 text-shadow-3px">
        OUR EVENTS
      </div>
      <div className="mt-10 w-[100%] block px-[5%] ">
        {collections ? (
          <Swiper
            breakpoints={{
              100: {
                width: 280,
                slidesPerView: 2,
                centeredSlides: true,
              },
              // when window width is >= 640px
              320: {
                width: 320,
                slidesPerView: 2,
                centeredSlides: true,
              },
              // when window width is >= 768px
              640: {
                width: 640,
                slidesPerView: collections.length > 3 ? 3 : collections.length,
                centeredSlides: true,
              },

              1600: {
                width: 1400,
                slidesPerView: collections.length > 4 ? 4 : collections.length,
                centeredSlides: true,
              },
            }}
            spaceBetween={30}
            loop={true}
            // pagination={{
            //     clickable: true,
            //   }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {collections.map((collection) => (
              <SwiperSlide>
                <Card
                  month={collection.month}
                  year={collection.year}
                  date={collection.date}
                  event={collection.name}
                  price={collection.price}
                  location={collection.location}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>Com</>
        )}
      </div>
    </div>
  );
}
