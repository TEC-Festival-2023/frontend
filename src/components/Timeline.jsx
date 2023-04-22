import React from "react";


function Timeline() {
    return (
        <>
            <h1 className="font-bold text-yellow-200 text-center text-5xl text-shadow-5px-right">
                TIMELINE
            </h1>
            <div className="timeline flex mx-5 mt-5">
                <div className="timeline-item">
                    <div className="circle1 border-8 w-24 h-24 rounded-full border-yellow-200 border-solid flex justify-center">
                        <div className="circle1 border-8 w-16 h-16 rounded-full border-blue-400 border-solid m-auto bg-blue-400"></div>
                    </div>
                </div>
                <div className="timeline-item py-10">
                    <div className="rectangle border-8 w-48 h-2 border-yellow-200 text-center border-solid flex justify-center"></div>
                </div>
                <div className="timeline-item">
                    <div className="circle1 border-8 w-24 h-24 rounded-full border-yellow-200 border-solid flex justify-center">
                        <div className="circle1 border-8 w-16 h-16 rounded-full border-red-400 border-solid m-auto bg-red-400"></div>
                    </div>
                </div>
                <div className="timeline-item py-10">
                    <div className="rectangle border-8 w-48 h-2 border-yellow-200 text-center border-solid flex justify-center"></div>
                </div>
                <div className="timeline-item">
                    <div className="circle1 border-8 w-24 h-24 rounded-full border-yellow-200 border-solid flex justify-center">
                        <div className="circle1 border-8 w-16 h-16 rounded-full border-blue-400 border-solid m-auto bg-blue-400"></div>
                    </div>
                </div>
                <div className="timeline-item py-10">
                    <div className="rectangle border-8 w-48 h-2 border-yellow-200 text-center border-solid flex justify-center"></div>
                </div>
                <div className="timeline-item">
                    <div className="circle1 border-8 w-24 h-24 rounded-full border-yellow-200 border-solid flex justify-center">
                        <div className="circle1 border-8 w-16 h-16 rounded-full border-red-400 border-solid m-auto bg-red-400"></div>
                    </div>
                </div>
                <div className="timeline-item py-10">
                    <div className="rectangle border-8 w-48 h-2 border-yellow-200 text-center border-solid flex justify-center"></div>
                </div>
            </div>
            <div className="desc ml-2 mt-2 flex">
                <div className="open-reg">
                    <p className="font-bold">Open Registration</p>
                    <div className="teks mx-auto flex">
                        <p className="mx-2 font-semibold">March 20, 2023</p>
                    </div>
                </div>
                <div className="close-reg ml-36">
                    <p className="font-bold">Close Registration</p>
                    <div className="teks mx-auto flex">
                        <p className="mx-2 font-semibold">March 20, 2023</p>
                    </div>
                </div>
                <div className="case-distribution ml-40">
                    <p className="font-bold">Case Distribution</p>
                    <div className="teks mx-auto flex">
                        <p className="mx-2 font-semibold">March 20, 2023</p>
                    </div>
                </div>
                <div className="case-distribution ml-36">
                    <p className="font-bold">Solution Submission</p>
                    <div className="teks mx-auto flex">
                        <p className="ml-4 font-semibold">March 20, 2023</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Timeline;
