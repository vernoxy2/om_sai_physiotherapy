import React from "react";
import img1 from "../../../assets/HomePageImgs/Insurance/img1.png";
import img2 from "../../../assets/HomePageImgs/Insurance/img2.png";
import img3 from "../../../assets/HomePageImgs/Insurance/img3.png";
import img4 from "../../../assets/HomePageImgs/Insurance/img4.png";
import img5 from "../../../assets/HomePageImgs/Insurance/img5.png";

const InsuranceCard = () => {
  const Carddata = [
    {
      id: 1,
      img: img1,
      MainText: "Motor Vehicle Accident coverage (MVA)",
      Subtext:
        "Specialized physiotherapy treatment for motor vehicle accident injuries to restore movement, reduce pain, and improve function.",
    },
    {
      id: 2,
      img: img2,
      MainText: "Extended Health Benefit coverage (EHC)",
      Subtext:
        "Physiotherapy treatments eligible for extended health benefits, promoting recovery, strength, mobility, and injury prevention.",
    },
    {
      id: 3,
      img: img3,
      MainText: "Workplace Injury Benefit coverage(WSIB)",
      Subtext:
        "Workplace injury physiotherapy funded through WSIB, focused on rehabilitation, functional recovery, and injury prevention.",
    },
    {
      id: 4,
      img: img4,
      MainText: "Refugee Coverage ( IFHP)",
      Subtext:
        "Physiotherapy services covered under IFHP to help refugees manage pain, restore movement, and improve function.",
    },
    {
      id: 5,
      img: img5,
      MainText: "Veterans Affairs Canada coverage (VAC)coverage",
      Subtext:
        "Veterans Affairs Canada–funded physiotherapy focused on rehabilitation, pain relief, functional independence, and quality of life.",
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* Heading Card */}
          <div className="bg-primary flex flex-col justify-center items-center px-9 space-y-4 relative">
            <h1 className="text-white capitalize ">
              we accept insurance coverage
            </h1>
           <hr className="bg-white w-1/2 h-1 absolute md:bottom-20 md:left-9 space-y-5" />
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

              {/* Default Title (Bottom, always visible) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h4 className="text-white w-[75%]">{card.MainText}</h4>
              </div>

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/10 to-black/90 
                    flex flex-col justify-end items-start text-start 
                  pb-5 opacity-0 group-hover:opacity-100 
                   transition-all duration-300 space-y-2"
              >
                <h4 className="text-white px-7 xl:w-[75%]  ">{card.MainText}</h4>
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
