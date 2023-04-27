function CtaEvent() {
  return (
    <div className="mt-20 font-poppins font-bold flex flex-col sm:flex-row sm:justify-center ">
      <div className="self-center bg-blobyellow bg-center bg-[length:85%] bg-no-repeat">
        <button className="min-h-[300px] hover:scale-110 transition-all duration-300">
          <div className="flex flex-col">
            <img
              src={"/assets/images/Maskgroup.png"}
              alt="maskGroup"
              className="shrink-[3] self-center w-[30%] min-[500px]:w-[40%]"
            />
            <div className="text-[60%] min-[300px]:text-[65%] min-[400px]:text-xs sm:text-sm md:text-[0.9rem] shrink-[3] self-center white-shadow-1px sm:white-shadow-3px">
              <br />
              Secure Your Spot Here!
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default CtaEvent;
