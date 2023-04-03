import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  // change color scroll navbar
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 96) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={`font-poppins z-10 flex justify-between items-center h-24 mx-auto px-4 text-black sticky top-0
        ${color ? "bg-[#F8D660]" : "bg-gradient-to-b from-[#F8D660]"}
      `}
    >
      <img src="/assets/icon.png" className="w-[70px]" />
      <ul className="flex-grow justify-end hidden md:flex">
        <div className="p-4 px-10 border-gray-900">
          <a className="underline-offset-2 hover:underline" href="/">
            Home
          </a>
        </div>
        <div className="flex p-4 px-10 items-center">
          <a className="underline-offset-2 hover:underline" href="/events">
            Events
          </a>
          <AiOutlineDown className="p-1" size={20}></AiOutlineDown>
        </div>
        <div className="flex p-4 px-10 items-center">
          <a
            className="underline-offset-2 hover:underline"
            href="/competitions"
          >
            Competitions
          </a>
          <AiOutlineDown className="p-1" size={20}></AiOutlineDown>
        </div>
      </ul>
      <div onClick={handleNav} className="z-50 md:hidden block">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={`fixed h-full border-r duration-500 z-10
          ${
            nav
              ? "bg-[#F8D660] left-0 top-0 w-full border-r-gray-900 ease-in-out"
              : "bg-gradient-to-b from-[#F8D660] left-[-100%] w-3/5 top-0 ease-linear text-white "
          }
        `}
      >
        <ul className="uppercase p-4 mt-20">
          <li className="p-8 hover:font-bold duration-100 border-b border-gray-600 text-center">
            Home
          </li>
          <li className="p-8 hover:font-bold duration-100 border-b border-gray-600 text-center">
            Event
          </li>
          <li className="p-8 hover:font-bold duration-100 text-center">
            Competition
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
