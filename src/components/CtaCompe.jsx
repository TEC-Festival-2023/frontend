function CtaCompe() {
  return (
    <div className="mt-20 font-poppins font-bold flex flex-col sm:flex-row sm:justify-center text-[0.5rem] min-[200px]:text-xs min-[300px]:text-[1rem]">
      <div className="self-center bg-blobred bg-center min-[300px]:bg-top bg-[length:75%] bg-no-repeat shrink">
        <button className="min-h-[300px] hover:scale-110 transition-all duration-300">
          <div className="flex flex-col">
            <img
              src={"/assets/images/Maskgroup.png"}
              alt="maskGroup"
              className="shrink-[3] self-center w-[40%]"
            />
            <div className="shrink-[3] self-center white-shadow-3px ">
              <br />
              Ready to Compete?
              <br />
              <br />
              Register Here!
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
export default CtaCompe;