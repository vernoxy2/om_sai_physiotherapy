import React from "react";
import PrimarySecGrid from "../ServiceComponent/PrimarySecGrid";
import img1 from "../../../assets/ServicesPageImgs/MassageTherapy/img1.png";
import img2 from "../../../assets/ServicesPageImgs/MassageTherapy/img2.png";
import Title from "../../../component/Title";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";
import PhysioHead from "../ServiceSection/PhysioHead";
import BgImg from "../../../assets/ServicesPageImgs/MassageTherapy/BgImg.png";

// Section 1
const Section1 = () => {
  return (
    <div className="space-y-5">
      <Title title="Massage Therapy" />

      <h1>
        Massage Helps <br />
        <span className="text-[#696969]">With</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <ul className="space-y-5 capitalize">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Sports injuries</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Neck & shoulder tension</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Low back pain</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Muscle spasms</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Headaches & migraines</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Pregnancy discomfort</p>
          </li>
        </ul>

        <ul className="space-y-5 capitalize">
          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Post-surgery recovery</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Whiplash</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Arthritis & tendinitis</p>
          </li>

          <li className="flex items-start gap-3">
            <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
            <p>Frozen shoulder</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Section 2
const Section2 = () => {
  return (
    <div className="space-y-5">
      <h1>
        Benefits of{" "}
        <span className="text-[#696969]">
          Massage <br /> Therapy
        </span>
      </h1>

      <ul className="space-y-5 capitalize">
        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Relieves muscle tension</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Reduces pain & inflammation</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Improves circulation</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Promotes relaxation</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Enhances flexibility & joint movement</p>
        </li>

        <li className="flex items-start gap-3">
          <img src={icon} alt="icon" className="w-3 h-3 my-auto" />
          <p>Boosts healing of injured tissues</p>
        </li>
        <p className="bg-[#D9D9D9] h-0.5 w-full" />
        <h5 className="capitalize">
          “Sessions available in 30 and 60 minutes.
          <br /> Direct billing available for most insurance plans.”
        </h5>
      </ul>
    </div>
  );
};

// Main Component
const MassageTherapy = () => {
  return (
    <div className="bg-white rounded-3xl">
      <PhysioHead
      BgImg={BgImg}
        Heading="Massage"
        WhiteText="Therapy"
        subtext="therapeutic Massage for Pain Relief & Relaxation
Our Registered Massage Therapists (RMTs) use evidence-based techniques to treat soft-tissue conditions, relax tense muscles, and improve circulation. Massage therapy accelerates healing and supports long-term wellness.
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
    </div>
  );
};

export default MassageTherapy;
