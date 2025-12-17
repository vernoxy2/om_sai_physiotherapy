import React from "react";
import PrimaryBtn from "../../../component/PrimaryBtn";
import cvrImg from "../../../assets/TrustusPageImgs/coverImg.png";
import SliderImg from "../../../assets/TrustusPageImgs/SliderImg.png";
import { TiStarburst } from "react-icons/ti";
import Title from "../../../component/Title";

const PatientsTrust = () => {
  const trustCards = [
    {
      MainText: "Tailored Treatment Plans",
      SubText:
        "Every program is customized to your specific needs, ensuring the most effective results.",
    },
    {
      MainText: "Expertise & Experience",
      SubText:
        "Our skilled physiotherapists provide professional, evidence-based care to help you recover with confidence.",
    },
    {
      MainText: "Modern Facilities",
      SubText:
        "Our state-of-the-art clinic is equipped with the latest physiotherapy tools and techniques.",
      active: true,
    },
    {
      MainText: "Compassionate Care",
      SubText:
        "We combine professional expertise with empathy to make your recovery comfortable and supportive.",
    },
  ];

  const TherapyData = [
    {
      id: 1,
      value: "Neurological Rehabilitation",
    },
    {
      id: 2,
      value: "Brain And Nerve Therapy",
    },
    {
      id: 3,
      value: "Joint Care Therapy",
    },
    {
      id: 4,
      value: "Bone And Muscle Therapy",
    },
    {
      id: 5,
      value: "Cardiovascular Rehabilitation",
    },
  ];

  return (
    <section className="w-full bg-white py-20 container">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Title className="text-center text-xl text-[#696969] items-center w-fit mx-auto" title="Why Patients Trust Us" />
          <h2 className="text-3xl md:text-4xl font-light text-[#696969]">
            <span className="text-primary ">Excellence In Physiotherapy</span>
            <br />
            You Can Feel
          </h2>
          <p className="mt-4 text-[#696969] md:text-base">
            At Om Sai Physiotherapy Clinic, we deliver personalized,
            high-quality physiotherapy care in a modern, patient-focused
            environment. Here’s why patients trust us for their rehabilitation
            and wellness
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustCards.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-primary p-6 transition duration-300
                 bg-white hover:bg-primary"
            >
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

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <Title className="text-xl text-[#696969] " title='Plan Your Visit '/>
            <h3 className="text-3xl md:text-4xl font-light text-primary mb-4">
              Take The First Step <br />
              <span className="font-medium text-[#696969]">
                To A Pain-Free Life
              </span>
            </h3>
            <p className="text-[#696969] text-sm mb-4">
              Read what our patients have to say about their experiences at Om
              Sai Physiotherapy Clinic. Discover how our personalized
              physiotherapy care has helped them regain mobility, reduce pain,
              and improve overall health.
            </p>
            <p className="text-[#696969] text-sm">
              We value your feedback! Please consider leaving a review on Google
              to share your experience and help others find trusted
              physiotherapy care.
            </p>
          </div>

          {/* Form */}
          <form className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full rounded-full border border-primary px-5 py-3 text-sm focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email ID*"
                className="w-full rounded-full bg-[#EEEEEE] px-5 py-3 text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Type Of Service Enquiry*"
                className="w-full rounded-full bg-[#EEEEEE] px-5 py-3 text-sm focus:outline-none"
              />
              <input
                type="text"
                placeholder="Select Date & Time*"
                className="w-full rounded-full bg-[#EEEEEE] px-5 py-3 text-sm focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Enter Your Message Here*"
              rows={4}
              className="w-full rounded-2xl bg-[#EEEEEE] px-5 py-4 text-sm focus:outline-none mb-4"
            />
            <PrimaryBtn>Schedule Your Visit</PrimaryBtn>
          </form>
        </div>
      </div>
      <img src={cvrImg} alt="curve" className="w-full " />

      {/* slider  */}

      <div
        style={{ backgroundImage: `url(${SliderImg})` }}
        className="relative overflow-hidden  py-5"
      >
        <div className="flex gap-10 animate-marquee-left whitespace-nowrap">
          {[...TherapyData, ...TherapyData].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <TiStarburst className="text-white" />
              <h4>{item.value}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientsTrust;
