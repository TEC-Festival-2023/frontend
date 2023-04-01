import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay } from "swiper";

const Penilai = (props) => {
  const CV = props.cv;
  const listCV = CV.map((CV) => <li>{CV}</li>);
  return (
    <div className="flex flex-col min-[340px]:flex-row min-[340px]:gap-10 py-16 min-[340px]:py-32 min-[1000px]:py-24 items-center min-[340px]:pl-9">
      <img
        src={props.image}
        alt="pict"
        className="w-28 h-28 min-[300px]:w-32 min-[300px]:h-32 min-[400px]:w-36 min-[400px]:h-36 min-[450px]:w-44 min-[450px]:h-44 min-[600px]:w-52 min-[600px]:h-52 min-[800px]:w-64 min-[800px]:h-64 min-[1000px]:w-72 min-[1000px]:h-72  rounded-full"
      />
      <div className="font-poppins text-white">
        <div className="mb-8 min-[200px]:mb-14 text-lg min-[200px]:text-xl min-[800px]:text-2xl min-[1000px]:text-3xl font-bold ">
          {props.name}
        </div>
        <ul className="list-disc mx-6 min-[800px]:text-xl min-[1000px]:text-2xl">
          {listCV}
        </ul>
      </div>
    </div>
  );
};

function Judges() {
  return (
    <div>
      <div className="text-[#7EA8FF] flex justify-center text-md min-[100px]:text-2xl min-[200px]:text-[15vw] min-[300px]:text-[10vw] min-[600px]:text-[7vw] font-poppins font-bold mt-4 mb-7 min-[500px]:mt-10 min-[500px]:mb-16 min-[1000px]:mt-16  min-[1000px]:mb-20 text-shadow-3px min-[500px]:text-shadow-5px min-[1000px]:text-shadow-7px ">
        JUDGES
      </div>
      <div className="block h-[500px] bg-vector10 min-[700px]:bg-waveJudges bg-no-repeat bg-[length:100%_100%] mb-10 items-center ">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Penilai
              image="https://source.unsplash.com/1200x1200"
              name="Nama Judges 1"
              cv={["lorem ipsum", "lorem ipsum", "lorem ipsum"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Penilai
              image="https://source.unsplash.com/1200x1200"
              name="Nama Judges 2"
              cv={["lorem ipsum", "lorem ipsum", "lorem ipsum", "lorem ipsum"]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Penilai
              image="https://source.unsplash.com/1200x1200"
              name="Nama Judges 3"
              cv={["lorem ipsum", "lorem ipsum"]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Judges;
