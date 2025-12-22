import React from "react";
import PrimarySecGrid from "../ServiceComponent/PrimarySecGrid";
import img1 from "../../../assets/ServicesPageImgs/Acupuncture/img1.png";
import img2 from "../../../assets/ServicesPageImgs/Acupuncture/img2.png";
import Title from "../../../component/Title";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";
import PhysioHead from "../ServiceSection/PhysioHead";
import BgImg from "../../../assets/ServicesPageImgs/Acupuncture/BgImg.png";

// Section 1
const Section1 = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <Title title="Acupuncture Treatment" />

        <h1>
          Conditions &nbsp;
          <span className="text-[#696969]">Treated</span>
        </h1>
      </div>

      <div className="grid grid-cols-2">
        <ul className="space-y-5">
          <li className="flex items-start gap-3 capitalize">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Back & neck pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Sciatica</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Tennis elbow</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Knee pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Shoulder arthritis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Muscle sprains</p>
          </li>
        </ul>

        <div className="space-y-5 capitalize">
          <li className="flex items-start gap-3 ">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Facial pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Headaches</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Rheumatoid arthritis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Post-operative pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
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
    <div className="space-y-5">
      <h1>
        Benefits of <span className="text-[#696969]">Massage Therapy</span>
      </h1>
      <ul className="space-y-5 capitalize">
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Traditional acupuncture</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Auricular acupuncture</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Medical acupuncture</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Trigger-point needling</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Basic needling</p>
        </li>
      </ul>
    </div>
  );
};

// Main Component
const Acupuncture = () => {
  return (
    <div className="bg-white rounded-3xl">
      <PhysioHead
        BgImg={BgImg}
        Heading="Acupuncture"
        WhiteText="Treatment"
        subtext="Traditional & Medical Acupuncture for Pain Relief
Acupuncture restores balance by improving energy flow through the body’s meridians. It is highly effective for musculoskeletal pain, chronic conditions, and inflammation.
"
      />
      <PrimarySecGrid
        className=" "
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
    </div>
  );
};

export default Acupuncture;
