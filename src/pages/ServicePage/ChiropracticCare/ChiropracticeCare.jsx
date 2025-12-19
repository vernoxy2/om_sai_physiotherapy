import React from "react";
import PrimarySecGrid from "../ServiceComponent/PrimarySecGrid";
import img1 from  "../../../assets/ServicesPageImgs/Chiropractic/img1.png"
import img2 from  "../../../assets/ServicesPageImgs/Chiropractic/img2.png"
import img3 from  "../../../assets/ServicesPageImgs/Chiropractic/img3.png"
import Title from "../../../component/Title";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

// Section 1
const Section1 = () => {
  return (
    <div className="space-y-5">
      <Title title="Chiropractic Care" />

      <h1>
        Conditions We <br />
        <span className="text-[#696969]">Treat</span>
      </h1>

      <div className="grid grid-cols-2">
        <div className="space-y-8">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Sports Injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Whiplash</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Sciatica</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Numbness & tingling</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Neck & low back pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Headaches & migraines</p>
          </li>
        </div>

        <div className="space-y-8">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Chronic pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Pregnancy-related back pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
            <p>Motor vehicle injuries</p>
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
        Benefits of <span className="text-[#696969]">Chiropractic Care</span>
      </h1>
      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Reduced pain & tension</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Better posture</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Improved mobility & flexibility</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Enhanced energy levels</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
        <p>Better sleep & overall well-being</p>
      </li>
    </div>
  );
};

// Section 3
const Section3 = () => {
  return (
    <div className="space-y-8">
      <h1>
        Conditions <span className="text-[#696969]">We Treat</span>
      </h1>
      <div className="space-y-8">
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
          <p>Chiropractic Adjustments</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
          <p>Manual Therapy</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
          <p>Laser Therapy</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
          <p>Active Release Techniques (ART®)</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
          <p>Acupuncture</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-1" />
          <p>Stretching & Exercise Programs</p>
        </li>
      </div>
      <p className="bg-[#D9D9D9] h-0.5 w-full" />
      <h5>“Direct billing available for extended health benefit plans.”</h5>
    </div>
  );
};

// Main Component
const ChiropracticeCare = () => {
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

      <PrimarySecGrid
        className1="lg:order-1"
        className2="lg:order-2"
        Img={img3}
        Children={<Section3 />}
      />
    </div>
  );
};

export default ChiropracticeCare;
