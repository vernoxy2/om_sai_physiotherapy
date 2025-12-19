import React from "react";
import PrimarySecGrid from "../ServiceComponent/PrimarySecGrid";
import img1 from "../../../assets/ServicesPageImgs/MassageTherapy/img1.png";
import img2 from "../../../assets/ServicesPageImgs/MassageTherapy/img2.png";
import Title from "../../../component/Title";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

// Section 1
const Section1 = () => {
  return (
    <div className="space-y-5">
      <Title title="Shockwave Therapy" />

      <h1>
        Shockwave <br />
        <span className="text-[#696969]">Therapy</span>
      </h1>

      <div className="grid grid-cols-2">
        <div className="space-y-8">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Back & neck pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Sciatica</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Tennis elbow</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Knee pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Shoulder arthritis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Muscle sprains</p>
          </li>
        </div>

        <div className="space-y-8">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Facial pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Headaches</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Rheumatoid arthritis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Post-operative pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Gastritis (acute & chronic)</p>
          </li>
        </div>
      </div>
    </div>
  );
};

// Section 2
const Section2 = () => {
  return (
    <div className="space-y-8">
      <h1>
        Techniques <span className="text-[#696969]">We Use</span>
      </h1>
      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Traditional acupuncture</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Auricular acupuncture</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Medical acupuncture</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Trigger-point needling</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Basic needling</p>
      </li>
    </div>
  );
};

// Main Component
const ShockwaveTherapy = () => {
  return (
    <div className="bg-white rounded-3xl">
      <PrimarySecGrid
        className1="lg:order-1"
        className2="lg:order-2"
        Img={img1}
        Children={<Section1 />}
      />

      <PrimarySecGrid
        className1="lg:order-2"
        className2="lg:order-1"
        Img={img2}
        Children={<Section2 />}
      />

      {/* <PrimarySecGrid
        className1="lg:order-1"
        className2="lg:order-2"
        Img={img3}
        Children={<Section3 />}
      /> */}
    </div>
  );
};

export default ShockwaveTherapy;
