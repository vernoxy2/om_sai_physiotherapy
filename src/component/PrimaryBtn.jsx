// import React from "react";
// import { BsArrowRightShort } from "react-icons/bs";
// import { Link } from "react-router-dom";

// const PrimaryBtn = ({ children, className, onClick, type="button" }) => {
//   return (
//     <button className={`text-xl text-center bg-primary font-Marcellus text-white py-3 px-5 rounded-full relative group active:scale-95 duration-200 ${className}`}
//     type={type}
//     onClick={onClick}>
//       {children}
//       <BsArrowRightShort className="absolute right-1 top-1/2 transform -translate-y-1/2 text-5xl  bg-[#696969] rounded-full group-hover:rotate-[-45deg] duration-500 transition-transform" />
//     </button>
//   );
// };

// export default PrimaryBtn;

import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const PrimaryBtn = ({
  children,
  className = "",
  type = "button",
  onClick,
  to, // <— new prop for route navigation
  iconclass = "",
}) => {
  const commonClasses =
    "ps-4 p-1 rounded-full bg-primary flex items-center justify-center gap-9 transition-all duration-300 active:scale-95 group " +
    className;

  const iconClasses =
    `bg-[#696969] p-1  rounded-full text-3xl text-white transform transition-transform duration-500 ease-in-out hover:bg-white hover:text-primary group-hover:rotate-[-45deg] ${iconclass}`;

  // if 'to' is provided → use <Link>
  if (to) {
    return (
      <Link data-aos="fade-up" to={to} className={commonClasses}>
        <span className="font-marcellus lg:text-2xl">{children}</span>
        <div className={iconClasses}>
          <BsArrowRightShort className="text-xl lg:text-4xl"/>
        </div>
      </Link>
    );
  }

  // else → use <button>
  return (
    <div className={commonClasses}>
      <button
        type={type}
        onClick={onClick}
        className="font-marcellus text-2xl bg-primary text-white "
      >
        {children}
      </button>
      <div className={iconClasses}>
        <BsArrowRightShort />
      </div>
    </div>
  );
};

export default PrimaryBtn;
