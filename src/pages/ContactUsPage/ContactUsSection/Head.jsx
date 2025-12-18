import React from "react";
import BgImg from "../../../assets/ContcatPageImgs/BgImg.png";


const Head = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="container bg-no-repeat bg-cover bg-center items-center justify-start flex lg:h-screen max-h-auto"
    >
      <h1 className="text-priamry">
        Contact&nbsp;<span className="text-white">Us</span>
      </h1>

      
    </section>
  );
};

export default Head;
