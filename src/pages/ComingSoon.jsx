function ComingSoon() {
  return (
    <div className="flex justify-center items-center">
      <div className="py-32 flex flex-col md:flex-row justify-center items-center max-w-[1250px] p-16">
        <div className="">
          <img
            src="/assets/images/Logo.png "
            alt=""
            className="w-40 md:w-[400px] lg:w-[600px]"
          />
        </div>

        <div className="text-[#FFE99E] text-3xl md:text-4xl lg:text-6xl font-poppins font-bold text-shadow-3px text-center md:text-left">
          Oops! Be Patient, this event will be announced soon!
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
