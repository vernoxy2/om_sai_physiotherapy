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
      className="bg-no-repeat bg-cover bg-center items-center justify-start flex lg:h-screen max-h-auto"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="h-full flex flex-col items-start justify-center space-y-3">
          <h1 className=" text-start space-x-4 leading-tight text-primary">
            {slides[0].MainText}
          </h1>
          <div className="space-y-5">
            <p className="text-white font-lato lg:w-3/4 ">
              {slides[0].SubText}
            </p>
            <p className="text-white font-lato lg:w-4/5 ">
              {slides[0].SubText1}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
