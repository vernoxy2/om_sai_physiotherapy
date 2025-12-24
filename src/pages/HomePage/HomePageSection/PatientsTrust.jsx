import React from "react";
import PrimaryBtn from "../../../component/PrimaryBtn";
import Title from "../../../component/Title";
import img1 from "../../../assets/HomePageImgs/Trustus/img1.svg";
import img2 from "../../../assets/HomePageImgs/Trustus/img2.svg";
import img3 from "../../../assets/HomePageImgs/Trustus/img3.svg";
import img4 from "../../../assets/HomePageImgs/Trustus/img4.svg";

const PatientsTrust = () => {
  const trustCards = [
    {
      img: img1,
      MainText: "Tailored Treatment Plans",
      SubText:
        "Every program is customized to your specific needs, ensuring the most effective results.",
    },
    {
      img: img2,
      MainText: "Expertise & Experience",
      SubText:
        "Our skilled physiotherapists provide professional, evidence-based care to help you recover with confidence.",
    },
    {
      img: img3,
      MainText: "Modern Facilities",
      SubText:
        "Our state-of-the-art clinic is equipped with the latest physiotherapy tools and techniques.",
      active: true,
    },
    {
      img: img4,
      MainText: "Compassionate Care",
      SubText:
        "We combine professional expertise with empathy to make your recovery comfortable and supportive.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 container">
      <div className="text-center mx-auto space-y-7">
        <Title
          className=" text-xl text-[#696969] items-center w-fit mx-auto"
          title="Why Patients Trust Us"
        />
        <h1 className="">
          Excellence In Physiotherapy
          <span className="text-[#696969] ">
            <br />
            You Can Feel
          </span>
        </h1>
        <p className="text-[#696969] items-center lg:w-[45%]  mx-auto">
          At Om Sai Physiotherapy Clinic, we deliver personalized, high-quality
          physiotherapy care in a modern, patient-focused environment. Here’s
          why patients trust us for their rehabilitation and wellness
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20  ">
        {trustCards.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-primary p-6 transition duration-300
                 bg-white hover:bg-primary space-y-5"
          >
            <img
              src={item.img}
              alt="img"
              className="w-auto h-auto object-cover rounded-lg"
            />

            <h4
              className="text-lg font-medium mb-3 transition
                   text-[#696969] group-hover:text-white"
            >
              {item.MainText}
            </h4>

            <p
              className="text-sm leading-relaxed transition
                    text-[#696969] group-hover:text-white"
            >
              {item.SubText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatientsTrust;
