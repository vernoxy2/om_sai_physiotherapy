import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/HomePageImgs/Insurance/img1.png";
import img2 from "../../../assets/HomePageImgs/Insurance/img2.png";
import img3 from "../../../assets/HomePageImgs/Insurance/img3.png";
import img4 from "../../../assets/HomePageImgs/Insurance/img4.png";
import img5 from "../../../assets/HomePageImgs/Insurance/img5.png";
import { BsArrowRightShort } from "react-icons/bs";

const InsuranceCard = () => {
  const navigate = useNavigate();

  const Carddata = [
    {
      id: 1,
      img: img1,
      conditionId: 9,
      selectedCondition: "Motor Vehicle Accident Rehabilitation",
      MainText: "Motor Vehicle Accident coverage (MVA)",
      Subtext:
        "Specialized physiotherapy treatment for motor vehicle accident injuries to restore movement, reduce pain, and improve function.",
    },
    {
      id: 2,
      img: img2,
      conditionId: null,
      selectedCondition: null,
      MainText: "Extended Health Benefit coverage (EHC)",
      Subtext:
        "Physiotherapy treatments eligible for extended health benefits, promoting recovery, strength, mobility, and injury prevention.",
    },
    {
      id: 3,
      img: img3,
      conditionId: 10,
      selectedCondition: "Workplace Injury (WSIB)",
      MainText: "Workplace Injury Benefit coverage(WSIB)",
      Subtext:
        "Workplace injury physiotherapy funded through WSIB, focused on rehabilitation, functional recovery, and injury prevention.",
    },
    {
      id: 4,
      img: img4,
      conditionId: null,
      selectedCondition: null,
      MainText: "Refugee Coverage ( IFHP)",
      Subtext:
        "Physiotherapy services covered under IFHP to help refugees manage pain, restore movement, and improve function.",
    },
    {
      id: 5,
      img: img5,
      conditionId: null,
      selectedCondition: null,
      MainText: "Veterans Affairs Canada coverage (VAC)coverage",
      Subtext:
        "Veterans Affairs Canada–funded physiotherapy focused on rehabilitation, pain relief, functional independence, and quality of life.",
    },
  ];

  const handleCardClick = (card) => {
    if (card.conditionId) {
      navigate(`/conditions/${card.conditionId}`, {
        state: { fromInsurance: true },
      });
    } else {
      navigate(`/conditions`);
    }
  };

  return (
    <section className="bg-[#EFEFEF]/30 py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {/* Heading Card */}
          <div className="bg-primary flex flex-col justify-center items-center px-9 space-y-4 relative">
            <h1 className="text-white capitalize ">
              we accept insurance coverage
              <hr className="mt-4 w-[60%] border-[2px] border-white" />
            </h1>
          </div>

          {/* Insurance Cards */}
          {Carddata.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.MainText}
                className="w-full h-auto object-contain transition-all duration-300 group-hover:blur-sm"
              />

              {/* Arrow Button (Top Right) */}
              <button
                onClick={() => handleCardClick(card)}
                className="
               absolute top-3 right-3 z-10
                w-10 h-10
                flex items-center justify-center
                rounded-full
               bg-primary text-white
                text-3xl
                transition-all duration-300
               group-hover:bg-white group-hover:text-primary
                group-hover:-rotate-45
               hover:scale-110"
              >
                <BsArrowRightShort />
              </button>

              {/* Default Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300 bg-gradient-to-b from-transparent to-black h-fit">
                <h4 className="text-white w-[75%]">{card.MainText}</h4>
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/10 to-black/90 
      flex flex-col justify-end items-start text-start 
      pb-5 opacity-0 group-hover:opacity-100 
      transition-all duration-300 space-y-2"
              >
                <h4 className="text-white px-7 xl:w-[75%]">{card.MainText}</h4>
                <p className="text-white px-7 xl:w-[95%]">{card.Subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCard;
