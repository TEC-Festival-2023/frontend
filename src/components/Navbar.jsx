import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { Dropdown, DropdownContainer } from "./Dropdown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={`font-poppins z-10 w-full flex justify-between items-center h-[80px] mx-auto px-4 text-black sticky top-0 bg-gradient-to-b from-[#F8D660] bg-opacity-60 backdrop-blur-sm`}
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
            <a href="/competitions/business-plan" className="rounded-b-md">
              Business Plan Competition
            </a>
          </Dropdown>
        </DropdownContainer>
      </div>
      <div onClick={handleNav} className="z-50 md:hidden block cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={`fixed h-full border-r duration-500 z-10 md:hidden
          ${
            nav
              ? "bg-[#F8D660] left-0 top-0 w-full border-r-gray-900 ease-in-out"
              : "bg-gradient-to-b from-[#F8D660] left-[-100%] w-3/5 top-0 ease-linear text-white "
          }
        `}
      >
        <div className="flex flex-col uppercase mt-20 cursor-pointer w-screen">
          <a
            href="/"
            className="bg-[#F8D660] p-8 hover:font-bold duration-100 border-b border-t border-gray-600 text-center"
          >
            Home
          </a>
          <Accordion>
            <div className="bg-[#F8D660] flex py-8 hover:font-bold duration-100 border-b border-gray-600">
              <a href="/events" className="self-center ml-auto pl-14">
                Events
              </a>
              <div className="ml-auto">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor: "#F8D660",
                  }}
                >
                  <Typography></Typography>
                </AccordionSummary>
              </div>
            </div>
            <AccordionDetails
              sx={{
                backgroundColor: "#F8D660",
              }}
            >
              <div className="flex flex-col">
                <a
                  href="/events/tecfest-talks"
                  className="flex justify-center py-3 "
                >
                  TECFest Talks
                </a>
                <hr className="border-slate-400" />
                <a
                  href="/events/youth-entrepreneur-lab"
                  className="flex justify-center py-3 "
                >
                  Youth Entrepreneur Lab
                </a>
                <hr className="border-slate-400" />
                <a
                  href="/events/startup-expo"
                  className="flex justify-center py-3"
                >
                  Start-Up Expo
                </a>
                <hr className="border-slate-400" />
                <a
                  href="/events/grand-summit"
                  className="flex justify-center pt-3 pb-2"
                >
                  Grand Summit
                </a>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <div className="bg-[#F8D660] flex py-8 hover:font-bold duration-100">
              <a href="/competitions" className="self-center ml-auto pl-14">
                Competitions
              </a>
              <div className="ml-auto">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    backgroundColor: "#F8D660",
                  }}
                >
                  <Typography></Typography>
                </AccordionSummary>
              </div>
            </div>
            <AccordionDetails
              sx={{
                backgroundColor: "#F8D660",
              }}
            >
              <div className="flex flex-col">
                <a
                  href="/competitions/business-case"
                  className="flex justify-center py-3 "
                >
                  Business Case Competition
                </a>
                <hr className="border-slate-400" />
                <a
                  href="/competitions/business-plan"
                  className="flex justify-center py-3 "
                >
                  Business Plan Competition
                </a>
              </div>
            </AccordionDetails>
          </Accordion>

          {/* 
          
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
         */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
