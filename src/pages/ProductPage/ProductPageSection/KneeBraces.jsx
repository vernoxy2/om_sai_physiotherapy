import React from "react";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

const KneeBraces = () => {
  const conditions = [
    "ACL, MCL, LCL, PCL Instability",
    "Patellofemoral Syndrome",
    "Jumper’s Knee",
    "Arthritis-related knee pain",
  ];

  const benefits = [
    "Reduces pressure on damaged or arthritic compartments",
    "Provides stability for ligament injuries",
    "Helps prevent surgery in some cases",
    "Supports active lifestyles by reducing pain",
    "Customized for perfect fit and comfort",
  ];

  return (
    <section className="py-4 space-y-5 capitalize md:px-6 ">
      <h1 className="">
        Custom <span className="text-[#696969]">Knee Braces</span>
      </h1>
      <div className="relative w-full">
        <hr className="w-full h-1 bg-[#696969] border-none" />
        <p className="absolute top-0 left-0 lg:w-[25%] h-1.5 bg-primary" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 text-base ">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[42%] text-center border border-black p-2">
            Conditions Treated
          </h5>

          <div className="text-[#696969] ">
            <ul className="space-y-3">
              {conditions.map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={icon} alt="icon" className="w-3 h-3 my-auto " />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#696969] lg:py-24 md:w-[85%]">
            Many insurance plans require a prescription from a physician. We
            assist with documentation as needed.
          </p>
          {/* Vertical */}
        </div>

        <div className="space-y-4 text-base text-[#696969] sm:border-l-0 lg:border-l-2 lg:ps-10">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[80%] border border-black p-2 text-center">
            Benefits of Custom Knee Bracing
          </h5>
          <ul className="space-y-3 text-[#696969] ">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KneeBraces;
