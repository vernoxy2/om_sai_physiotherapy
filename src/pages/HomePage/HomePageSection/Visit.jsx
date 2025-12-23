import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Title from "../../../component/Title";
import PrimaryBtn from "../../../component/PrimaryBtn";
import cvrImg from "../../../assets/HomePageImgs/Trustus/coverImg.png";
import SliderImg from "../../../assets/HomePageImgs/Trustus/SliderImg.png";
import { TiStarburst } from "react-icons/ti";

const Visit = () => {
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
 const [dateTime, setDateTime] = useState(null);

  return (
    <section>
      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start container">
        {/* Left Content */}
        <div className="space-y-4 lg:w-[80%]">
          <Title className="text-xl text-[#696969]" title="Plan Your Visit " />
          <h3 className="text-3xl md:text-4xl font-light text-primary ">
            Take The First Step <br />
            <span className="font-medium text-[#696969]">
              To A Pain-Free Life
            </span>
          </h3>
          <p className="text-[#696969] text-sm ">
            Read what our patients have to say about their experiences at Om Sai
            Physiotherapy Clinic. Discover how our personalized physiotherapy
            care has helped them regain mobility, reduce pain, and improve
            overall health.
          </p>
          <p className="text-[#696969] text-sm">
            We value your feedback! Please consider leaving a review on Google
            to share your experience and help others find trusted physiotherapy
            care.
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
            <DatePicker
              selected={dateTime}
              onChange={(date) => setDateTime(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select Date & Time*"
              className="w-full rounded-full bg-[#EEEEEE] px-5 py-3 text-sm focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Enter Your Message Here*"
            rows={4}
            className="w-full rounded-2xl bg-[#EEEEEE] px-5 py-4 text-sm focus:outline-none mb-4"
          />
          <PrimaryBtn className="w-full">Schedule Your Visit</PrimaryBtn>
        </form>

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

export default Visit;
