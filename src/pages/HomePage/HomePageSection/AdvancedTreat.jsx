import React from "react";
import img1 from "../../../assets/HomePageImgs/AdvanceTherapy/img1.png";
import img2 from "../../../assets/HomePageImgs/AdvanceTherapy/img2.png";
import img3 from "../../../assets/HomePageImgs/AdvanceTherapy/img3.png";
import img4 from "../../../assets/HomePageImgs/AdvanceTherapy/img4.png";
import Group83 from "../../../assets/HomePageImgs/AdvanceTherapy/Group83.svg";
import Group75 from "../../../assets/HomePageImgs/AdvanceTherapy/Group75.svg";
import Group78 from "../../../assets/HomePageImgs/AdvanceTherapy/Group78.svg";
import Group73 from "../../../assets/HomePageImgs/AdvanceTherapy/Group73.svg";

import Title from "../../../component/Title";

const AdvancedTreat = () => {
  const trustCards = [
    {
      img: img1,
      svg: Group73,
      MainText: (
        <>
          <h4 className="text-white">
            Personalized
            <br /> Treatment
          </h4>
        </>
      ),
      SubText:
        "Shockwave therapy stimulates healing, reduces pain, breaks down scar tissue, improves mobility, and accelerates tissue recovery.",
    },
    {
      img: img2,
      svg: Group75,
      MainText: (
        <>
          <h4 className="text-white">
            Laser
            <br /> Therapy
          </h4>
        </>
      ),
      SubText:
        "Laser therapy reduces pain, decreases inflammation, accelerates tissue healing, improves circulation, and enhances overall recovery.",
    },
    {
      img: img3,
      svg: Group78,
      MainText: (
        <>
          <h4 className="text-white">
            Interferential
            <br /> Current (IFC)
          </h4>
        </>
      ),
      SubText:
        "Interferential Current therapy stimulates nerves, alleviates discomfort, decreases inflammation, and enhances overall muscular function effectively.",
      active: true,
    },
    {
      img: img4,
      svg: Group83,
      MainText: (
        <>
          <h4 className="text-white">
            Compassionate
            <br /> Care
          </h4>
        </>
      ),
      SubText:
        "Spinal decompression therapy relieves herniated disc pain, improves mobility, reduces nerve pressure, and promotes healing naturally.",
    },
  ];

  return (
    <section >
        <Title
          className="text-center text-xl text-[#696969] items-center w-fit mx-auto"
          title="Advanced Treatment"
        />
        <h2 className="text-3xl md:text-4xl font-light text-center text-[#696969] capitalize space-y-14">
          <span className="text-primary ">
            Advanced Physiotherapy Treatments
          </span>
          <br />
          at Om sai physiotherapy Clinic
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-full container">
          {trustCards.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl transition duration-300
                 bg-primary space-y-4"
            >
              <img
                src={item.img}
                alt="img"
                className="w-full h-auto object-cover rounded-lg"
              />

              <h4 className="mb-3 transition text-white group-hover:text-white flex items-center justify-between px-3 relative">
                {item.MainText}
                <img
                  src={item.svg}
                  alt="icon"
                  className="flex-shrink-0 absolute bottom-6 right-0"
                />
              </h4>
              <p
                className="text-base leading-relaxed transition
                    text-white group-hover:text-white px-3 w-[92%]"
              >
                {item.SubText}
              </p>
            </div>
          ))}
        </div>
        {/* Bottom Section */}
    </section>
  );
};

export default AdvancedTreat;
