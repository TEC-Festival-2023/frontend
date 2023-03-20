import arrow from "./assets/arrow3.png";
import Event from './Event';

function Carousel() {
    return (
        <div className="overflow-hidden">
            <div className="block w-[100%] h-[500px] md:h-[600px] bg-wavePhone bg-center bg-no-repeat bg-[length:100%_100%] min-[510px]:bg-vector11 mb-10 sm:overflow-hidden">
                <div className="flex flex-row sm:flex-row sm:justify-items-center mx-[5%] gap-10 font-poppins ">
                    <div className="block h-56 overflow-y-scroll min-[640px]:h-[100%] min-[640px]:overflow-hidden mt-[60%] min-[200px]:mt-[50%] min-[270px]:mt-[40%] min-[330px]:mt-[30%] min-[380px]:mt-[25%] min-[510px]:mt-[33%] min-[700px]:mt-[25%] lg:mt-[20%] min-[1400px]:mt-[15%] min-[1800px]:mt-[10%] sm:max-w-[40vw] shrink-[3]">
                        <h1 className="font-bold text-lg md:text-xl xl:text-2xl ">TEC'S Annual Festival</h1>
                        <h4 className="font-semibold text-md lg:text-lg xl:text-xl">Presented by TEC ITB</h4>
                        <hr className="max-w-[100%] h-[2px] bg-black border-0 dark:bg-black" />
                        <p className="text-xs lg:text-md xl:text-lg">Adipisicing excepteur culpa et velit deserunt id id culpa nisi esse officia. Eu reprehenderit mollit aliquip ipsum deserunt ad do nulla nostrud aliqua mollit.Eu reprehenderit mollit aliquip ipsum deserunt ad do nulla nostrud aliqua mollit.</p>
                        <div className="flex flex-col justify-center">
                            <button className="bg-[#FFE99E] rounded-xl text-md w-[50%] max-w-[150px] self-center font-poppins font-semibold mt-[10%] hover:bg-[#F8D660] hover:scale-110 transition-all duration-300 shadow-button" >Learn More !</button>
                            <img src={arrow} alt="arrow" className="hidden min-[640px]:block mt-[2%] w-[70%] self-center max-w-[200px]" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-[70%] min-[200px]:mt-[35%] min-[300px]:mt-[25%] min-[510px]:mt-[20%] min-[630px]:mt-[15%] md:mt-[8%] lg:mt-[6%] min-[1800px]:mt-[3%] h-[60%] shrink-[3]">
                        <div className="font-poppins font-bold text-center text-xl  md:text-2xl g:text-3xl">Current Event</div>
                        <img src="https://source.unsplash.com/1000x600" alt="pict" className="rounded-2xl self-center shrink-[1] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] min-[1500px]:max-w-[50%] " />
                    </div>
                </div>
            </div>

            <Event />
        </div>

    );
}
export default Carousel;