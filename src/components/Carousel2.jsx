function Carousel2() {
  return (
    <div className="overflow-hidden ">
      <div className="flex justify-center items-center bg-wavePhone bg-[length:100%_100%] sm:bg-vector11 sm:overflow-hidden h-[550px]">
        <div className="flex flex-row sm:flex-row sm:justify-items-center mx-[5%] gap-10 font-poppins max-w-[1250px]">
          {/* Kiri */}
          <div className="block sm:mt-20 lg:mt-24 sm:mb-0 mb-20 overflow-y-scroll h-56 sm:h-[100%] sm:overflow-hidden basis-[100%] shrink-[1] grow-[1]">
            <h1 className="font-bold text-lg md:text-xl xl:text-2xl ">
              Youth Entrepreneur Lab
            </h1>
            <h4 className="font-semibold text-sm min-[275px]:text-md lg:text-lg xl:text-xl">
              Presented by TEC ITB
            </h4>
            <hr className="max-w-[100%] h-[2px] bg-black border-0 dark:bg-black" />
            <p className="text-[10px] min-[275px]:text-sm lg:text-md xl:text-lg">
              Adipisicing excepteur culpa et velit deserunt id id culpa nisi
              esse officia. Eu reprehenderit mollit aliquip ipsum deserunt ad do
              nulla nostrud aliqua mollit.Eu reprehenderit mollit aliquip ipsum
              deserunt ad do nulla nostrud aliqua mollit.
            </p>
            <img
              src={"/assets/YEL.png"}
              alt="YEL"
              className="min-[700px]:max-w-[350px] -my-2 min-[400px]:-my-8 min-[700px]:-my-14"
            />
          </div>
          {/* kanan */}
          <div className="flex flex-col xs:w-3/4 sm:w-4/5 basis-[100%] shrink-[1] grow-[1] lg:mt-3">
            <div className="font-poppins font-bold text-center text-xl md:text-2xl lg:text-3xl shrink-[1]">
              Benefits
            </div>
            <div className="ml-10">
              <div className="flex my-2 items-center  ">
                <div className="basis-10 grow-0 shrink-0">
                  <div className="bg-[#FFE99E] mr-2 w-[18px] h-[18px] min-[200px]:w-[26px] min-[200px]:h-[26px] md:w-[48px] md:h-[48px] rounded-full  flex items-center justify-center text-sm md:text-xl lg:text-2xl font-poppins font-bold my-2">
                    1
                  </div>
                </div>
                <div className=" font-poppins font-bold text-sm md:text-xl lg:text-2xl">
                  Hands-on experience
                </div>
              </div>
              <div className="flex my-2 items-center ">
                <div className="basis-10 grow-0 shrink-0">
                  <div className="bg-[#FFE99E] mr-2 w-[18px] h-[18px] min-[200px]:w-[26px] min-[200px]:h-[26px] md:w-[48px] md:h-[48px] rounded-full  flex items-center justify-center text-sm md:text-xl lg:text-2xl font-poppins font-bold my-2">
                    2
                  </div>
                </div>
                <div className=" font-poppins font-bold text-sm md:text-xl lg:text-2xl">
                  Entrepreneurial Knowledge
                </div>
              </div>
              <div className="flex my-2 items-center ">
                <div className="basis-10 grow-0 shrink-0">
                  <div className="bg-[#FFE99E] mr-2 w-[18px] h-[18px] min-[200px]:w-[26px] min-[200px]:h-[26px] md:w-[48px] md:h-[48px] rounded-full  flex items-center justify-center text-sm md:text-xl lg:text-2xl font-poppins font-bold my-2">
                    3
                  </div>
                </div>
                <div className="font-poppins font-bold text-sm md:text-xl lg:text-2xl">
                  Problem Solving Skills
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
