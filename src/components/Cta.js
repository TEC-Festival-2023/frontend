function Cta() {
  return (
    <div className="mt-28 font-poppins font-bold flex flex-col sm:flex-row sm:justify-center ">
      <div className="self-center bg-blobyellow bg-top bg-[length:85%] bg-no-repeat">
        <button className="min-h-[300px] hover:scale-110 transition-all duration-300">
          <div className="flex flex-col">
            <img
              src={"/assets/images/Maskgroup.png"}
              alt="maskGroup"
              className="shrink self-center w-[40%]"
            />
            <div className="shrink-[3] self-center">Registering to events?</div>
            <div className="shrink-[3] self-center">Find out how!</div>
          </div>
        </button>
      </div>

      <div className="self-center bg-blobred bg-top bg-[length:75%] bg-no-repeat shrink">
        <button className="min-h-[300px] hover:scale-110 transition-all duration-300">
          <div className="flex flex-col">
            <img
              src={"/assets/images/Maskgroup.png"}
              alt="maskGroup"
              className="shrink-[3] self-center w-[40%]"
            />
            <div className="shrink-[3] self-center ">
              How to register <br />
              to our <br />
              competition?
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Cta;
