import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GetTouch from "./GetTouch";
import { HiMenu, HiX } from "react-icons/hi";
import navLogo from "../assets/HomePageImgs/NavLogo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Conditions", path: "/conditions" },
    { name: "Service/Therapy", path: "/sevrice&therapy" },
    { name: "Products", path: "/products" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contactus" },
    // {name: "Get Touch", path: "/gettouch"},
  ];

  return (
    <nav className="shadow-md w-full py-4 flex items-center fixed top-0 left-0 z-50 ">
      <div className=" container mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img src={navLogo} alt="navLogo" className="h-10 md:h-18" />
        </NavLink>

        {/* <img src={navLogo} alt="navLogo" className="h-12 md:h-20" /> */}
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4 xl:gap-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="rounded-full cursor-pointer duration-300 transition-transform"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm hover:text-primary duration-300 transition-colors
           py-2 px-5 xl:px-7 rounded-full ${
             isActive ? "text-primary  font-bold" : ""
           }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <GetTouch className="hidden lg:flex border-4 border-primary" />
        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-4xl py-5 text-red-500 px-5 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <HiX className="text-black" />
          ) : (
            <HiMenu className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg w-full absolute top-16 left-0 transition-all duration-300 overflow-hidden ${
          isOpen ? "h-fit" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-lg font-bold">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-[#269BA3] cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
          <GetTouch onClick={() => setIsOpen(false)} />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
