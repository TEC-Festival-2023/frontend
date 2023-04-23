import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Card = (props) => {
  return (
    <div className="block max-w-36 h-auto bg-radial-card font-poppins font-bold">
      <div className="px-2 pt-1 text-sm">
        {props.month}, {props.year}
      </div>
      <div className="px-2 pb-1 text-md">{props.date}</div>
      <br />

      <div className="px-2 pt-1 underline underline-offset-4 decoration-2">
        {props.event}
      </div>
      <div className="px-2 pb-1 text-sm">{props.price}</div>
      <br />

      <div className="px-2 pt-1 text-xs">Loc</div>
      <div className="px-2 pb-1 text-md">{props.location}</div>
      <br />

      <a className="px-2 py-1 text-xs" href="#">
        More details
      </a>
    </div>
  );
};
export default function EventSwiper() {
  return (
    <div className="max-w-7xl m-auto">
      <div className="text-[#FFE99E] flex justify-center text-4xl md:text-5xl lg:text-7xl font-poppins font-bold mt-4 mb-7 text-shadow-3px">
        OUR EVENTS
      </div>
      <div className="mt-10 w-[100%] block px-[5%] ">
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
              slidesPerView: 3,
              centeredSlides: true,
            },

            1600: {
              width: 1400,
              slidesPerView: 5,
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
          <SwiperSlide>
            <Card
              month="MM"
              year="YYYY"
              date="DD"
              event="Name Of Event"
              price="Price"
              location="TBA"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              month="MM"
              year="YYYY"
              date="DD"
              event="Name Of Event"
              price="Price"
              location="TBA"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              month="MM"
              year="YYYY"
              date="DD"
              event="Name Of Event"
              price="Price"
              location="TBA"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              month="MM"
              year="YYYY"
              date="DD"
              event="Name Of Event"
              price="Price"
              location="TBA"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              month="MM"
              year="YYYY"
              date="DD"
              event="Name Of Event"
              price="Price"
              location="TBA"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              month="MM"
              year="YYYY"
              date="DD"
              event="Name Of Event"
              price="Price"
              location="TBA"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              month="MM"
              year="YYYY"
              date="DD"
              event="Name Of Event"
              price="Price"
              location="TBA"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
