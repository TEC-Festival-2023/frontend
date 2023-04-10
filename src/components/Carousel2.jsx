function Carousel2() {
    return (
        <div className="overflow-hidden">
            <div className="block w-[100%] h-[500px] md:h-[600px] bg-wavePhone bg-center bg-no-repeat bg-[length:100%_100%] mb-10 min-[510px]:bg-vector11 sm:overflow-hidden">
                <div className="flex flex-row basis-2/4 sm:flex-row mx-[5%] gap-5 font-poppins ">
                    <div className="block text-[#353A40] max-w-[50%] pb-9 h-56 overflow-y-scroll min-[640px]:h-62 min-[700px]:h-96 min-[700px]:overflow-hidden mt-[60%] min-[200px]:mt-[50%] min-[270px]:mt-[40%] min-[330px]:mt-[30%] min-[380px]:mt-[25%] min-[510px]:mt-[33%] min-[700px]:mt-[25%] lg:mt-[20%] min-[1400px]:mt-[15%] min-[1800px]:mt-[10%]">
                        <h1 className="font-bold text-sm min-[275px]:text-xl md:text-2xl xl:text-3xl ">Youth Entrepreneur Lab</h1>
                        <h4 className="font-semibold text-sm min-[275px]:text-md lg:text-lg xl:text-xl">Presented by TEC ITB</h4>
                        <hr className="max-w-[100%] h-[2px] bg-black border-0 dark:bg-black" />
                        <p className="text-[10px] min-[275px]:text-sm lg:text-md xl:text-lg">Adipisicing excepteur culpa et velit deserunt id id culpa nisi esse officia. Eu reprehenderit mollit aliquip ipsum deserunt ad do nulla nostrud aliqua mollit.Eu reprehenderit mollit aliquip ipsum deserunt ad do nulla nostrud aliqua mollit.</p>
                        <img src={'/assets/YEL.png'} alt="YEL" className="min-[700px]:max-w-[350px] -my-2 min-[400px]:-my-8 min-[700px]:-my-14" />
                    </div>
                    <div className="flex flex-col items-center  mt-[70%] min-[200px]:mt-[35%] min-[300px]:mt-[25%] min-[510px]:mt-[20%] min-[630px]:mt-[15%] min-[600px]:ml-[15%] md:mt-[15%] lg:mt-[6%] min-[1800px]:mt-[3%] h-[60%] shrink-[3]">
                        <div className="font-poppins font-bold text-[#FFE99E] text-shadow-3px text-xl min-[400px]:text-3xl md:text-4xl lg:text-6xl">Benefits</div>
                        <div>
                            <div className="flex text-[#353A40] my-2 items-center  ">
                                <div className="basis-10 grow-0 shrink-0">
                                    <div className="bg-[#FFE99E] mr-2 w-[18px] h-[18px] min-[200px]:w-[26px] min-[200px]:h-[26px] md:w-[48px] md:h-[48px] rounded-full  flex items-center justify-center text-sm md:text-xl lg:text-2xl font-poppins font-bold my-2">1</div>
                                </div>
                                <div className=" font-poppins font-bold text-sm md:text-xl lg:text-2xl">Hands-on experience</div>
                            </div>
                            <div className="flex text-[#353A40] my-2 items-center ">
                                <div className="basis-10 grow-0 shrink-0">
                                    <div className="bg-[#FFE99E] mr-2 w-[18px] h-[18px] min-[200px]:w-[26px] min-[200px]:h-[26px] md:w-[48px] md:h-[48px] rounded-full  flex items-center justify-center text-sm md:text-xl lg:text-2xl font-poppins font-bold my-2">2</div>
                                </div>
                                <div className=" font-poppins font-bold text-sm md:text-xl lg:text-2xl">Entrepreneurial Knowledge</div>
                            </div>
                            <div className="flex text-[#353A40] my-2 items-center ">
                                <div className="basis-10 grow-0 shrink-0">
                                    <div className="bg-[#FFE99E] mr-2 w-[18px] h-[18px] min-[200px]:w-[26px] min-[200px]:h-[26px] md:w-[48px] md:h-[48px] rounded-full  flex items-center justify-center text-sm md:text-xl lg:text-2xl font-poppins font-bold my-2">3</div>
                                </div>
                                <div className="font-poppins font-bold text-sm md:text-xl lg:text-2xl">Problem Solving Skills</div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Carousel2;
