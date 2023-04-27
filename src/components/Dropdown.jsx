import React, { useState } from "react";

function Dropdown({ children, title, isOpen, onOpen }) {
  const handleClick = () => {
    onOpen(title);
  };
  return (
    <div className="">
      <div className="flex py-4 mr-20">
        <a className="underline-offset-2 hover:underline" href="/events">
          {title}
        </a>
        <div className="flex flex-col">
          <div onClick={handleClick}>
            <svg
              className="-mr-1 ml-2 h-5 w-5 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.2929 14.2929C10.6534 14.6534 11.2206 14.6534 11.5811 14.2929L15.2929 10.5811C15.6534 10.2206 15.6534 9.65338 15.2929 9.29289C14.9324 8.93241 14.3652 8.93241 14.0047 9.29289L10 13.2966L5.9953 9.29289C5.63478 8.93241 5.06757 8.93241 4.70711 9.29289C4.34662 9.65338 4.34662 10.2206 4.70711 10.5811L8.41889 14.2929C8.77939 14.6534 9.34662 14.6534 9.70711 14.2929C10.0676 13.9324 10.0676 13.3652 9.70711 13.0047L6.70711 10.0047C6.34662 9.64421 6.34662 9.077 6.70711 8.71652C7.06757 8.35605 7.63478 8.35605 7.9953 8.71652L10 10.7203L12.0047 8.71652C12.3652 8.35605 12.9324 8.35605 13.2929 8.71652C13.6534 9.077 13.6534 9.64421 13.2929 10.0047L10.2929 13.0047C9.93241 13.3652 9.93241 13.9324 10.2929 14.2929Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`absolute flex flex-col rounded-t-md rounded-b-md shadow-md ${
          isOpen ? "" : "hidden"
        }`}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            className: `bg-white p-2 ${child.props.className || ""}`,
          })
        )}
      </div>
    </div>
  );
}

function DropdownContainer({ children }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleDropdownOpen = (title) => {
    setOpenDropdown((prevDropdown) => (prevDropdown === title ? null : title));
  };
  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      isOpen: child.props.title === openDropdown,
      onOpen: handleDropdownOpen,
    })
  );
}

export { Dropdown, DropdownContainer };
