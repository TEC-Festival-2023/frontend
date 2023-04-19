import React from 'react'

const Benefits = () => {
  return (
    <div className='m-10'>
      <div className="text-[#7EA8FF] flex justify-center text-6xl lg:text-7xl font-poppins font-bold mt-4 mb-7 min-[500px]:mt-10 min-[500px]:mb-16 min-[1000px]:mt-16 min-[1000px]:mb-20 text-shadow-3px md:text-shadow-4px ">
        BENEFITS
      </div>
        <div className="mt-28 font-poppins font-bold flex flex-col md:flex-row sm:justify-center ">
        <div className="self-center bg-blob_benefits bg-center bg-[length:75%] bg-no-repeat basis-1/3 text-center">
            <button className="min-h-[300px] hover:scale-110 transition-all duration-300">
            <div className="flex flex-col">
                <img
                src={"/assets/images/People.png"}
                alt="People"
                className="shrink self-center w-[40%]"
                />
                <div className="shrink-[3] self-center">Registering to events?</div>
                <div className="shrink-[3] self-center">Find out how!</div>
            </div>
            </button>
        </div>
        <div className="self-center bg-blob_benefits bg-center bg-[length:75%] bg-no-repeat  basis-1/3 text-center">
            <button className="min-h-[300px] hover:scale-110 transition-all duration-300">
            <div className="flex flex-col">
                <img
                src={"/assets/images/People.png"}
                alt="People"
                className="shrink self-center w-[40%]"
                />
                <div className="shrink-[3] self-center">Registering to events?</div>
                <div className="shrink-[3] self-center">Find out how!</div>
            </div>
            </button>
        </div>
        <div className="self-center bg-blob_benefits bg-center bg-[length:75%] bg-no-repeat basis-1/3 text-center">
            <button className="min-h-[300px] hover:scale-110 transition-all duration-300">
            <div className="flex flex-col">
                <img
                src={"/assets/images/People.png"}
                alt="People"
                className="shrink self-center w-[40%]"
                />
                <div className="shrink-[3] self-center">Registering to events?</div>
                <div className="shrink-[3] self-center">Find out how!</div>
            </div>
            </button>
        </div>


        </div>

    </div>
  )
}

export default Benefits