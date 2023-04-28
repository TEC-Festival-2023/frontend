import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { Dropdown, DropdownContainer } from "./Dropdown";

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
      className={`font-poppins z-10 w-screen flex justify-between items-center h-[80px] mx-auto px-4 text-black sticky top-0
        ${color ? "bg-gradient-to-b from-[#F8D660] bg-opacity-60 backdrop-blur-sm" : "bg-gradient-to-b from-[#F8D660]"}
      `}
    >
      <a href="/">
        <img src="/assets/icon.png" className="w-[70px]" />
      </a>
      <div className="flex-grow justify-end hidden md:flex mr-8">
        <div className="py-4 pr-20 border-gray-900">
          <a className="underline-offset-2 hover:underline" href="/">
            Home
          </a>
        </div>

        <DropdownContainer>
          <Dropdown title={"Events"} href="/events">
            <a href="/events/tecfest-talks" className="rounded-t-md">
              TECFest Talks
            </a>
            <a href="/events/youth-entrepreneur-lab" className="">
              Youth Entrepreneur Lab
            </a>
            <a href="/events/startup-expo" className="">
              Start-Up Expo
            </a>
            <a href="/events/grand-summit" className="rounded-b-md">
              Grand Summit
            </a>
          </Dropdown>
          <Dropdown title={"Competitions"} href={"/competitions"}>
            <a href="/competitions/business-case" className=" rounded-t-md">
              Business Case Competition
            </a>
            <a href="/competitions/business-plan" className="rounded-t-md">
              Business Plan Competition
            </a>
          </Dropdown>
        </DropdownContainer>
      </div>
      <div onClick={handleNav} className="z-50 md:hidden block cursor-pointer">
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
        <div className="flex flex-col uppercase p-4 mt-20 cursor-pointer">
          <a
            href="/"
            className="p-8 hover:font-bold duration-100 border-b border-gray-600 text-center"
          >
            Home
          </a>
          <a
            href="/events"
            className="p-8 hover:font-bold duration-100 border-b border-gray-600 text-center"
          >
            Events
          </a>
          <a
            href="/competitions"
            className="p-8 hover:font-bold duration-100 text-center"
          >
            Competitions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
