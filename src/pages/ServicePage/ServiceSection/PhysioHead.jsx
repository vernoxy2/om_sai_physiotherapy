import React from "react";
import BgImg from "../../../assets/ServicesPageImgs/PhysioTherapy/BgImg.png";

const PhysioHead = () => {
  const slides = [
    {
      MainText: (
        <h1>
          Physiotherapy in<br /> <span className="text-white">North York </span>
        </h1>
      ),
      SubText: (
        <>
          Our physiotherapy team uses hands-on techniques and clinical expertise
          to assess, diagnose, and treat the root cause of your pain. We focus
          on restoring mobility, improving strength, and enhancing overall
          physical function.
        </>
      ),
    },
  ];
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-no-repeat bg-cover bg-center items-center justify-start flex lg:h-screen max-h-auto"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="h-full flex flex-col items-start justify-center space-y-5">
          <h1 className=" text-start  leading-tight text-primary">
            {slides[0].MainText}
          </h1>
          <div className="space-y-5">
            <p className="text-white font-lato lg:w-3/4 ">
              {slides[0].SubText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysioHead;
