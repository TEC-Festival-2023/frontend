import React from "react";
import image from "../img/speaker.png";

function Speaker() {
    return (
        <>
            <div className="px-5">
                <h1 className="font-bold text-center text-700 text-3xl text-shadow-10px">
                    Meet Our Speaker!
                </h1>
                <img
                    src={image}
                    alt="speaker"
                    className="m-auto"
                />
                <p className="font-bold text-yellow-200 text-center text-5xl text-shadow-5px-left">
                    Ilham Subandoro
                </p>
                <p className="font-bold text-center text-blue-300 text-2xl mb-5">
                    (Project Support Consultant at BCG)
                </p>
                <div className="grid font-bold justify-center text-start">
                    <div className="list-disc mx-auto">
                        <li className="">
                            Furthest Developed Stage Winner of Start Up Ideology
                            Challenge 2020
                        </li>
                        <li className="">
                            1st Winner International Business Solution
                            Competition IBSC Unpad 2020
                        </li>
                        <li className="">
                            1st Winner Technofest Business Plan Competition 2020
                            UNSRI
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Speaker;
