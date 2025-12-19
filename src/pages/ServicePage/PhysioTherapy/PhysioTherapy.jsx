import React from "react";
import PrimarySecGrid from "../ServiceComponent/PrimarySecGrid";
import img1 from "../../../assets/ServicesPageImgs/PhysioTherapy/img1.png";
import img2 from "../../../assets/ServicesPageImgs/PhysioTherapy/img2.png";
import img3 from "../../../assets/ServicesPageImgs/PhysioTherapy/img3.png";
import Title from "../../../component/Title";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";

// Section 1
const Section1 = () => {
  return (
    <div className="space-y-5">
      <Title title="Chiropractic Care" />

      <h1>
        Conditions We  <br />
        <span className="text-[#696969]">Treat</span>
      </h1>

      <ul className="space-y-8">
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
          <p>Reduces pain and inflammation</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
          <p>Improves joint mobility & range of motion</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
          <p>Enhances balance and coordination</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
          <p>Increases strength and endurance</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
          <p>Boosts recovery from sprains, strains & soft-tissue injuries</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
          <p>
            Supports long-term health including cardiovascular & metabolic
            benefits
          </p>
        </li>
      </ul>
    </div>
  );
};

// Section 2
const Section2 = () => {
  return (
    <div className="space-y-8">
      <h1>
        What We <span className="text-[#696969]">Offer</span>
      </h1>
      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
        <p>Manual Therapy</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
        <p>Orthopaedic Assessment</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
        <p>Strength & Conditioning</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
        <p>Therapeutic Modalities</p>
      </li>

      <li className="flex items-start gap-3">
        <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
        <p>Custom Exercise Programs</p>
      </li>
    </div>
  );
};

// Section 3
const Section3 = () => {
  return (
    <div className="space-y-8">
      <h1>
        Treatment <span className="text-[#696969]">Techniques</span>
      </h1>
      <div className="grid grid-cols-2">
        <div className="space-y-8">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Athletic injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Poor posture</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Post-surgical rehab</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Tendinitis & bursitis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Repetitive strain injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Nerve pain & sciatica</p>
          </li>
        </div>

        <div className="space-y-8">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Arthritis & osteoporosis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Frozen shoulder</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Neck & back pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>WSIB & workplace injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Motor vehicle accident rehab</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Prenatal & postnatal rehab</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 mt-2" />
            <p>Muscle sprains & strains</p>
          </li>
        </div>
      </div>
      <p className="bg-[#D9D9D9] h-0.5 w-full" />
      <h5>“Direct billing available for extended health benefit plans.”</h5>
    </div>
  );
};

// Main Component
const PhysioTherapy = () => {
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

export default PhysioTherapy;
