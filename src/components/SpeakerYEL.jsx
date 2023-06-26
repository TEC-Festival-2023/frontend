import React from "react";

function SpeakerYEL() {
    return (
        <div className="font-poppins h-screen flex flex-col items-center justify-center">
            <h2 className="my-6 text-xl md:text-3xl">Meet Our Speaker!</h2>
            <div className="flex justify-center w-40 md:w-48 lg:w-96 mb-4 md:mb-6">
                <img src="/assets/images/IlhamSubandoro.png "></img>
            </div>
            <h1 className="text-xl md:text-3xl lg:text-4xl text-[#FFE99E] text-shadow-3px md:text-shadow-3px">
                Ilham Subandoro
            </h1>
            <h6 className="text-xs text-[#7EA8FF] md:text-sm lg:text-lg">(Project Support Consultant at BCG)</h6>
            <ol className="text-xs md:text-base lg:text-xl mt-2 list-disc px-9 ">
                <li>Furthest Developed Stage Winner of Start Up Ideology Challenge 2020</li>
                <li>1st Winner International Business Solution Competition IBSC Unpad 2020</li>
                <li>1 st Winner Technofest Business Plan Competition 2020 UNSRI</li>
            </ol>
        </div>
    )
}

export default SpeakerYEL;