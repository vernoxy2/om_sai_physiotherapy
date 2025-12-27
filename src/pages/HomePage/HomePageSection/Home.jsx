import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../../component/PrimaryBtn";
import PatientsTrust from "./PatientsTrust";
import Title from "../../../component/Title";

const Header = ({
  slides,
  duration = 4500,
  fadeDuration = 300,
  opacity = 1,
}) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const current = slides[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, fadeDuration);
    }, duration);
    return () => clearInterval(interval);
  }, [slides, duration, fadeDuration]);
  return (
    <section
      style={{
        backgroundImage: `url(${current.BgImg})`,
        backgroundPosition: "center",
        opacity: fade ? opacity : 0.7,
        transition: `opacity ${fadeDuration}ms ease-in-out`,
      }}
      className="bg-no-repeat bg-cover bg-center min-h-[280px] lg:min-h-[700px] flex items-center justify-center"
    >
      <div className="container grid grid-cols-1 xl:grid-cols-2 h-full capitalize   ">
        <div className="space-y-2.5 md:space-y-5 xl:w-[95%] py-16 lg:py-0 md:py-24 h-full flex flex-col items-start justify-center md:w-[90%] ">
          <Title
            className="text-white text-lg md:text-3xl" 
            title="Helping Hands"
          />
          <h1 className=" text-start space-x-4 leading-tight">
            {current.MainText}
          </h1>
          <div className="flex">
            <p className="text-white lg:w-4/5 text-sm md:text-base ">{current.SubText}</p>
          </div>
          <PrimaryBtn className="">
            Physiotherapy in Mississauga
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Header;
