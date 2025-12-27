import React from "react";
import BgImg from "../../../assets/ConditionPageImgs/BgImg.png";

const Head = () => {
  const slides = [
    {
      MainText: (
        <>
          Conditions <span className="text-white">We Treat</span>
        </>
      ),
      SubText: (
        <>
          At Om Sai Physiotherapy Clinic, we provide comprehensive treatment for
          a wide range of musculoskeletal, neurological, and injury-related
          conditions. Our expert team uses evidence-based techniques to help you
          recover from pain, restore mobility, and return to your daily
          activities with confidence.
        </>
      ),
      SubText1: (
        <>
          From shoulder and spine issues to sports injuries, post-surgical care,
          and accident rehabilitation, we ensure every patient receives
          personalized, results-driven treatment for faster healing.
        </>
      ),
    },
  ];
  return (
    <section
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-no-repeat bg-cover bg-center items-center justify-start flex min-h-[280px] md:min-h-[550px] pb-14"
    >
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 h-full capitalize py-5 pt-20 md:pt-0">
        <div className="h-full md:w-2/3 lg:w-full flex flex-col items-start justify-center space-y-3 md:col-span-2">
          <h1 className=" text-start space-x-4 leading-tight text-primary">
            {slides[0].MainText}
          </h1>
          <div className="space-y-5">
            <p className="text-white font-lato lg:w-3/4 text-sm md:text-base">
              {slides[0].SubText}
            </p>
            <p className="text-white font-lato lg:w-4/5 text-sm md:text-base">
              {slides[0].SubText1}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
