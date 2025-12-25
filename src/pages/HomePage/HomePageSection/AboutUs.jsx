import React from "react";
import CountUp from "react-countup";
import img1 from "../../../assets/HomePageImgs/AboutUs/img1.png";
import img2 from "../../../assets/HomePageImgs/AboutUs/img2.png";
import img3 from "../../../assets/HomePageImgs/AboutUs/img3.png";
import CounterBg from "../../../assets/HomePageImgs/AboutUs/CounterBg.png";
import PrimaryBtn from "../../../component/PrimaryBtn";
import Title from "../../../component/Title";

const AboutUs = () => {
  return (
    <section className="">
      <div className=" mx-auto ">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-8 items-center container capitalize">
          {/* LEFT SECTION */}
          <div
            className="relative grid grid-cols-2 gap-7  order-1 md:order-1 lg:order-1"
          >
            {/* Image 1 */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={img2}
                alt="treatment"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Image 2 & 3 */}
            <div className="flex flex-col justify-between rounded-3xl overflow-hidden ">
              <div>
                <img src={img1} alt="physio" className="w-full rounded-3xl" />
              </div>
              <img src={img3} alt="physio" className="w-full object-cover " />
            </div>

            {/* COUNTER */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* WHITE OUTLINE */}
              <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-xl">
                {/* BACKGROUND IMAGE CIRCLE */}
                <div
                  className="w-40 h-40 rounded-full flex items-center justify-center bg-center bg-cover "
                  style={{ backgroundImage: `url(${CounterBg})` }}
                >
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white">
                      <CountUp start={0} end={20} duration={2.5} />+
                    </h3>
                    <p className="text-xs text-white mt-1 leading-tight">
                      YEARS OF EXPERTISE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="order-2 space-y-7 ">
            <Title
              className="text-[#696969] text-xl md:text-3xl "
              title="About Us"
            />
            <h1 className="leading-tight">
              Om Sai Physiotherapy
              <span className="text-[#696969]">
                <br />
                Mississauga
              </span>
            </h1>

            <p className="font-lato text-[#696969] w-full lg:w-[93%]">
              Welcome to Om Sai Physiotherapy Clinic in Mississauga, your
              trusted destination for expert physiotherapy and rehabilitation.
              Our experienced physiotherapists provide personalized,
              evidence-based care for acute injuries, chronic pain, and mobility
              issues.
            </p>

            <p className="font-lato text-[#696969] w-full lg:w-[93%]">
              We offer comprehensive physiotherapy services in Mississauga,
              helping patients move better, recover faster, and live pain-free.
              Our modern, welcoming clinic ensures effective treatment plans
              tailored for every patient, from athletes to seniors.
            </p>
            <p className="font-lato text-[#696969] w-full lg:w-[93%]">
              Start your recovery today at Om Sai Physiotherapy Clinic – North
              York’s trusted physiotherapy center.
            </p>
            <hr className="w-full h-0.5 bg-[#696969] border-none" />

            <PrimaryBtn>Learn More</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
