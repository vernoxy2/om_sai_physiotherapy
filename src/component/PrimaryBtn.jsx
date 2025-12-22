import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ children, className, onClick, type="button" }) => {
  return (
    <button className={`text-xl text-center bg-primary text-white py-5 rounded-full w-full relative group active:scale-95 duration-200 ${className}`}
    type={type}
    onClick={onClick}>
      {children}
      <BsArrowRightShort className="absolute right-4 top-1/2 transform -translate-y-1/2 text-5xl bg-[#696969] rounded-full group-hover:rotate-[-45deg] duration-500 transition-transform" />
    </button>
  );
};

export default PrimaryBtn;
