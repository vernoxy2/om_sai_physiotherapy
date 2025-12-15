import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const PrimaryBtn = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`bg-primary text-white text-lg md:text-xl flex md:gap-2 items-center justify-center rounded-full p-1 w-fit hover:bg-stride group duration-300 transition-colors ${className}`}
    >
      <span className="text-white px-4">{children}</span>
      <BsArrowRightShort className="text-white bg-[#696969] text-4xl md:text-5xl rounded-full p-1 group-hover:-rotate-45 duration-300 font-Marcellus" />
    </button>
  );
};

export default PrimaryBtn;

