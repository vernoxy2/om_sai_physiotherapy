import React from "react";
import Title from "../../../component/Title";
import BgImg from "../../../assets/AboutUsPageImgs/KnowUs/BgImg.png";

const Head = () => {
  return (
    <section
      className=" bg-no-repeat bg-cover bg-center items-center justify-start flex min-h-[280px] md:min-h-[550px]"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
        <h1 className="text-priamry container">About &nbsp;<span className="text-white">Us</span></h1>
    </section>
  );
};

export default Head;
