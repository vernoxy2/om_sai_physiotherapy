import React from "react";
import PrimarySecGrid from "../ServiceComponent/PrimarySecGrid";
import img1 from "../../../assets/ServicesPageImgs/PhysioTherapy/img1.png";
import img2 from "../../../assets/ServicesPageImgs/PhysioTherapy/img2.png";
import img3 from "../../../assets/ServicesPageImgs/PhysioTherapy/img3.png";
import Title from "../../../component/Title";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";
import PhysioHead from "../ServiceSection/PhysioHead";
import BgImg from "../../../assets/ServicesPageImgs/PhysioTherapy/BgImg.png";

// Section 1
const Section1 = () => {
  return (
    <div className="space-y-5">
      <Title title="Physiotherapy" />
      <h1>
        How Physiotherapy <br />
        <span className="text-[#696969]">Helps</span>
      </h1>

      <ul className="space-y-5 ">
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Reduces Pain From Acute And Chronic Injuries</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Improves Joint Mobility & Range Of Motion</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Enhances Balance And Coordination</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Increases Strength And Endurance</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Boosts Recovery From Sprains, Strains & Soft-Tissue Injuries</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>
            Supports Long-Term Health Including Cardiovascular & Metabolic
            Benefits
          </p>
        </li>
      </ul>
    </div>
  );
};

// Section 2
const Section2 = () => {
  return (
    <div className="flex flex-col h-full space-y-5">
      <h1>
        What We <span className="text-[#696969]">Offer</span>
      </h1>
      <ul className="space-y-5">
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Manual Therapy</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Orthopaedic Assessment</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Strength & Conditioning</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Therapeutic Modalities</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Custom Exercise Programs</p>
        </li>
      </ul>
    </div>
  );
};

// Section 3
const Section3 = () => {
  return (
    <div className="space-y-5">
      <h1>
        Conditions <span className="text-[#696969]">We Treat</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ul className="space-y-5">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Athletic Injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Poor Posture</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Post-Surgical Rehab</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Tendinitis & Bursitis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Repetitive Strain Injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Nerve Pain & Sciatica</p>
          </li>
        </ul>

        <ul className="space-y-5">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Arthritis & Osteoporosis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Frozen Shoulder</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Neck & Back Pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>WSIB & Workplace Injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Motor Vehicle Accident Rehab</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Prenatal & Postnatal Rehab</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Muscle Sprains & Strains</p>
          </li>
        </ul>
      </div>
      <p className="bg-[#D9D9D9] h-0.5 w-full" />
      <h5 className="capitalize">
        "Direct Billing Available For Extended Health
        <br />
        Benefit Plans.”
      </h5>
    </div>
  );
};

// Main Component
const PhysioTherapy = () => {
  return (
    <div className="bg-white rounded-3xl">
      <PhysioHead
        BgImg={BgImg}
        Heading={
          <>
            Physiotherapy in
            <br />
          </>
        }
        WhiteText="North York "
        subtext="Professional Physiotherapy Services By Experienced Physiotherapists
                Our Physiotherapy Team Uses Hands-On Techniques And Clinical Expertise To Assess, Diagnose, And Treat The Root Cause Of Your Pain. 
                  We Focus On Restoring Mobility, Improving Strength, And Enhancing Overall Physical Function."
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

export default PhysioTherapy;
