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
        backgroundPosition: "top",   
        opacity: fade ? opacity : 0.7,
        transition: `opacity ${fadeDuration}ms ease-in-out`,
      }}
      className="bg-cover bg-center bg-no-repeat lg:h-screen max-h-auto"

    >
        <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="space-y-5 xl:w-[80%] py-16 lg:py-0 md:py-24 h-full flex flex-col items-start justify-center">
          <Title className="text-white text-xl md:text-3xl" title="Helping Hands"/>
          <h1 className=" text-start space-x-4 leading-tight">
            {current.MainText}
          </h1>
          <div className="flex gap-6">
          <p className="text-white font-lato lg:w-4/5 ">{current.SubText}</p>
          </div>
         <PrimaryBtn className="w-[60%] text-base ">Physiotherapy in North York</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Header;
