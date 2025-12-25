import React from "react";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

const AnkleBraces = () => {
 const ankleConditions = [
  "Ankle Sprains",
  "Chronic Ankle Instability",
  "Ankle Pain",
  "Preventive Support for Athletes",
];


  return (
    <section className="py-4 space-y-5 capitalize md:px-6 ">
      <h1 className="">
        Ankle <span className="text-[#696969]">Braces</span>
      </h1>
      <div className="relative w-full">
        <hr className="w-full h-1 bg-[#696969] border-none" />
        <p className="absolute top-0 left-0 lg:w-[32%] h-1.5 bg-primary" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 text-base ">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[45%] text-center border border-black p-2 ">
            Conditions Treated
          </h5>

          <div className="text-[#696969] ">
            <ul className="space-y-3">
              {ankleConditions.map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={icon} alt="icon" className="w-3 h-3 my-auto " />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#696969] xl:py-24 py-5 w-3/4">
            Available in slip-on or strap-secured designs, depending on your needs.
          </p>
          {/* Vertical */}
        </div>
      </div>
    </section>
  );
};

export default AnkleBraces;
