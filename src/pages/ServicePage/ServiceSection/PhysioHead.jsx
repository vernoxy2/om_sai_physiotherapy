import React from "react";

const PhysioHead = ({ Heading, subtext, subtext1, WhiteText, BgImg }) => {
  return (
    <div
      style={{ backgroundImage: `url(${BgImg})` }}
      className="bg-no-repeat bg-cover bg-center flex items-center justify-start min-h-[280px] md:min-h-[550px]"
    >
      <div className="container grid  lg:grid-cols-3 h-full py-5 pt-24 md:pt-0">
        <div className="h-full md:w-2/3 lg:w-full flex flex-col items-start justify-center space-y-5 md:col-span-2">
          <h1 className="text-start w-[80%] leading-tight text-primary">
            {Heading}{" "}
            <span className="text-white">{WhiteText}</span>
          </h1>

          <p className="text-white font-lato lg:w-3/4 capitalize">
            {subtext}
          </p>
          <p className="text-white font-lato lg:w-3/4 capitalize">
            {subtext1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhysioHead;
