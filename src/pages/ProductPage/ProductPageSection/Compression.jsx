import React from "react";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

const Compression = () => {
 const conditions = [
  "Thrombosis",
  "Chronic Venous Insufficiency",
  "Heavy or Achy Legs",
  "Edema & Varicose Veins",
  "Post-surgical swelling",
  "Pregnancy-related varicosities",
];

  const benefits = [
  "Improves blood flow from legs to heart",
  "Reduces swelling and heaviness",
  "Prevents pooling of blood",
  "Helps manage venous disorders",
  "Reduces leg fatigue during long standing or sitting",
];

  return (
    <section className="py-4 pb-8 space-y-5 capitalize md:ps-9 ">
      <h1 className="">Compression <span className="text-[#696969]">
        Stockings</span></h1>
      <div className="relative w-full">
          <hr className="w-full h-1 bg-[#696969] border-none" />
          <p className="absolute top-0 left-0 lg:w-[25%] h-1.5 bg-primary" />
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 text-base ">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[65%] text-center border border-black p-3 ">
            Common Conditions Treated
          </h5>

          <div className="text-[#696969]">
            <ul className="space-y-3">
              {conditions .map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={icon} alt="icon" className="w-3 h-3 my-auto " />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#696969] lg:py-7 md:w-3/4">
           Different support levels (mild, moderate, firm) are recommended based on your condition. Our team helps you select the right compression grade and fit.
          </p>
          {/* Vertical */}
        </div>

        <div className="space-y-4 text-base text-[#696969] sm:border-l-0 lg:border-l-2 lg:ps-10">
          <h5 className="bg-primary text-white rounded-md w-full lg:w-[50%] border border-black p-3 text-center">
            Conditions Treated
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

export default Compression;