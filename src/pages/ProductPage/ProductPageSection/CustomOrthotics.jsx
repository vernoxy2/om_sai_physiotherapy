import React from "react";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

const CustomOrthotics = () => {
  const benefits = [
    "Correct foot alignment and posture",
    "Reduce pressure points and muscle strain",
    "Relieve discomfort in the ankles, knees, hips, and lower back",
    "Improve balance and walking mechanics",
    "Reduce fatigue and support long-term mobility",
    "Enhance overall comfort during daily activities",
  ];

  const conditions = [
    "Heel Spurs",
    "Plantar Fasciitis",
    "Metatarsalgia",
    "Knee Pain",
    "Lower Back Pain",
    "Bunions",
    "Achilles Tendonosis",
    "High Arches (Pes Cavus)",
    "Limb Length Discrepancy",
  ];
  return (
    <section className="py-4 pb-8 space-y-5 capitalize">
      <h1>Custom Orthotics</h1>
      <div className="relative w-full">
          <hr className="w-full h-1 bg-[#696969] border-none" />
          <p className="absolute top-0 left-0 lg:w-[32%] h-1.5 bg-primary" />
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 text-base">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[85%] text-center border border-black p-2 ">
            Benefits of Custom Orthotics
          </h5>

          <div className="text-[#696969]">
            <ul className="space-y-3">
              {benefits.map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={icon} alt="icon" className="w-3 h-3 my-auto " />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#696969]">
            Custom orthotics are worn inside your shoes to support the foot and
            correct improper biomechanicshelping your feet and entire body
            function the way they were meant to.
          </p>
          {/* Vertical */}
        </div>

        <div className="space-y-4 text-base text-[#696969] sm:border-l-0 md:border-l-2 ps-10 ">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[55%] border border-black p-2 text-center">
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

export default CustomOrthotics;
