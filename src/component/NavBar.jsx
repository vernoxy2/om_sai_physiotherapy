import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
    <nav className="absolute left-1/2 -translate-x-1/2 w-full flex container top-3 md:top-5 z-50">
      <div className="flex justify-between items-center bg-white rounded-full h-full w-full py-1 md:p-1">
        {/* <div className="flex items-center justify-between w-full px-4 md:px-6 lg:px-0"> */}
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={navLogo} alt="logo" className="ml-1 h-5 md:h-10" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-3xl text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX className="text-black" />
            ) : (
              <HiMenu className="text-black" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 xl:gap-2 relative h-full">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="rounded-full cursor-pointer duration-300 transition-transform "
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm hover:text-primary duration-300 transition-colors
           py-2 px-5 xl:px-7 rounded-full ${
             isActive ? "text-primary  font-bold" : ""
           }` }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden md:block">
          <button className="bg-primary text-white px-5 text-base py-2 rounded-full hover:bg-primary transition-colors ">
            Get In Touch
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg w-full absolute top-16 left-0 transition-all duration-300 overflow-hidden border ${
          isOpen ? "h-fit" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-2 py-2 text-base border border-red-600 bg-white rounded-3xl  ">
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
