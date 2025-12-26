import React from "react";
import img1 from "../../../assets/HomePageImgs/AdvanceTherapy/img1.png";
import img2 from "../../../assets/HomePageImgs/AdvanceTherapy/img2.png";
import img3 from "../../../assets/HomePageImgs/AdvanceTherapy/img3.png";
import img4 from "../../../assets/HomePageImgs/AdvanceTherapy/img4.png";
import Group83 from "../../../assets/HomePageImgs/AdvanceTherapy/Group83.svg";
import Group75 from "../../../assets/HomePageImgs/AdvanceTherapy/Group75.svg";
import Group78 from "../../../assets/HomePageImgs/AdvanceTherapy/Group78.svg";
import Group73 from "../../../assets/HomePageImgs/AdvanceTherapy/Group73.svg";
import { BsArrowRightShort } from "react-icons/bs";
import Title from "../../../component/Title";
import { useNavigate } from "react-router-dom";

const AdvancedTreat = () => {
  const navigate = useNavigate();

  const handleArrowClick = (route) => {
    if (route) {
      window.scrollTo(0, 0);
      navigate(`/${route}`);
    }
  };

  const trustCards = [
    {
      img: img1,
      route: "services/shockwave-therapy",
      svg: Group73,
      MainText: (
        <>
          <h4 className="text-white">
            Shockwave  
            <br /> Therapy
          </h4>
        </>
      ),
      SubText:
        "Shockwave therapy stimulates healing, reduces pain, breaks down scar tissue, improves mobility, and accelerates tissue recovery.",
    },
    {
      img: img2,
      route: "services/laser-therapy",
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
      route: "services/interferential-current",
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
      route: "services/spinal-traction",
      svg: Group83,
      MainText: (
        <>
          <h4 className="text-white">
            Spinal
            <br /> Decompression
          </h4>
        </>
      ),
      SubText:
        "Spinal decompression therapy relieves herniated disc pain, improves mobility, reduces nerve pressure, and promotes healing naturally.",
    },
  ];

  return (
    <section>
      <Title
        className="text-center text-xl text-[#696969] items-center w-fit mx-auto font-Marcellus"
        title="Advanced Treatment"
      />
      <h1 className="text-center capitalize ">
        Advanced Physiotherapy Treatments
        <span className="text-[#696969] ">
          <br /> at Om sai physiotherapy Clinic
        </span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-7 w-full container capitalize">
        {trustCards.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl transition duration-300 bg-primary space-y-4"
          >
            <div className="relative">
              <img
                src={item.img}
                alt="img"
                className="w-full h-auto object-cover rounded-lg"
              />
              {item.route && (
                <button
                  onClick={() => handleArrowClick(item.route)}
                  className="absolute top-3 right-3 text-white bg-primary rounded-full text-5xl lg:text-5xl flex-shrink-0 duration-100 group-hover:bg-white group-hover:text-primary group-hover:rotate-[-45deg] cursor-pointer hover:scale-110"
                >
                  <BsArrowRightShort />
                </button>
              )}
            </div>

            <div className="py-2 pb-8">
              <h4 className="mb-3 transition font-bold  text-white group-hover:text-white flex items-center justify-between px-3 relative">
                {item.MainText}
                <img
                  src={item.svg}
                  alt="icon"
                  className="flex-shrink-0 absolute bottom-6 right-0"
                />
              </h4>
              <p className="text-base leading-relaxed transition text-white group-hover:text-white px-3 w-[92%]">
                {item.SubText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvancedTreat;
