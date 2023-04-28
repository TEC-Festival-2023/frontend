import React from "react";

const UnderlineAnimation = ({ href, text }) => {
  return (
    <a
      className="relative transition-colors duration-300 cursor-pointer group"
      href={href}
    >
      {text}
      <span class="block max-w-0 group-hover:max-w-[50%] transition-all duration-500 h-0.5 bg-black"></span>
    </a>
  );
};

export default UnderlineAnimation;
