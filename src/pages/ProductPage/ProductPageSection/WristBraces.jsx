import React from "react";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

const AnkleBraces = () => {
const wristConditions = [
  "Sprains",
  "Carpal Tunnel Syndrome",
  "Tendonitis",
  "Repetitive Strain Injuries",
  "Post-injury protection",
];


  return (
    <section className="py-4 space-y-5 capitalize md:px-6 ">
      <h1 className="">
        Wrist<span className="text-[#696969]">Braces</span>
      </h1>
      <div className="relative w-full">
        <hr className="w-full h-1 bg-[#696969] border-none" />
        <p className="absolute top-0 left-0 lg:w-[25%] h-1.5 bg-primary" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 text-base ">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[45%] text-center border border-black p-2 ">
            Conditions Treated
          </h5>

          <div className="text-[#696969] ">
            <ul className="space-y-3">
              {wristConditions.map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={icon} alt="icon" className="w-3 h-3 my-auto " />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#696969] py-7 w-[80%]">
            Ideal for both rehabilitation and prevention during repetitive activities.
          </p>
          {/* Vertical */}
        </div>
      </div>
    </section>
  );
};

export default AnkleBraces;
