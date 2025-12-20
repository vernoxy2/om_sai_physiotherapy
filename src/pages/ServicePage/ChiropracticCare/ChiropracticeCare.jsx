import React from "react";
import PrimarySecGrid from "../ServiceComponent/PrimarySecGrid";
import img1 from "../../../assets/ServicesPageImgs/Chiropractic/img1.png";
import img2 from "../../../assets/ServicesPageImgs/Chiropractic/img2.png";
import img3 from "../../../assets/ServicesPageImgs/Chiropractic/img3.png";
import Title from "../../../component/Title";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";
import PhysioHead from "../ServiceSection/PhysioHead";
import BgImg from "../../../assets/ServicesPageImgs/Chiropractic/BgImg.png";

// Section 1
const Section1 = () => {
  return (
    <div className="space-y-5">
      <Title title="Chiropractic Care" />
      <h1>
        Conditions We <br />
        <span className="text-[#696969]">Treat</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-5">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Sports Injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Whiplash</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Sciatica</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Numbness & Tingling</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Neck & Low Back Pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Headaches & Migraines</p>
          </li>
        </div>

        <div className="space-y-5">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Chronic Pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Pregnancy-Related Back Pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Motor Vehicle Injuries</p>
          </li>
        </div>
      </div>
    </div>
  );
};

// Section 2
const Section2 = () => {
  return (
    <div className="space-y-5">
      <h1>
        Benefits of <span className="text-[#696969]">Chiropractic Care</span>
      </h1>
      <ul className="space-y-5">
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Reduced Pain & Tension</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Better Posture</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Improved Mobility & Flexibility</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Enhanced Energy Levels</p>
        </li>
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Better Sleep & Overall Well-Being</p>
        </li>
      </ul>
    </div>
  );
};

// Section 3
const Section3 = () => {
  return (
    <div className="space-y-5">
      <h1>Treatment</h1>
      <ul className="space-y-5">
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Chiropractic Adjustments</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Manual Therapy</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Laser Therapy</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Active Release Techniques (ART®)</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Acupuncture</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Stretching & Exercise Programs</p>
        </li>
      </ul>
      <p className="bg-[#D9D9D9] h-0.5 w-full" />
      <h5>"Direct Billing Available For Extended Health Benefit Plans."</h5>
    </div>
  );
};

// Main Component
const ChiropracticeCare = () => {
  return (
    <div className="bg-white rounded-3xl">
      <PhysioHead
        BgImg={BgImg}
        Heading="Chiropractic"
        WhiteText="Care"
        subtext="Safe & Effective Treatment For Spinal, Joint & Muscular Pain
          Chiropractic Care Focuses On Correcting Dysfunctions In The Spine, Joints, And Nervous System. When Your Nervous System Is Functioning Optimally, Your Entire Body Works Better—Reducing Pain And Improving Mobility.
        "
      />
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
