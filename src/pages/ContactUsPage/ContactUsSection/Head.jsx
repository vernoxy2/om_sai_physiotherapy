import React from "react";
import BgImg from "../../../assets/ContcatPageImgs/BgImg.png";


const Head = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className=" bg-no-repeat bg-cover bg-center flex items-center justify-start min-h-[280px] md:min-h-[550px]"
    >
      <h1 className="text-priamry container">
        Contact&nbsp;<span className="text-white">Us</span>
      </h1>

      
    </section>
  );
};

export default Head;
