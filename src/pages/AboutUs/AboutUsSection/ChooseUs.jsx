import React from "react";
import Title from "../../../component/Title";
import img1 from "../../../assets/AboutUsPageImgs/ChooseUs/img1.svg";
import img2 from "../../../assets/AboutUsPageImgs/ChooseUs/img2.svg";
import img3 from "../../../assets/AboutUsPageImgs/ChooseUs/img3.svg";
import img4 from "../../../assets/AboutUsPageImgs/ChooseUs/img4.svg";

const ChooseUs = () => {
  const headText = [
    {
      MainText: (
        <h1>
          Our Commitment to Exceptional <br />
          <span className="text-[#696969]">Physiotherapy Care</span>
        </h1>
      ),
    },
  ];

  const cardData = [
    {
      img: img1,
      MainText: "Personalized Treatment",
      SubText:
        "We design individualized physiotherapy plans tailored to your unique condition, goals, and lifestyle for the best recovery outcomes.",
    },
    {
      img: img2,
      MainText: "Expertise & Experience",
      SubText:
        "Our skilled and experienced healthcare professionals deliver top-quality care using proven rehabilitation techniques and clinical expertise.",
    },
    {
      img: img3,
      MainText: "Advanced Facilities",
      SubText:
        "Our clinic is equipped with modern physiotherapy technology and updated treatment methods to ensure safe, effective, and results-driven care.",
    },
    {
      img: img4,
      MainText: "Compassionate Approach",
      SubText:
        "We focus on your comfort and well-being, offering genuine support, attentive care, and a patient-first environment throughout your healing journey",
    },
  ];

  return (
    <section>
      <div className="container grid grid-cols-1 space-y-12">
        <div className="mx-auto w-full flex flex-col items-center justify-center text-center space-y-3">
          <Title className="text-[#696969] text-xl" title="Why Choose Us" />
          {headText.map((item, index) => (
            <h1 className="w-" key={index}>
              {item.MainText}
            </h1>
          ))}
        </div>
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-primary p-6 transition duration-500
                 bg-white hover:bg-primary space-y-5"
            >
              <img
                src={item.img}
                alt="img"
                className="w-auto h-auto object-cover rounded-lg"
              />

              <h1
                className="text-xl font-medium  transition
                   text-primary group-hover:text-white space-y-3"
              >
                {item.MainText}
              </h1>

              <p
                className="text-base leading-relaxed transition
                    text-[#696969] group-hover:text-white"
              >
                {item.SubText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
