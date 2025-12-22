import React from "react";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

const BackBraces = () => {
  const features = [
    "Hard plastic, custom-molded",
    "Restricts spinal motion up to 50%",
    "Ideal for fractures and post-fusion surgery",
  ];
  const uses = [
    "Allow limited lumbar movement",
    "Used after surgery or for injury prevention",
    "Helpful for repetitive lifting or chronic back pain",
  ];
  const conditions = [
    "Lower Back Pain",
    "Sacroiliac Pain",
    "Postural Issues",
    "Postoperative Support",
  ];

  return (
    <section className="py-4 pb-8 space-y-5 capitalize md:ps-9 ">
      <h1 className="">
        Back <span className="text-[#696969]">Braces </span>
      </h1>
      <div className="relative w-full">
        <hr className="w-full h-1 bg-[#696969] border-none" />
        <p className="absolute top-0 left-0 lg:w-[25%] h-1.5 bg-primary rounded-full " />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 text-base ">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[50%] text-center border border-black p-2 ">
            Types of Back Braces
          </h5>
          <h5 className="bg-[#696969] text-white rounded-md w-full lg:w-[40%] text-center border border-black p-1 ">
            Rigid Back Braces
          </h5>
          <div className="text-[#696969]">
            <ul className="space-y-3">
              {features.map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={icon} alt="icon" className="w-3 h-3 my-auto " />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <h5 className="bg-[#696969] text-white rounded-md w-full lg:w-[40%] text-center border border-black p-1 ">
            Elastic Back Braces
          </h5>
          <div className="text-[#696969]">
            <ul className="space-y-3">
              {uses.map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={icon} alt="icon" className="w-3 h-3 my-auto " />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#696969] py-7">
            Insurance: Most plans cover custom back braces.
          </p>
          {/* Vertical */}
        </div>

        <div className="space-y-4 text-base text-[#696969] sm:border-l-0 lg:border-l-2 lg:ps-10">
          <h5 className="bg-[#696969] text-white rounded-md w-full lg:w-[50%] text-center border border-black p-1 md:mt-16 ">
            Conditions Treated
          </h5>
          <ul className="space-y-3 text-[#696969] ">
            {conditions.map((item, index) => (
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

export default BackBraces;
