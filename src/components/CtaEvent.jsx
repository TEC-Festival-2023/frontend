function CtaEvent() {
  return (
    <div className="mt-20 mb-20 font-poppins font-bold flex flex-col sm:flex-row sm:justify-center ">
      <a href="https://bit.ly/TECForwardRegist" target="_blank" className="flex flex-col min-h-[300px] hover:scale-110 transition-all duration-300">
        <div className="flex justify-center h-[300px] bg-blobyellow bg-center bg-[length:60%_100%] bg-no-repeat">
        {/* <div className="min-h-[500px] hover:scale-110 transition-all duration-300"> */}
          <img
            src={"/assets/register.png"}
            alt="maskGroup"
            className="shrink-[3] self-center w-[10%] min-[400px]:w-[20%]"
          />
        {/* </div> */}
        </div>
        <div className="-mt-28 text-[60%] min-[300px]:text-[65%] min-[400px]:text-xs sm:text-sm md:text-[0.9rem] shrink-[3] self-center white-shadow-1px sm:white-shadow-3px">
          <br />
          Secure Your Spot Here!
        </div>
      </a>
    </div>
  );
}

export default CtaEvent;
