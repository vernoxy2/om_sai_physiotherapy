import React from "react";
import Title from "../../../component/Title";
import BgImg from "../../../assets/AboutUsPageImgs/KnowUs/BgImg.png";

const Head = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat lg:h-screen max-h-auto"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="text-start items-center justify-center container text-white flex ">
        <>
          <h1 className="text-primary">About &nbsp; </h1>{" "}
          <h1 className="text-white">Us </h1>
        </>
      </div>
    </section>
  );
};

export default Head;
