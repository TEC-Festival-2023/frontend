import React, { useState } from "react";

function EventBox() {
  return (
    <>
      <div className="max-w-[1140px] m-auto">
        <div className="flex flex-col items-center text-2xl text-center">
          {/* <img className="" src={"/assets/image1.png"} alt="dummy" /> */}
          <h5 className="text-4xl font-bold text-center pb-10 mt-10">
            Insert_Nama_Event
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <button className="button py-3 px-20 bg-[#ffe99e] mt-10 rounded-2xl font-[600] text-3xl">
            More details
          </button>
        </div>
      </div>
    </>
  );
}
export default EventBox;
