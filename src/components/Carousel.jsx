import Event from "./Event";

function Carousel() {
  return (
    <div className="overflow-hidden ">
      <div className="flex justify-center items-center bg-wavePhone bg-[length:100%_100%] sm:bg-vector11 sm:overflow-hidden h-[550px]">
        <div className="flex flex-row sm:flex-row sm:justify-items-center mx-[5%] gap-10 font-poppins max-w-[1140px]">
          {/* Kiri */}
          <div className="block sm:mt-20 sm:mb-0 mb-20 overflow-y-scroll sm:h-[100%] sm:overflow-hidden flex-grow">
            <h1 className="font-bold text-lg md:text-xl xl:text-2xl ">
              TEC'S Annual Festival
            </h1>
            <h4 className="font-semibold text-md lg:text-lg xl:text-xl">
              Presented by TEC ITB
            </h4>
            <hr className="max-w-[100%] h-[2px] bg-black border-0 dark:bg-black" />
            <p className="text-xs lg:text-md xl:text-lg mt-2">
              Adipisicing excepteur culpa et velit deserunt id id culpa nisi
              esse officia. Eu reprehenderit mollit aliquip ipsum deserunt ad do
              nulla nostrud aliqua mollit.Eu reprehenderit mollit aliquip ipsum
              deserunt ad do nulla nostrud aliqua mollit.
            </p>
            <div className="flex flex-col justify-center">
              <button className="bg-[#FFE99E] rounded-xl text-md px-2 py-1 max-w-[150px] text-xs md:text-sm lg:text-base self-center font-poppins font-semibold mt-4 hover:bg-[#F8D660] hover:scale-110 transition-all duration-300 shadow-button">
                Learn More !
              </button>
              <img
                src={"/assets/arrow3.png"}
                alt="arrow"
                className="hidden min-[640px]:block mt-[2%] w-[70%] self-center max-w-[200px]"
              />
            </div>
          </div>
          {/* Kanan */}
          <div className="flex flex-col xs:w-3/4 sm:w-4/5">
            <div className="font-poppins font-bold text-center text-xl md:text-2xl g:text-3xl">
              Current Event
            </div>
            <img
              src="https://source.unsplash.com/1000x600"
              alt="pict"
              className="rounded-2xl self-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
