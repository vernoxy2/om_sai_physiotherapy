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
      <Title title="Massage Therapy" />

      <h1>
        Massage Helps <br />
        <span className="text-[#696969]">With</span>
      </h1>

      <div className="grid grid-cols-2">
        <div className="space-y-8">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Sports injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Neck & shoulder tension</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Low back pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Muscle spasms</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Headaches & migraines</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Pregnancy discomfort</p>
          </li>
        </div>

        <div className="space-y-8">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Post-surgery recovery</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Whiplash</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Arthritis & tendinitis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Frozen shoulder</p>
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
        Benefits of <span className="text-[#696969]">Massage Therapy</span>
      </h1>
      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Relieves muscle tension</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Reduces pain & inflammation</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Improves circulation</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Promotes relaxation</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Enhances flexibility & joint movement</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Boosts healing of injured tissues</p>
      </li>
       <p className="bg-[#D9D9D9] h-0.5 w-full" />
      <h5>“Sessions available in 30 and 60 minutes.<br/> Direct billing available for most insurance plans.”</h5>
    </div>
  );
};

// Main Component
const MassageTherapy = () => {
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

export default MassageTherapy;
