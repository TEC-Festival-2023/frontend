import React, { useState } from "react";
const dataCollection = [
  // {
  //   question: "Q1",
  //   answer:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(0);

  function toogleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }
  return (
    <>
      {dataCollection.length > 0 && (
        <div className="max-w-7xl m-auto font-poppins">
          <div>
            <h1 className="font-bold text-[80px] text-[#353a40] mb-8 mt-24 text-center">
              F.A.Q
            </h1>
          </div>
          <div className="">
            {dataCollection.map((item, index) => (
              <div
                className="mb-[20px] px-[15px] rounded-t-sm cursor-pointer"
                key={index}
                onClick={() => toogleAccordion(index)}
              >
                <div
                  className={`bg-[#353a40] rounded-t-xl flex justify-between items-center p-3 ${
                    accordion === index ? "" : "rounded-b-xl"
                  }`}
                >
                  <h3 className={`flex items-center text-white`}>
                    {item.question}
                  </h3>
                  <div className="text-white flex items-center">
                    {accordion === index ? (
                      <>
                        <p className="">-</p>
                      </>
                    ) : (
                      <>
                        <p className="">+</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="answer">
                  <p
                    className={`text-[#353a40] p-3 bg-[#7ea8ff] m-0 font-bold leading-6 rounded-b-xl ${
                      accordion === index ? "block" : "hidden"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Accordion;
