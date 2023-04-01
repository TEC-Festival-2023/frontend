import React, { useState } from "react";
import "./EventBox.css";

function Eventbox() {
  return (
    <>
      <div className="max-w-[1140px] m-auto">
        <div className="bigbox"></div>
        <div className="smallbox">
          <img src={"/assets/image1.png"} alt="dummy" />
          <h5>Insert_Nama_Event</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <button className="button">More details</button>
        </div>
      </div>
    </>
  );
}
export default Eventbox;
