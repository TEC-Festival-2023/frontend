import arrow from "./assets/arrow3.png";
function Carousel() {
    return (
        <div className="block w-[100vw] h-[90vh] bg-vector11 bg-center bg-[length:100%_100%] bg-no-repeat overflow-y-scroll sm:overflow-auto">
            <div className="flex flex-col sm:flex-row  justify-items-center mx-[5%] gap-10 flex-shrink-1 font-poppins ">
                <div className="h-[50vh] mt-[60%] md:mt-[40vh] lg:mt-[30vh] sm:mt-[30vh] sm:max-w-[40vw]">
                    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">TEC'S Annual Festival</h1>
                    <h4 className="font-semibold text-lg lg:text-xl">Presented by TEC ITB</h4>
                    <hr className="max-w-[100%] h-[2px] bg-black border-0 dark:bg-black" />
                    <p className="text-sm lg:text-lg">Adipisicing excepteur culpa et velit deserunt id id culpa nisi esse officia. Eu reprehenderit mollit aliquip ipsum deserunt ad do nulla nostrud aliqua mollit.Eu reprehenderit mollit aliquip ipsum deserunt ad do nulla nostrud aliqua mollit.</p>
                    <div className="flex flex-col justify-center">
                        <button className="bg-[#FFE99E] rounded-xl text-md w-[50%] max-w-[150px] self-center font-poppins font-semibold mt-[10%] hover:bg-[#F8D660] hover:scale-110 transition-all duration-300 shadow-button" >Learn More !</button>
                        <img src={arrow} alt="arrow" className="hidden sm:block mt-[5%] w-[70%] self-center max-w-[200px]"/>
                    </div>
                </div>
                <div className="flex flex-col mt-[50%] md:mt-[25vh] lg:mt-[10vh] sm:mt-[20vh] h-[60vh]">
                    <div className="font-poppins font-bold text-center text-xl  md:text-2xl g:text-3xl">Current Event</div>
                    <img src="https://source.unsplash.com/1000x600" alt="pict" className="rounded-2xl w-[80vw] max-w-[300px] sm:max-w-[90%] lg:max-w-[70%] self-center" />
                </div>
            </div>
        </div>
    );
}
export default Carousel;