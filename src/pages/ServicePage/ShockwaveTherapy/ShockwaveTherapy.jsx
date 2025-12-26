import React from "react";
import PrimarySecGrid from "../ServiceComponent/PrimarySecGrid";
import img1 from "../../../assets/ServicesPageImgs/MassageTherapy/img1.png";
import img2 from "../../../assets/ServicesPageImgs/Acupuncture/img2.png";
import Title from "../../../component/Title";
import icon from "../../../assets/ServicesPageImgs/PhysioTherapy/icon.svg";
import PhysioHead from "../ServiceSection/PhysioHead";
import BgImg from "../../../assets/ServicesPageImgs/ShockwaveTherapy/BgImg.png";

// Section 1
const Section1 = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <div className="space-y-3">
        <Title title="Shockwave" />
        <h1>
          Shockwave <br />
          <span className="text-[#696969]">Therapy</span>
        </h1>
      </div>

      <div className="grid grid-cols-2">
        <ul className="space-y-2.5 md:space-y-5 capitalize">
          <li className="flex items-start gap-3">
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

        <ul className="space-y-2.5 md:space-y-5">
          <li className="flex items-start gap-3">
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
        </ul>
      </div>
    </div>
  );
};

// Section 2
const Section2 = () => {
  return (
    <div className="flex flex-col justify-center h-full space-y-3 md:space-y-6">
      <h1>
        Techniques <span className="text-[#696969]">We Use</span>
      </h1>
      <ul className="space-y-2.5 md:space-y-5 capitalize">
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
const ShockwaveTherapy = () => {
  return (
    <div className="bg-white rounded-3xl">
      <PhysioHead
        BgImg={BgImg}
        Heading="Shockwave"
        WhiteText="Therapy"
        subtext={
          <>
            <p className="w-[85%]">
              Advanced Non-Surgical Pain Treatment
              <br />
              Shockwave Therapy promotes healing by increasing blood flow,
              reducing inflammation, and stimulating tissue repair. Ideal for
              chronic pain, tendinopathies, and stubborn injuries.
            </p>
          </>
        }
      />
      <section
        className="relative space-y-20 py-10 md:py-14 lg:py-20 bg-white
                   before:absolute before:h-14 before:w-full before:bg-white before:-top-12 before:content-[''] before:rounded-t-[33px] before:md:rounded-t-[66px] before:z-[1]
                   after:absolute after:h-14 after:w-full after:bg-white after:-bottom-12 after:content-[''] after:rounded-b-[33px] after:md:rounded-b-[66px] after:z-[1]"
      >
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
      </section>
    </div>
  );
};

export default ShockwaveTherapy;
