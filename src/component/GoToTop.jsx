import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-[70px]  md:bottom-24 right-4 md:right-10
            bg-primary
            p-2 rounded-full
            shadow-lg
            hover:bg-secondary
            hover:scale-110
            transition-colors duration-300
            z-50
            flex items-center justify-center
          "
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="text-white" size={28} />
        </button>
      )}
    </>
  );
};

export default GoToTop;
