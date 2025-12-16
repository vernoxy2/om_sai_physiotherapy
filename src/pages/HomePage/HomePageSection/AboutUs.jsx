import React from "react";
import CountUp from "react-countup";
import img1 from "../../../assets/AboutUsPageImgs/img1.png";
import img2 from "../../../assets/AboutUsPageImgs/img2.png";
import img3 from "../../../assets/AboutUsPageImgs/img3.png";

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-6 items-center">

          {/* LEFT SECTION */}
          <div className="col-span-12 xl:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">

              {/* Image 1 */}
              <div className="rounded-2xl overflow-hidden">
                <img src={img1} alt="physio" className="w-full h-full object-cover" />
              </div>

              {/* Image 2 */}
              <div className="rounded-2xl overflow-hidden">
                <img src={img2} alt="treatment" className="w-full h-full object-cover" />
              </div>

              {/* Image 3 */}
              <div className="col-span-2 rounded-2xl overflow-hidden">
                <img src={img3} alt="exercise" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* CIRCLE COUNTER */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-36 h-36 rounded-full bg-white shadow-xl flex flex-col items-center justify-center border">
                <h3 className="text-3xl font-bold text-teal-600">
                  <CountUp start={0} end={15} duration={2.5} />+
                </h3>
                <p className="text-xs text-gray-500 text-center mt-1">
                  YEARS OF <br /> EXPERIENCE
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-span-12 xl:col-span-6 space-y-5">
            <span className="text-teal-600 font-medium">About Us</span>

            <h2 className="text-4xl font-semibold leading-tight">
              Om Sai Physiotherapy Clinic <br />
              <span className="text-gray-500">North York</span>
            </h2>

            <p className="text-gray-600">
              Welcome to Om Sai Physiotherapy Clinic in North York, your trusted
              destination for expert physiotherapy and rehabilitation.
              Our experienced physiotherapists provide personalized,
              evidence-based care for acute injuries, chronic pain,
              and mobility issues.
            </p>

            <p className="text-gray-600">
              Our modern clinic ensures effective treatment plans tailored for
              every patient — from athletes to seniors.
            </p>

            <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
              Learn More
              <span className="w-8 h-8 rounded-full bg-white text-teal-600 flex items-center justify-center">
                →
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
